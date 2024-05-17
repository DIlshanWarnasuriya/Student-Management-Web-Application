
console.log("yash");

let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let province = document.getElementById("province");
let age = document.getElementById("age");
let tableBody = document.getElementById("tableBody")
let searchBox = document.getElementById("searchBox")

function registre() {
    if (firstName.value == "" || lastName.value == "" || province.value == "Select Province" || age.value == "" || Number(age.value) <= 0) {
        notification("Empty textBox", "Please enter valid data for registration", "warning", "no");
    }
    else {
        let requestBody = {
            "firstName": firstName.value,
            "lastName": lastName.value,
            "province": province.value,
            "age": Number(age.value)
        }

        fetch("http://localhost:8080/student", {
            method: "POST",
            body: JSON.stringify(requestBody),
            headers: {
                "content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => { });

        notification("Registration Success", "The student Registration successfully", "success", "yes")
    }
}

//------------- Nitification functions -------------

function notification(nitifiTitle, notifiText, notifiType, clear) {
    swal(
        {
            title: nitifiTitle,
            text: notifiText,
            type: notifiType,
            confirmButtonColor: "#1bc258",
            confirmButtonText: "Ok",
            closeOnConfirm: false,
            closeOnCancel: false,
        },
        function (isConfirm) {
            if (isConfirm) {
                if (clear == "yes") {
                    clearAll();
                }
                swal.close();
            }
        }
    );
}

function clearAll() {
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("province").value = "Select Province";
    document.getElementById("age").value = "";
}

