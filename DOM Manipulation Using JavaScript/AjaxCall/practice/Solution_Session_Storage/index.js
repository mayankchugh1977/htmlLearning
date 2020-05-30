function registerEmployee(name, role){
    var xhr = new XMLHttpRequest;
    if (name.value && role.value) {
        var empDetails = {
            name : name.value,
            role : role.value
        }
        xhr.open('POST','https://reqres.in/api/users')
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.send(JSON.stringify(empDetails));
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 201) {
                sessionStorage.setItem('user-details', xhr.responseText);
            }
        }
    } else {
        alert("Please input both the fields in the form.");
    }
}