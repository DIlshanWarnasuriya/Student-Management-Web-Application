let sId = document.getElementById("StudentId");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let province = document.getElementById("province");
let age = document.getElementById("age");

let body = ``;

tableLoad();

function tableLoad() {
    fetch("http://localhost:8080/student")
        .then(res => res.json())
        .then(data => {
            data.forEach(element => {
                body += `<tr>
                    <th>${element.id}</th>
                    <td>${element.firstName}</td>
                    <td>${element.lastName}</td>
                    <td>${element.age}</td>
                    <td>${element.province}</td>
                    <td>
                        <button type="button" class="btn btn-secondary" onclick="edit(${element.id})" data-bs-toggle="modal" data-bs-target="#updateModel">Edit</button>
                        <button type="button" class="btn btn-danger" onclick="confirmationOfDelete(${element.id})" data-bs-toggle="modal" data-bs-target="#deleteConfirmation">Delete</button>
                    </td>
                </tr>`
            });
            tableBody.innerHTML = body;
        })
}

function search() {
    body = ``;

    //search by province
    fetch("http://localhost:8080/student-by-province/" + searchBox.value)
        .then(res => res.json())
        .then(data => {
            data.forEach(element => {
                body += `<tr>
                        <th>${element.id}</th>
                        <td>${element.firstName}</td>
                        <td>${element.lastName}</td>
                        <td>${element.age}</td>
                        <td>${element.province}</td>
                        <td>
                            <button type="button" class="btn btn-secondary" onclick="edit(${element.id})" data-bs-toggle="modal" data-bs-target="#updateModel">Edit</button>
                            <button type="button" class="btn btn-danger" onclick="confirmationOfDelete(${element.id})" data-bs-toggle="modal" data-bs-target="#deleteConfirmation">Delete</button>
                        </td>
                    </tr>`
            });
            tableBody.innerHTML = body;
        })

    //search by first name
    fetch("http://localhost:8080/student-by-firstName/" + searchBox.value)
        .then(res => res.json())
        .then(data => {
            data.forEach(element => {
                body += `<tr>
                        <th>${element.id}</th>
                        <td>${element.firstName}</td>
                        <td>${element.lastName}</td>
                        <td>${element.age}</td>
                        <td>${element.province}</td>
                        <td>
                            <button type="button" class="btn btn-secondary" onclick="edit(${element.id})" data-bs-toggle="modal" data-bs-target="#updateModel">Edit</button>
                            <button type="button" class="btn btn-danger" onclick="confirmationOfDelete(${element.id})" data-bs-toggle="modal" data-bs-target="#deleteConfirmation">Delete</button>
                        </td>
                    </tr>`
            });
            tableBody.innerHTML = body;
        })

    //search by last name
    fetch("http://localhost:8080/student-by-lastName/" + searchBox.value)
        .then(res => res.json())
        .then(data => {
            data.forEach(element => {
                body += `<tr>
                        <th>${element.id}</th>
                        <td>${element.firstName}</td>
                        <td>${element.lastName}</td>
                        <td>${element.age}</td>
                        <td>${element.province}</td>
                        <td>
                            <button type="button" class="btn btn-secondary" onclick="edit(${element.id})" data-bs-toggle="modal" data-bs-target="#updateModel">Edit</button>
                            <button type="button" class="btn btn-danger" onclick="confirmationOfDelete(${element.id})" data-bs-toggle="modal" data-bs-target="#deleteConfirmation">Delete</button>
                        </td>
                    </tr>`
            });
            tableBody.innerHTML = body;
        })

    //search by age
    fetch("http://localhost:8080/student-by-age/" + Number(searchBox.value))
        .then(res => res.json())
        .then(data => {
            data.forEach(element => {
                body += `<tr>
                    <th>${element.id}</th>
                    <td>${element.firstName}</td>
                    <td>${element.lastName}</td>
                    <td>${element.age}</td>
                    <td>${element.province}</td>
                    <td>
                        <button type="button" class="btn btn-secondary" onclick="edit(${element.id})" data-bs-toggle="modal" data-bs-target="#updateModel">Edit</button>
                        <button type="button" class="btn btn-danger" onclick="confirmationOfDelete(${element.id})" data-bs-toggle="modal" data-bs-target="#deleteConfirmation">Delete</button>
                    </td>
                </tr>`
            });
            tableBody.innerHTML = body;
        })
}

let StudentId = 0;

//Delete functions
function confirmationOfDelete(id) {
    StudentId = id;
}

function deleteStudent() {
    fetch("http://localhost:8080/student?id=" + StudentId, {
        method: "DELETE",
        headers: {
            "content-type": "application/json"
        },
        body: null
    })
        .then(res => res.json())
        .then(data => { })
}


//Update functions
function edit(id) {
    fetch("http://localhost:8080/student-by-id/" + id)
        .then(res => res.json())
        .then(data => {
            sId.innerHTML = "Student ID : " + data.id;
            firstName.value = data.firstName;
            lastName.value = data.lastName;
            province.value = data.province;
            age.value = data.age;
            StudentId = data.id;
        })
}

function update() {
    let requestBody = {
        "id": Number(StudentId),
        "firstName": firstName.value,
        "lastName": lastName.value,
        "province": province.value,
        "age": Number(age.value)
    }

    fetch("http://localhost:8080/student", {
        method: "PATCH",
        body: JSON.stringify(requestBody),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(res => res.json())
        .then(data => { })
}