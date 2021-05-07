var redirect_uri = "https://bvspotify-clone.netlify.app"; //change this with yours

var client_id = ""; // 13c468f404364a5cbaa963de222be49c
var client_secret = ""; // 9570146a178a420f94151b06ae856437

var access_token = null;
var refresh_token = null;
var currentPlaylist = "";

const AUTHORIZE = "https://accounts.spotify.com/authorize";
const TOKEN = "https://accounts.spotify.com/api/token";
const PLAYLISTS = "https://api.spotify.com/v1/me/playlists";
const TRACKS = "https://api.spotify.com/v1/playlists/{{PlaylistId}}/tracks";

function onPageLoad() {
  client_id = localStorage.getItem("client_id");
  client_secret = localStorage.getItem("client_secret");
  if (window.location.search.length > 0) {
    handleRedirect();
  } else {
    access_token = localStorage.getItem("access_token");
    if (access_token == null) {
      // we don't have an access token so present token section
      document.getElementById("tokenSection").style.display = "block";
    } else {
      // we have an access token so present device section
      document.getElementById("playlistSection").style.display = "block";

      // refreshPlaylists();
    }
  }
}
function handleRedirect() {
  let code = getCode();
  fetchAccessToken(code);
  window.history.pushState("", "", redirect_uri); // remove param from url
}

function getCode() {
  let code = null;
  const queryString = window.location.search;
  if (queryString.length > 0) {
    const urlParams = new URLSearchParams(queryString);
    code = urlParams.get("code");
  }
  return code;
}

function requestAuthorization() {
  client_id = document.getElementById("clientId").value;
  client_secret = document.getElementById("clientSecret").value;
  localStorage.setItem("client_id", client_id);
  localStorage.setItem("client_secret", client_secret);

  let url = AUTHORIZE;
  url += "?client_id=" + client_id;
  url += "&response_type=code";
  url += "&redirect_uri=" + encodeURI(redirect_uri);
  url += "&show_dialog=true";
  url +=
    "&scope=user-read-private user-read-email user-modify-playback-state user-read-playback-position user-library-read streaming user-read-playback-state user-read-recently-played playlist-read-private";
  window.location.href = url; // Show Spotify's authorization screen
}

function fetchAccessToken(code) {
  let body = "grant_type=authorization_code";
  body += "&code=" + code;
  body += "&redirect_uri=" + encodeURI(redirect_uri);
  body += "&client_id=" + client_id;
  body += "&client_secret=" + client_secret;
  callAuthorizationApi(body);
}

function callAuthorizationApi(body) {
  let xhr = new XMLHttpRequest();
  xhr.open("POST", TOKEN, true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.setRequestHeader(
    "Authorization",
    "Basic " + btoa(client_id + ":" + client_secret)
  );
  xhr.send(body);
  xhr.onload = handleAuthorizationResponse;
}

function handleAuthorizationResponse() {
  if (this.status == 200) {
    var data = JSON.parse(this.responseText);
    console.log(data);
    var data = JSON.parse(this.responseText);
    if (data.access_token != undefined) {
      access_token = data.access_token;
      localStorage.setItem("access_token", access_token);
    }
    if (data.refresh_token != undefined) {
      refresh_token = data.refresh_token;
      localStorage.setItem("refresh_token", refresh_token);
    }
    onPageLoad();
  } else {
    console.log(this.responseText);
    alert(this.responseText);
  }
}

function refreshAccessToken() {
  refresh_token = localStorage.getItem("refresh_token");
  let body = "grant_type=refresh_token";
  body += "&refresh_token=" + refresh_token;
  body += "&client_id=" + client_id;
  callAuthorizationApi(body);
}
function refreshPlaylists() {
  callApi("GET", PLAYLISTS, null, handlePlaylistsResponse);
}

function handlePlaylistsResponse() {
  if (this.status == 200) {
    var data = JSON.parse(this.responseText);
    console.log(data);
    console.log(data.items[0].images[2].url);
    removeAllItems("playlists");
    let playlistCover = "";
    data.items.forEach((item) => {
      addPlaylist(item);
      playlistCover += `<div class="col-sm-3 d-flex pb-3">
      <div class="card" style="width: 18rem;">
  <img src="${item.images[0].url}" class="card-img-top" alt="img">
  <div class="card-body">
    <h5 class="card-title">${item.name}</h5>
    
    
  </div>
</div>
</div>`;
    });
    document.getElementById("playlistCover").innerHTML = playlistCover;
    document.getElementById("playlists").value = currentPlaylist;
  } else if (this.status == 401) {
    refreshAccessToken();
  } else {
    console.log(this.responseText);
    alert(this.responseText);
  }
}

function addPlaylist(item) {
  let node = document.createElement("option");
  node.value = item.id;
  node.innerHTML = item.name + " (" + item.tracks.total + ")";
  document.getElementById("playlists").appendChild(node);
  console.log(node);
}

function removeAllItems(elementId) {
  let node = document.getElementById(elementId);
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}
function callApi(method, url, body, callback) {
  let xhr = new XMLHttpRequest();
  xhr.open(method, url, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Authorization", "Bearer " + access_token);
  xhr.send(body);
  xhr.onload = callback;
}
function fetchTracks() {
  let playlist_id = document.getElementById("playlists").value;
  if (playlist_id.length > 0) {
    url = TRACKS.replace("{{PlaylistId}}", playlist_id);
    callApi("GET", url, null, handleTracksResponse);
  }
}
function handleTracksResponse() {
  if (this.status == 200) {
    var data = JSON.parse(this.responseText);
    console.log(data);
    removeAllItems("tracks");
    let albumCover = "";
    data.items.forEach((item, index) => {
      addTrack(item, index);
      albumCover += `<div class="col-sm-3 d-flex pb-3">
      <div class="card" style="width: 18rem;">
  <img src="${item.track.album.images[0].url}" class="card-img-top" alt="img">
  <div class="card-body">
    <h5 class="card-title">${item.track.name}</h5>
    <p class="card-text">${item.track.artists[0].name}</p>
    
  </div>
</div>
</div>`;
    });
    document.getElementById("albumCover").innerHTML = albumCover;
  } else if (this.status == 401) {
    refreshAccessToken();
  } else {
    console.log(this.responseText);
    alert(this.responseText);
  }
}
function addTrack(item, index) {
  let node = document.createElement("option");
  node.value = index;
  node.innerHTML = item.track.name + " (" + item.track.artists[0].name + ")";
  document.getElementById("tracks").appendChild(node);
}
