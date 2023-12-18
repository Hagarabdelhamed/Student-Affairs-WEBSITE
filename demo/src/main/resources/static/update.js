document.getElementById("updateFormStep1").addEventListener("submit", function(event) {
    event.preventDefault();
    validateID();
});

document.getElementById("updateFormStep2").addEventListener("submit", function(event) {
    event.preventDefault();
    // Perform the update operation using AJAX or fetch API
    updateStudent();
});

function validateID() {
    let studentID = document.getElementById("id").value;

    // Make an asynchronous AJAX request to check if the student ID exists
    fetch("/student/check/" + studentID)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            if (data.exists) {
                // Student ID exists, fetch the student data and populate the form
                fetchStudentData(studentID);
            } else {
                // Student ID does not exist, display an error message
                alert("Student with ID " + studentID + " does not exist.");
            }
        })
        .catch(function(error) {
            console.log(error);
        });
}

function fetchStudentData(studentID) {
    // Make an asynchronous AJAX request to fetch student data by ID
    fetch("/student/fetch/" + studentID)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            // Populate the form with the retrieved values
            document.getElementById("firstName").value = data.firstName;
            document.getElementById("lastName").value = data.lastName;
            document.getElementById("gender").value = data.gender;
            document.getElementById("gpa").value = data.gpa;
            document.getElementById("level").value = data.level;
            document.getElementById("address").value = data.address;

            // Hide Step 1 form and show Step 2 form
            document.getElementById("updateFormStep1").style.display = "none";
            document.getElementById("updateFormStep2").style.display = "block";
        })
        .catch(function(error) {
            console.log(error);
        });
}

function updateStudent() {
    let id = document.getElementById("id").value;
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let gender = document.getElementById("gender").value;
    let gpa = document.getElementById("gpa").value;
    let level = document.getElementById("level").value;
    let address = document.getElementById("address").value;

    // Perform the update operation using AJAX or fetch API
    fetch("/student/update/" + id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "id": id,
            "firstName": firstName,
            "lastName": lastName,
            "gender": gender,
            "gpa": parseFloat(gpa),
            "level": level,
            "address": address
        })
    })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            alert("Student with ID " + id + " updated successfully");
        })
        .catch(function(error) {
            console.log(error);
        });
}
