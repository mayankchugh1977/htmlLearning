//Enter your code here

var planetListObject = [
    {
        name: 'Mercury: It is the closest planet to the Sun, and second smallest planet in the solar system.'
    },
    {
        name: 'Venus: It is the second planet in the solar system.'
    },
    {
        name: 'Earth: Our planet earth is the third planet in the solar system.'
    },
    {
        name: 'Mars: It is the fourth planet from the Sun and is commonly referred to as the Red Planet.'
    },
    {
        name: 'Jupiter: It is the fifth planet from the Sun and is the largest planet in the solar system.'
    },
    {
        name: 'Saturn: It is the sixth planet from the Sun and is the second largest in the solar system'
    },
    {
        name: 'Uranus: It is the seventh planet from the Sun and is the third largest in the solar system.'
    },
    {
        name: 'Neptune: It is the outermost planet of the solar system.'
    }
];


function addListOfEvents(){
    planetListObject.forEach(function(value,index){
        var template = '<ul>'+'<li>'+value.name +'</li>';
       
            document.getElementById('addEventNames').innerHTML += template;
    })
}