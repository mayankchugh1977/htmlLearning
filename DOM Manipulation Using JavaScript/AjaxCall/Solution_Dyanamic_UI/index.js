var xhr = new XMLHttpRequest;
var apiString = 'https://api.openaq.org/v1/countries';
xhr.open('GET', apiString);
xhr.send();
xhr.onreadystatechange = function(){
   if(xhr.readyState == 4 && xhr.status == 200){
       printStuff();
   };
};



function printStuff(){
   var output = JSON.parse(xhr.response);
   document.getElementById("country_data").innerHTML  = "<p>Country    Country Code</p>";
   console.log(output.results);
   output.results.forEach(country = function(countryData){
       document.getElementById("country_data").innerHTML += "<p>"+countryData.name+"   " +countryData.code+"</p>";
   });
};