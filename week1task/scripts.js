// create a request variable.
let request = new XMLHttpRequest();

// open the request.
request.open("GET", "https://restcountries.eu/rest/v2/all", true);

// send the request.
request.send();

// load the response.
request.onload = function (){
    let data = JSON.parse(this.response)
    for (i in data){
    let val=data[i];
    for (j in val){
        if (j=="flag"){
            console.log(data[i][j]);
        }
    }
    }

}