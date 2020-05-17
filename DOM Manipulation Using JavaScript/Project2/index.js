//Enter your code here
document.getElementById('yesButton').addEventListener('click',function() {
    alert('Thank you for your feedback')
} ); 

document.getElementById('noButton').addEventListener('click',function() {
    document.getElementById('commentBox').value = "";
} );

document.getElementById('submitButton').addEventListener('click',function() {
    var textAreaValue = document.getElementById('commentBox').value;
    if(textAreaValue == ""){
        alert("The comments section cannot be empty");
    }   else {
        alert("Thank you for taking your time to give us feedback. We hope you have a better experience next time");
        }
} );