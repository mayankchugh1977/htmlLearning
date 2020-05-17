function addComments(id){
    var addEventName = id.value +'<br>';
    var a = document.getElementById('userComments');
    document.getElementById('addEventNames').innerHTML += '<p>'+addEventName+'</p>';          
    a.value=a.defaultValue;
}
//Enter your code here

var likeCountVar = 0;
document.getElementById('likeBlog').addEventListener('click',function() {
    var likeText = '';
    if(likeCountVar == 1){
        likeText = likeCountVar + ' person like this!';
    }else if(likeCountVar != 0){
        likeText = likeCountVar + ' people have like this!';
    }
    console.log(likeCountVar);
    console.log(likeText);
        var template = -'<div for="likeBlog" class="likeBlogButton form-controls">'+
        '<button  id="likeBlog" >Liked</button>'+likeText+
        '</div>' ;
        
        console.log(template)
        
        if(likeCountVar != 0){
            document.getElementById('likeBlog').innerHTML = template;
        }
        likeCountVar++;
} );
