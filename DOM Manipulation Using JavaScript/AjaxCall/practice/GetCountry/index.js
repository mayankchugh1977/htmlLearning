// Write your code to get country-wise cities
var xhr = new XMLHttpRequest();
function getCities(country){
    var ctry = document.getElementById('country').value;

    xhr.open('GET', "https://api.openaq.org/v1/cities?country="+country.value);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    var access = sessionStorage.getItem('access-token');
    xhr.setRequestHeader('Authorization', "Bearer "+access);
    xhr.send();
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4) {
            

            var cityList = JSON.parse(xhr.responseText);
            // console.log(cityList);
            var citys = cityList.results;
            console.log(citys);
            // citys.forEach(function(value,index){
            //     console.log(value);
                // var template = "<p>"+ value.name +"</p>"
                // // var template = "<div id="+ value.id +" onclick=showProjects('"+ value.id+"')>"+ value.name +"</div>"
                // document.getElementById('city-list').innerHTML += template;
                // document.getElementById('city-list').innerHTML += '<li onclick=loadMenu('+value.id +')>'+ value.name +'</li>';
            //  });         
        }
    }
}