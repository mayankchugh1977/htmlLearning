// Write the event handler named registerEmployee which is used to register an employee
var xhr = new XMLHttpRequest();

function registerEmployee(firstName, role) {
	var params = {
		first_name: firstName.value,
		email: firstName.value+'@mail.com',
		last_name: firstName.value,
        avatar: role.value,
    }
    xhr.open('POST', 'https://reqres.in/api/users');

    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

    xhr.send(JSON.stringify(params));
    xhr.onreadystatechange = sendRequest;
}

function sendRequest() {
    console.log(xhr);
}
