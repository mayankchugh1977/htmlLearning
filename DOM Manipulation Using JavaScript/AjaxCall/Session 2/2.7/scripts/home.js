var xhr = new XMLHttpRequest();
function getBoards(){
    xhr.open('GET', "http://localhost:8080/api/v1/boards");
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    var access = sessionStorage.getItem('access-token');
    xhr.setRequestHeader('Authorization', "Bearer "+access);
    xhr.send();
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4) {
            var boardList = JSON.parse(xhr.responseText);
            var boards = boardList.boards;
            boards.forEach(function(value,index){
                var template = "<div id="+ value.id +" onclick=showProjects('"+ value.id+"')>"+ value.name +
                +"<button class='delete-btn' onclick=deleteBoard('"+ value.id +"')>Delete Board</button>"
                +"<button class='project-btn' onclick=addProject('"+ value.id +"')>Add Project</button>"+
                "</div>"
                document.getElementById('boardBlockList').innerHTML += template;
                document.getElementById('menuList').innerHTML += '<li onclick=loadMenu('+value.id +')>'+ value.name +'</li>';
             });         
        }
    }
}

function addBoardAPI(element) {
    var userDetail = JSON.parse(sessionStorage.getItem('user-detail'));
   
    var params = {
        "description": "string",
        "name": element.value,
        "owner_id": userDetail.id
        };

    xhr.open('POST', "http://localhost:8080/api/v1/boards");
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    var access = sessionStorage.getItem('access-token');
    xhr.setRequestHeader('Authorization', "Bearer "+access);
    xhr.send(JSON.stringify(params));

    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4) {
        getBoards();      
        }
    };
}

function deleteBoard(id) {
    event.stopPropagation();
    xhr.open('DELETE', "http://localhost:8080/api/v1/boards/"+ id);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    var access = sessionStorage.getItem('access-token');
    xhr.setRequestHeader('Authorization', "Bearer "+access);
    xhr.send();
    xhr.onreadystatechange = function() {
       if(xhr.readyState == 4) {
         document.getElementById(id).remove();
       }
    };
}

function addProject(id) {
    event.stopPropagation();
    var userDetail = JSON.parse(sessionStorage.getItem('user-detail'));
    var params = {
        "description": "New Project via API",
        "end_date": new Date(),
        "name": "Project Hello",
        "owner_id": userDetail.id,
        "start_date": new Date()
      };

    xhr.open('POST', "http://localhost:8080/api/v1/boards/"+id+"/projects");
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    var access = sessionStorage.getItem('access-token');
    xhr.setRequestHeader('Authorization', "Bearer "+access);
    xhr.send(JSON.stringify(params));

    xhr.onreadystatechange = function() {
       if(xhr.readyState == 4) {
        console.log(xhr.responseText);  
       }
    };
}



var projectListObject = [
    {
        name: 'Javascript One'
    },
    {
        name: 'Javascript Two'
    }
];


function showProject(listId){
   
    xhr.open('GET', "http://localhost:8080/api/v1/boards/"+listID+"/projects");
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    var access = sessionStorage.getItem('access-token');
    xhr.setRequestHeader('Authorization', "Bearer "+access);
    xhr.send();
    xhr.onreadystatechange = function() {
       if(xhr.readyState == 4) {
           console.log(xhr.responseText);
       }
    };

    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4) {
          var projectList = JSON.parse(xhr.responseText);
          var projects = projectList.projects;
 
          projects.forEach(function(value, index) {
             var template = '<div class="project-card">'+ value.name +
             '<ul>'+
                 '<li>Task one</li>'+
                 '<li>Task two</li>'+
             '</ul>'+
             '</div>';
             document.getElementById(listID).innerHTML += template;
           });
        }
     };

    
}
    

function toggleMenu() {
    var toggleVariable = document.getElementsByClassName('menu-block')[0];
    if(toggleVariable.style.display == 'none') {
        toggleVariable.style.display = '';
    }else {
        toggleVariable.style.display = 'none'
    }
}

function removeCard(){
    document.getElementById('projectList').innerHTML = '';
}
var idName = 1;
function addBoard(id){
    idName++;
    var listId = 'projectList_'+idName;
    var boardId = 'board_'+idName;
    var templateBlock = '<section class ="board-block" id = '+boardId+'>'+
    '<div>'+id.value+'<button onclick="removeCard('+listId+')">Remove Card</button></div>'+
    '<div class="project-block" id ='+listId+'>'+
        
    '</div>'+
    '</section>'

    document.getElementById('boardBlockList').innerHTML += templateBlock;
    showProject(listId);
    document.getElementById('menuList').innerHTML +='<li onClick ="loadMenu('+boardId+')">'+id.value+"</li>";
}

function loadMenu(element){
    console.log(element.id);
    document.getElementById(element.id).style.display = 'block';
}
