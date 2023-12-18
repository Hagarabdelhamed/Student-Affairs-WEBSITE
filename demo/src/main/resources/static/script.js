// Handling form submission in index.html
document
  .getElementById("studentCountForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    var studentCount = document.getElementById("studentCount").value;
    generateStudentForms(studentCount);
  });

// Generate student forms dynamically
function generateStudentForms(count) {
  var formContainer = document.getElementById("formContainer");
  formContainer.innerHTML = ""; // Clear previous forms (if any)

  for (var i = 0; i < count; i++) {
    var form = document.createElement("form");
    form.id = "studentForm" + i;

    // Create form fields
    var firstNameLabel = document.createElement("label");
    firstNameLabel.textContent = "First Name:";
    var firstNameInput = document.createElement("input");
    firstNameInput.type = "text";
    firstNameInput.name = "firstName";
    //required
    firstNameInput.required = true;

    var gpaLabel = document.createElement("label");
    gpaLabel.textContent = "GPA:";
    var gpaInput = document.createElement("input");
    gpaInput.type = "number";
    gpaInput.name = "gpa";
    gpaInput.required = true;

    // Append form fields to the form
    form.appendChild(firstNameLabel);
    form.appendChild(firstNameInput);
    form.appendChild(gpaLabel);
    form.appendChild(gpaInput);

    // Append the form to the form container
    formContainer.appendChild(form);
  }

  var submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Submit";

  // Append the submit button to the form container
  formContainer.appendChild(submitButton);
}
// Handling form submission in index.html
