// Get all users
let list = document.getElementsByTagName("table")
var table = document.getElementById("myTable");
var url = "https://6057e432c3f49200173ad08d.mockapi.io/api/v1/employees/"



var xhr = new XMLHttpRequest()
xhr.open('GET', url, true)
xhr.onload = function() {
    var data = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "200") {

        console.log(xhr);

        for (var i = 0; i < data.length; i++) {
            var row = `
             <tr id ='id' >
                
                <td style="border: 2px solid black;">${data[i].id}</td> 
                <td style="border: 2px solid yellow;">${data[i].last_name}</td> 
                <td  style="border: 2px solid red;">${data[i].name}</td>
            
            
                <td style="border: 2px solid black "><input type="button" value="view more"onclick="display()" style="cursor:pointer"></td>
                <td style="border: 2px solid black "><input type="button" value="modify" onclick="modifyId()" style="cursor:pointer"></td>
                <td style="border: 2px solid black;"><input type="button" value="delete" onclick="deleteId()" "style="cursor:pointer" ></td> 
            </tr>`




            ;
            table.innerHTML += row;


        }







    }
    console.table(data);

}
xhr.send();

/*----------------------------------------------------------------------------------displayUser----------------------------------------------------*/






function display() {


    var xhr = new XMLHttpRequest()

    xhr.onload = function() {
        var data = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {

            for (var i = 0; i < data.length; i++) {
                alert('id:' + data[i].id + '\n' + 'nom: ' + data[i].name + '\n' + 'prenom: ' + data[i].last_name + '\n' + 'emploi: ' + data[i].job_title + '\n' + 'email:' + data[i].email)
            }

            console.table(data);
        } else {
            console.error(data);
        }
    }
}
xhr.open('GET', url, true)
xhr.send();




/*----------------------------------------------------------------Create a user -------------------------------------------------------------------------------------------- */


function create(onload) {
    var newdata = {}
    newdata.name = prompt("name")
    newdata.last_name = prompt("lastname")
    newdata.email = prompt("email")
    newdata.job_title = prompt("job")
    var json = JSON.stringify(newdata);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.onload = function() {
        var employees = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "201") {
            console.table(employees);
        } else {
            console.error(employees);
        }
    }
    xhr.send(json);
    console.log(xhr.send(json));
}



/*---------------------------------------------------------------------------------Update a user----------------------------------------------------------------------*/

function modifyId(params) {
    var data = {};
    data.firstname = prompt("modifyName");
    data.lastname = prompt("modifyLastname");
    data.email = prompt("modifyEmail");
    data.job_title = prompt("modifyJob")
    var json = JSON.stringify(data);

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url + data, true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.onload = function() {
        var data = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(data);
        } else {
            console.error(data);
        }
    }
    xhr.send(json);
}



/*----------------------------------------------------------------------------------------------------- Delete a user-------------------------------------------------------*/
function deleteId(choise) {
    var choise = confirm("voulais vous vraiment supprimer cet utilisateur")
    var xhr = new XMLHttpRequest();
    xhr.open("DELETE", url, true);
    xhr.onload = function() {
        var data = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            data.target.push
            console.table(data);
        } else {
            console.error(data);
        }
    }
    xhr.send();

}