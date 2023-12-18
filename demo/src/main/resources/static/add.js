var urlParams = new URLSearchParams(window.location.search);
var num = urlParams.get("num");

for (let j = 0; j < num; j++) {
  var form = document.createElement("form");
  form.className = "myform";
  form.method = ""; // Set your desired method here

  var fields = [
    "ID",
    "First Name",
    "Last Name",
    "Gender",
    "GPA",
    "Level",
    "Address",
  ];

  fields.forEach(function (fieldName) {
    var label = document.createElement("label");
    label.textContent = fieldName + ": ";
    form.appendChild(label);

    var input = document.createElement("input");
    input.type = "text";
    input.name = fieldName.toLowerCase(); // Set the name attribute
    input.required = true; // Add required attribute
    form.appendChild(input);

    // Add a line break after each label and input
    form.appendChild(document.createElement("br"));
  });

  // Create and append submit button
  var submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.className = "submitFormsBtn";
  submitButton.textContent = "Submit";
  form.appendChild(submitButton);

  // Append the form to the body of the document
  document.body.appendChild(form);
}

let forms = document.getElementsByTagName("form");

for (let i = 0; i < forms.length; i++) {
  forms[i].addEventListener("submit", (e) => {
    e.preventDefault();
    let formdata = forms[i];
    let data = {
      ID: formdata[0].value,
      FirstName: formdata[1].value,
      LastName: formdata[2].value,
      Gender: formdata[3].value,
      GPA: formdata[4].value,
      Level: formdata[5].value,
      Address: formdata[6].value
    };

    $.ajax({
      type: "POST",
      contentType: "application/json",
      url: "/student/create",
      data: JSON.stringify(data),
      dataType: "json",
      cache: false,
      timeout: 600000,
      success: function (data) {
        console.log(data);
        alert(data.msg);
      },
      error: function (e) {},
    });
  });
}
