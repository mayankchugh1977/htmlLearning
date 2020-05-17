//Enter your code here

document.getElementById('addList').addEventListener('click',function() {
    var newComment = document.getElementById('userComments').value;
    
    if(newComment != ''){
        var template = ''+
        '<p> ' +newComment +'</p>';
        document.getElementById('addEventNames').innerHTML += template;
        document.getElementById('userComments').value = '';
    }} );