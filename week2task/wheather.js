// create a request variable.
let request = new XMLHttpRequest();

// open the request.
request.open("GET", "https://restcountries.eu/rest/v2/all", true);

// send the request.
request.send();

// load the response.
request.onload = function (){
    let data = JSON.parse(this.response)
    
    
data.forEach(item=> {
let request_1 = new XMLHttpRequest();

let lat=item.latlng[0];
let lng=item.latlng[1];
if (lat!==undefined && lng!==undefined){


request_1.open("GET", "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lng+"&appid=3cb28bc941709304cd7f0d8b2a268508", true);


request_1.send();


request_1.onload = function (){
    let data_1 = JSON.parse(this.response)
    
console.log(item.name+":"+data_1.main.temp);
}
}
})       
        
       
}