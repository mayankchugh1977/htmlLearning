function generateAccessToken(username, password) {
   if (username.value.length == 0 || password.value.length == 0) {
       alert("Missing username and/or password!")
   } else {
       var currDate = new Date().toLocaleTimeString();
       var stringToEncode = username.value + password.value + currDate;
       var accessToken = window.btoa(stringToEncode);
       alert("Access Token : " + accessToken);
   }
}