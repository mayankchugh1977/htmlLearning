// Define the event handler named generateAccessToken which generates an access token using username, password and timestamp
var xhr = new XMLHttpRequest();

function generateAccessToken(username, password) {

    if(username.value == "" || password.value == ""){
        alert("Missing username and/or password!");
        return;
    }

    var timestamp = new Date().getTime();
    console.log("timestamp : "+timestamp);

    var accessToken = window.btoa(username.value +password.value + timestamp);
    console.log("concate value : "+username.value +password.value + timestamp);
    console.log("Access Token : "+accessToken);
    alert("Access Token : "+accessToken);
    return;
}