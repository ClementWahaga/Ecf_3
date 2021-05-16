let list = document.getElementsByTagName("table")
var table = document.getElementById("myTable");

let xhr = new XMLHttpRequest()
var url = "https://6057e432c3f49200173ad08d.mockapi.io/api/v1/employees/"

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        list.innerHtml = xhr.response
        console.log(xhr.response);
    }



}
xhr.open("GET", url, true)
xhr.responseType = 'json'
xhr.send();

/*-------------------------------------------------creation du tableau------------------------------------------------------------------------ */

function generate_table() {
    var data = xhr.response
    console.log(xhr);

    for (var i = 0; i < data.length; i++) {
        var row = `
             <tr>
                <td style="border: 2px solid black;">${data[i].email}</td> 
                <td style="border: 2px solid black;">${data[i].id}</td> 
                <td style="border: 2px solid green;">${data[i].job_title}</td> 
                <td style="border: 2px solid yellow;">${data[i].last_name}</td> 
                <td style="border: 2px solid red;">${data[i].name}</td>
            
            
                <td style="border: 2px solid black "><input type="button" value="Id" onclick="displayId()" id="display" style="cursor:pointer"></td>
                <td style="border: 2px solid black "><input type="button" value="mod" onclick="modifyId()"style="cursor:pointer"></td>
                <td style="border: 2px solid black;"><input type="button" value="del" onclick="deleteId()"style="cursor:pointer"></td> 
            </tr>`




        ;
        table.innerHTML += row;

    }



}
/*-------------------------------------------------affichez employees------------------------------------------------------------------------ */

function displayId() {


    data = xhr.response

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var t = Object.assign(this.response)
            var u = Object.keys(t)
            console.log(t);

            console.log(u);

            (alert('nom: ' + data['name'] + '\n' + 'prenom: ' + data['last_name'] + '\n' + 'emploi: ' + data['job_title']))



        }



    }
    xhr.open("GET", "https://6057e432c3f49200173ad08d.mockapi.io/api/v1/employees/", true)
    xhr.responseType = 'json'
    xhr.send();

}



/*-------------------------------------------------modifié employees------------------------------------------------------------------------ */
function modifyId() {
    var data = xhr.response
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            list.innerHtml = xhr.response
            console.log(xhr.response);
        }



    }
    xhr.open("PUT", url_display, true)
    xhr.responseType = 'json'
    xhr.send();

    var j = prompt('Modifier le nom', data.name);
    if (j !== '') {
        const newData = {

            name: name,

        };
        data.name.replace(j, newData)

    }

    /*-------------------------------------------------supprimez employees------------------------------------------------------------------------ */
    function deleteId() {
        var data = xhr.response
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                list.innerHtml = xhr.response
                console.log(xhr.response);
            }



        }
        xhr.open("DELETE", url_display, true)
        xhr.responseType = 'json'
        xhr.send();
        for (var i = 0; i < 100; i++) {
            if (confirm(`Souhaitez vous supprimez l'employees :"data.name`)) {
                data.name.remove(row)

            }
        }



    }
    /*-------------------------------------------------ajoutez employees------------------------------------------------------------------------ */
    function create() {
        var data = xhr.response

        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 201) {

                console.log(xhr.response);



            }

        }
        xhr.open("POST", url, true)
        xhr.responseType = 'json'
        xhr.send(j, k, l, m);

        var j = JSON.parse(prompt('Name:', data.name))
        var k = JSON.parse(prompt('LastName:', data.last_name));
        var l = JSON.parse(prompt('@mail:', data.email));
        var m = JSON.parse(prompt('emploi:', data.job_title));








    }
}