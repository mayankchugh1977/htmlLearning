//Write your code here
countrys();

function countrys(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "https://api.openaq.org/v1/countries");
    
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    var access = sessionStorage.getItem('access-token');
    xhr.setRequestHeader('Authorization', "Bearer "+access);
    xhr.send();
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4) {           

            var countryList = JSON.parse(xhr.responseText);
            var countrys = countryList.results;

            countrys.forEach(function(value,index){
                // console.log(value);
                // console.log(value.name);
                // console.log(value.code);
                var template = "<p>"+ value.name +" "+ value.code+"</p>"
                document.getElementById('country_data').innerHTML += template;
             });         
        }
    }
}