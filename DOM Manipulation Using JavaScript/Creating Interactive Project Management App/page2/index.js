//Enter your code here

addTemplate();

function addComment(){
        var template = '<div id ="addTemplate">'+
        '<p> For attending our conference on Frontend Development</p>'+
            '<p>Hope all of you found it informative!!!</p>'+
            '<p>We look forward to see you all in future conferences.</p>'+
        '<p>Best Regards,</p>'+
        '<p><h2>Team UpGrad</h2> </p></div>';
        document.getElementById('addTemplate').innerHTML += template;
}