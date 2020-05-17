var eventList =[{
    name: 'Mercury:',
    Details: 'It is the closest planet to the Sun, and second smallest planet in the solar system.'
},
{
    name: 'Venus:',
    Details: 'It is the second planet in the solar system.'
},
{
    name: 'Earth:',
    Details: 'Our planet earth is the third planet in the solar system.'
},
{
    name: 'Mars:',
    Details: 'It is the fourth planet from the Sun and is commonly referred to as the Red Planet.'
},
{
    name: 'Jupiter:',
    Details: 'It is the fifth planet from the Sun and is the largest planet in the solar system.'
},
{
    name: 'Saturn:',
    Details: 'It is the sixth planet from the Sun and is the second largest in the solar system'
}, 
{
    name: 'Uranus:',
    Details: 'It is the seventh planet from the Sun and is the third largest in the solar system.'
},
{
    name: 'Neptune:',
    Details: 'It is the outermost planet of the solar system.'
},
]
function addListOfEvents(){
        eventList.forEach(function(value,index){
            var addEventName = '<ul>'+'<li>'+value.name+'<n>'+value.Details +'</li>';
            document.getElementById('addEventNames').innerHTML += addEventName;
        })   
    
}


