// problem(1)--get all the asian countries

// create a request variable.
let request = new XMLHttpRequest();

// open the request.
request.open("GET", "https://restcountries.eu/rest/v2/all", true);

// send the request.
request.send();

// load the response.
request.onload = function (){
    let data = JSON.parse(this.response)
   let asia=data.filter(item=>{
       return item.region=="Asia"

   });
  let asianCountries = asia.map(item=>{
       return item.name;
   }); console.log(asianCountries);
};

//problem(2)--get the countries with population less than 2 lacs

// create a request variable.
let request = new XMLHttpRequest();

// open the request.
request.open("GET", "https://restcountries.eu/rest/v2/all", true);

// send the request.
request.send();

// load the response.
request.onload = function (){
    let data = JSON.parse(this.response)
    let countries=data.filter(item=>{
        return item.population < 200000
    });
    let requireCountries=countries.map(item=>{
        return item.name;
    }); console.log(requireCountries);
}

// problem(3)--print the name,capital and flag url of restcountries

// create a request variable.
let request = new XMLHttpRequest();

// open the request.
request.open("GET", "https://restcountries.eu/rest/v2/all", true);

// send the request.
request.send();

// load the response.
request.onload = function (){
    let data = JSON.parse(this.response)
    data.forEach(item=>{
        console.log(item.name,item.capital,item.flag);
    })

}

// problem(4)--print total population of restcountries

// create a request variable.
let request = new XMLHttpRequest();

// open the request.
request.open("GET", "https://restcountries.eu/rest/v2/all", true);

// send the request.
request.send();

// load the response.
request.onload = function (){
    let data = JSON.parse(this.response)
    let totalPopulation= data.reduce((total,item)=>{
        return total+=item.population;

    },0); console.log(totalPopulation);

};

//problem(5)--print total population of asian countries

// create a request variable.
let request = new XMLHttpRequest();

// open the request.
request.open("GET", "https://restcountries.eu/rest/v2/all", true);

// send the request.
request.send();

// load the response.
request.onload = function (){
    let data = JSON.parse(this.response)
   let asia=data.filter(item=>{
       return item.region=="Asia"

   });
   let totalPopulation=asia.reduce((total,item)=>{
       return total+=item.population;
   },0); console.log(totalPopulation)
};

// problem(6)--print countries whose currency is us dollar

// create a request variable.
let request = new XMLHttpRequest();

// open the request.
request.open("GET", "https://restcountries.eu/rest/v2/all", true);

// send the request.
request.send();

// load the response.
request.onload = function () {
    let data = JSON.parse(this.response)
    
    let countries = data.filter(item => {
       return item.currencies.find(i => i.code == "USD");
    });
    
    let dollarCountries = countries.map(item=>{
                return item.name;
    }); 
    console.log(dollarCountries);  
};

//or

let request = new XMLHttpRequest();

// open the request.
request.open("GET", "https://restcountries.eu/rest/v2/all", true);

// send the request.
request.send();

// load the response.
request.onload = function () {
    let data = JSON.parse(this.response)
     let dollarCountries = []
    data.forEach(item => {
        item.currencies.forEach(i => {
            if (i.code == "USD")
                dollarCountries.push(item.name);
        })
    });
    console.log(dollarCountries)
    
};

//problem(7)-- error handling on XMLHttpRequest

let request = new XMLHttpRequest();

// open the request.
request.open("GET", "https://restcountries.eu/rest/v2/all", true);

// send the request.
request.send();

// load the response.
request.onload = function () {
    let data = JSON.parse(this.response)
    try {
        if(data.length==200){
            console.log(data);
        } else {
            throw new Error('length must be 250')
        }
    }
    catch(error){
        console.log(error.name+":"+error.message)
        console.log(error.stack);
    }

};
