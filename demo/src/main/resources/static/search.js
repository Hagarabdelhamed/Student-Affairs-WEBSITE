//SEARCH BY FIRSTNAME

document.getElementById('firstName').addEventListener('submit',(e)=>{
  e.preventDefault();
  let form = document.getElementById('firstName');

  let data = {
      FirstName:form[0].value
  }
  console.log(data);
  $.ajax({
      type: "POST",
      contentType: "application/json",
      url: "/student/search",
      data: JSON.stringify(data),
      dataType: 'json',
      cache: false,
      timeout: 600000,
      success: function (f) {
          console.log(f);
          var tableBody = document.getElementById("studentTable").getElementsByTagName("tbody")[0];
          tableBody.innerHTML = "";
          if (f.length === 0) {
            // No records found
            var noRecordsRow = tableBody.insertRow(0);
            var noRecordsCell = noRecordsRow.insertCell(0);
            noRecordsCell.colSpan = 7; // Set the cell to span across all columns
            noRecordsCell.textContent = "No records found";
          } else {
          for (var i = 0; i < f.length; i++) {
              var student = f[i];
          
              // Create a new row
              var row = tableBody.insertRow(i);
          
              // Add cells to the row
              var cellId = row.insertCell(0);
              var cellFirstName = row.insertCell(1);
              var cellLastName = row.insertCell(2);
              var cellGender = row.insertCell(3);
              var cellGPA = row.insertCell(4);
              var cellLevel = row.insertCell(5);
              var cellAddress = row.insertCell(6);
          
              // Populate cells with data
              cellId.textContent = student.id;
              cellFirstName.textContent = student.firstName;
              cellLastName.textContent = student.lastName;
              cellGender.textContent = student.gender;
              cellGPA.textContent = student.gpa;
              cellLevel.textContent = student.level;
              cellAddress.textContent = student.address;
            }
          }
      },
      error: function (e) {
        console.error(e);
      }
  });
})


function displaySearchResults(results) {
  var resultsHtml = "";
  if (results.length === 0) {
    resultsHtml = "<p>No results found.</p>";
  } else {
    resultsHtml = "<h2>Search Results</h2>";
    resultsHtml += "<ul>";
    results.forEach(function (result) {
      resultsHtml +=
        "<li><strong>Name:</strong> " +
        result.firstname +
        " " +
        result.lastname +
        ", <strong>GPA:</strong> " +
        result.GPA +
        "</li>";
    });
    resultsHtml += "</ul>";
  }
  $("#searchResultsContainer").html(resultsHtml);
}

let form = document.getElementById("firstName");
let form1 = document.getElementById("lastName");
let form2 = document.getElementById("ID");
let form3 = document.getElementById("gpa");
let form4 = document.getElementById("address");
let form5 = document.getElementById("level");
let form6 = document.getElementById("gender");


document.getElementById("firstNameRadio").addEventListener("change", (e) => {
  if (e.target.checked) {
      form.style.display = 'block';
      form1.style.display = 'none';
      form2.style.display = 'none';
      form3.style.display = 'none';
      form4.style.display = 'none';
      form5.style.display = 'none';
      form6.style.display = 'none';
    
  }
});

document.getElementById("lastNameRadio").addEventListener("change", (e) => {
  if (e.target.checked) {
      form.style.display = 'none';
      form1.style.display = 'block';
      form2.style.display = 'none';
      form3.style.display = 'none';
      form4.style.display = 'none';
      form5.style.display = 'none';
      form6.style.display = 'none';
    
  }
});



document.getElementById("idRadio").addEventListener("change", (e) => {
    if (e.target.checked) {
        form.style.display = 'none';
        form1.style.display = 'none';
        form2.style.display = 'block';
        form3.style.display = 'none';
        form4.style.display = 'none';
        form5.style.display = 'none';
        form6.style.display = 'none';
      
    }
});

document.getElementById("gpaRadio").addEventListener("change", (e) => {
    if (e.target.checked) {
        form.style.display = 'none';
        form1.style.display = 'none';
        form2.style.display = 'none';
        form3.style.display = 'block';
        form4.style.display = 'none';
        form5.style.display = 'none';
        form6.style.display = 'none';
    }
});

document.getElementById("addressRadio").addEventListener("change", (e) => {
    if (e.target.checked) {
        form.style.display = 'none';
        form1.style.display = 'none';
        form2.style.display = 'none';
        form3.style.display = 'none';
        form4.style.display = 'block';
        form5.style.display = 'none';
        form6.style.display = 'none';
    }
});


document.getElementById("levelRadio").addEventListener("change", (e) => {
    if (e.target.checked) {
        form.style.display = 'none';
        form1.style.display = 'none';
        form2.style.display = 'none';
        form3.style.display = 'none';
        form4.style.display = 'none';
        form5.style.display = 'block';
        form6.style.display = 'none';
    }
});


document.getElementById("genderRadio").addEventListener("change", (e) => {
    if (e.target.checked) {
      form.style.display = 'none';
      form1.style.display = 'none';
      form2.style.display = 'none';
      form3.style.display = 'none';
      form4.style.display = 'none';
      form5.style.display = 'none';
      form6.style.display = 'block';
    }
});






//SEARCH  BY LAST NAME

document.getElementById('lastName').addEventListener('submit',(e)=>{
  e.preventDefault();
  let mm = document.getElementById('lastName');

  let data = {
      LastName:mm[0].value
  }
  console.log(data);
  $.ajax({
      type: "POST",
      contentType: "application/json",
      url: "/student/search",
      data: JSON.stringify(data),
      dataType: 'json',
      cache: false,
      timeout: 600000,
      success: function (f) {
          console.log(f);
          var tableBody = document.getElementById("studentTable").getElementsByTagName("tbody")[0];
          tableBody.innerHTML = "";
          if (f.length === 0) {
            // No records found
            var noRecordsRow = tableBody.insertRow(0);
            var noRecordsCell = noRecordsRow.insertCell(0);
            noRecordsCell.colSpan = 7; // Set the cell to span across all columns
            noRecordsCell.textContent = "No records found";
          } else {
          for (var i = 0; i < f.length; i++) {
              var student = f[i];
          
              // Create a new row
              var row = tableBody.insertRow(i);
          
              // Add cells to the row
              var cellId = row.insertCell(0);
              var cellFirstName = row.insertCell(1);
              var cellLastName = row.insertCell(2);
              var cellGender = row.insertCell(3);
              var cellGPA = row.insertCell(4);
              var cellLevel = row.insertCell(5);
              var cellAddress = row.insertCell(6);
          
              // Populate cells with data
              cellId.textContent = student.id;
              cellFirstName.textContent = student.firstName;
              cellLastName.textContent = student.lastName;
              cellGender.textContent = student.gender;
              cellGPA.textContent = student.gpa;
              cellLevel.textContent = student.level;
              cellAddress.textContent = student.address;
            }
          }
      },
      error: function (e) {
        console.error(e);
      }
  });
})


function displaySearchResults(results) {
  var resultsHtml = "";
  if (results.length === 0) {
    resultsHtml = "<p>No results found.</p>";
  } else {
    resultsHtml = "<h2>Search Results</h2>";
    resultsHtml += "<ul>";
    results.forEach(function (result) {
      resultsHtml +=
        "<li><strong>Name:</strong> " +
        result.firstname +
        " " +
        result.lastname +
        ", <strong>GPA:</strong> " +
        result.GPA +
        "</li>";
    });
    resultsHtml += "</ul>";
  }
  $("#searchResultsContainer").html(resultsHtml);
}



//search by level

document.getElementById('level').addEventListener('submit',(e)=>{
  e.preventDefault();
  let rr = document.getElementById('level');

  let data = {
    Level:rr[0].value
  }
  console.log(data);
  $.ajax({
      type: "POST",
      contentType: "application/json",
      url: "/student/search",
      data: JSON.stringify(data),
      dataType: 'json',
      cache: false,
      timeout: 600000,
      success: function (f) {
          console.log(f);
          var tableBody = document.getElementById("studentTable").getElementsByTagName("tbody")[0];
          tableBody.innerHTML = "";
          if (f.length === 0) {
            // No records found
            var noRecordsRow = tableBody.insertRow(0);
            var noRecordsCell = noRecordsRow.insertCell(0);
            noRecordsCell.colSpan = 7; // Set the cell to span across all columns
            noRecordsCell.textContent = "No records found";
          } else {
          for (var i = 0; i < f.length; i++) {
              var student = f[i];
          
              // Create a new row
              var row = tableBody.insertRow(i);
          
              // Add cells to the row
              var cellId = row.insertCell(0);
              var cellFirstName = row.insertCell(1);
              var cellLastName = row.insertCell(2);
              var cellGender = row.insertCell(3);
              var cellGPA = row.insertCell(4);
              var cellLevel = row.insertCell(5);
              var cellAddress = row.insertCell(6);
          
              // Populate cells with data
              cellId.textContent = student.id;
              cellFirstName.textContent = student.firstName;
              cellLastName.textContent = student.lastName;
              cellGender.textContent = student.gender;
              cellGPA.textContent = student.gpa;
              cellLevel.textContent = student.level;
              cellAddress.textContent = student.address;
            }
          }
      },
      error: function (e) {
        console.error(e);
      }
  });
})


function displaySearchResults(results) {
  var resultsHtml = "";
  if (results.length === 0) {
    resultsHtml = "<p>No results found.</p>";
  } else {
    resultsHtml = "<h2>Search Results</h2>";
    resultsHtml += "<ul>";
    results.forEach(function (result) {
      resultsHtml +=
        "<li><strong>Name:</strong> " +
        result.firstname +
        " " +
        result.lastname +
        ", <strong>GPA:</strong> " +
        result.GPA +
        "</li>";
    });
    resultsHtml += "</ul>";
  }
  $("#searchResultsContainer").html(resultsHtml);
}




//search by ID
document.getElementById('ID').addEventListener('submit',(e)=>{
  e.preventDefault();
  let ff = document.getElementById('ID');

  let data = {
      ID:ff[0].value
  }
  console.log(data);
  $.ajax({
      type: "POST",
      contentType: "application/json",
      url: "/student/search",
      data: JSON.stringify(data),
      dataType: 'json',
      cache: false,
      timeout: 600000,
      success: function (f) {
          console.log(f);
          var tableBody = document.getElementById("studentTable").getElementsByTagName("tbody")[0];
          tableBody.innerHTML = "";
          if (f.length === 0) {
            // No records found
            var noRecordsRow = tableBody.insertRow(0);
            var noRecordsCell = noRecordsRow.insertCell(0);
            noRecordsCell.colSpan = 7; // Set the cell to span across all columns
            noRecordsCell.textContent = "No records found";
          } else {
          for (var i = 0; i < f.length; i++) {
              var student = f[i];
          
              // Create a new row
              var row = tableBody.insertRow(i);
          
              // Add cells to the row
              var cellId = row.insertCell(0);
              var cellFirstName = row.insertCell(1);
              var cellLastName = row.insertCell(2);
              var cellGender = row.insertCell(3);
              var cellGPA = row.insertCell(4);
              var cellLevel = row.insertCell(5);
              var cellAddress = row.insertCell(6);
          
              // Populate cells with data
              cellId.textContent = student.id;
              cellFirstName.textContent = student.firstName;
              cellLastName.textContent = student.lastName;
              cellGender.textContent = student.gender;
              cellGPA.textContent = student.gpa;
              cellLevel.textContent = student.level;
              cellAddress.textContent = student.address;
            }
          }
      },
      error: function (e) {
        console.error(e);
      }
  });
})


function displaySearchResults(results) {
  var resultsHtml = "";
  if (results.length === 0) {
    resultsHtml = "<p>No results found.</p>";
  } else {
    resultsHtml = "<h2>Search Results</h2>";
    resultsHtml += "<ul>";
    results.forEach(function (result) {
      resultsHtml +=
        "<li><strong>Name:</strong> " +
        result.firstname +
        " " +
        result.lastname +
        ", <strong>GPA:</strong> " +
        result.GPA +
        "</li>";
    });
    resultsHtml += "</ul>";
  }
  $("#searchResultsContainer").html(resultsHtml);
}


//SEARCH BY GPA
document.getElementById('gpa').addEventListener('submit',(e)=>{
  e.preventDefault();
  let fo = document.getElementById('gpa');

  let data = {
    GPA:fo[0].value
  }
  console.log(data);
  $.ajax({
      type: "POST",
      contentType: "application/json",
      url: "/student/search",
      data: JSON.stringify(data),
      dataType: 'json',
      cache: false,
      timeout: 600000,
      success: function (f) {
          console.log(f);
          var tableBody = document.getElementById("studentTable").getElementsByTagName("tbody")[0];
          tableBody.innerHTML = "";
          if (f.length === 0) {
            // No records found
            var noRecordsRow = tableBody.insertRow(0);
            var noRecordsCell = noRecordsRow.insertCell(0);
            noRecordsCell.colSpan = 7; // Set the cell to span across all columns
            noRecordsCell.textContent = "No records found";
          } else {
          for (var i = 0; i < f.length; i++) {
              var student = f[i];
          
              // Create a new row
              var row = tableBody.insertRow(i);
          
              // Add cells to the row
              var cellId = row.insertCell(0);
              var cellFirstName = row.insertCell(1);
              var cellLastName = row.insertCell(2);
              var cellGender = row.insertCell(3);
              var cellGPA = row.insertCell(4);
              var cellLevel = row.insertCell(5);
              var cellAddress = row.insertCell(6);
          
              // Populate cells with data
              cellId.textContent = student.id;
              cellFirstName.textContent = student.firstName;
              cellLastName.textContent = student.lastName;
              cellGender.textContent = student.gender;
              cellGPA.textContent = student.gpa;
              cellLevel.textContent = student.level;
              cellAddress.textContent = student.address;
            }
          }
      },
      error: function (e) {
        console.error(e);
      }
  });
})


function displaySearchResults(results) {
  var resultsHtml = "";
  if (results.length === 0) {
    resultsHtml = "<p>No results found.</p>";
  } else {
    resultsHtml = "<h2>Search Results</h2>";
    resultsHtml += "<ul>";
    results.forEach(function (result) {
      resultsHtml +=
        "<li><strong>Name:</strong> " +
        result.firstname +
        " " +
        result.lastname +
        ", <strong>GPA:</strong> " +
        result.GPA +
        "</li>";
    });
    resultsHtml += "</ul>";
  }
  $("#searchResultsContainer").html(resultsHtml);
}



//SEARCH BY ADDRESS
document.getElementById('address').addEventListener('submit',(e)=>{
  e.preventDefault();
  let f = document.getElementById('address');

  let data = {
    Address:f[0].value
  }
  console.log(data);
  $.ajax({
      type: "POST",
      contentType: "application/json",
      url: "/student/search",
      data: JSON.stringify(data),
      dataType: 'json',
      cache: false,
      timeout: 600000,
      success: function (f) {
          console.log(f);
          var tableBody = document.getElementById("studentTable").getElementsByTagName("tbody")[0];
          tableBody.innerHTML = "";
          if (f.length === 0) {
            // No records found
            var noRecordsRow = tableBody.insertRow(0);
            var noRecordsCell = noRecordsRow.insertCell(0);
            noRecordsCell.colSpan = 7; // Set the cell to span across all columns
            noRecordsCell.textContent = "No records found";
          } else {
          for (var i = 0; i < f.length; i++) {
              var student = f[i];
          
              // Create a new row
              var row = tableBody.insertRow(i);
          
              // Add cells to the row
              var cellId = row.insertCell(0);
              var cellFirstName = row.insertCell(1);
              var cellLastName = row.insertCell(2);
              var cellGender = row.insertCell(3);
              var cellGPA = row.insertCell(4);
              var cellLevel = row.insertCell(5);
              var cellAddress = row.insertCell(6);
          
              // Populate cells with data
              cellId.textContent = student.id;
              cellFirstName.textContent = student.firstName;
              cellLastName.textContent = student.lastName;
              cellGender.textContent = student.gender;
              cellGPA.textContent = student.gpa;
              cellLevel.textContent = student.level;
              cellAddress.textContent = student.address;
            }
          }
      },
      error: function (e) {
        console.error(e);
      }
  });
})


function displaySearchResults(results) {
  var resultsHtml = "";
  if (results.length === 0) {
    resultsHtml = "<p>No results found.</p>";
  } else {
    resultsHtml = "<h2>Search Results</h2>";
    resultsHtml += "<ul>";
    results.forEach(function (result) {
      resultsHtml +=
        "<li><strong>Name:</strong> " +
        result.firstname +
        " " +
        result.lastname +
        ", <strong>GPA:</strong> " +
        result.GPA +
        "</li>";
    });
    resultsHtml += "</ul>";
  }
  $("#searchResultsContainer").html(resultsHtml);
}




/////gender

document.getElementById('gender').addEventListener('submit',(e)=>{
  e.preventDefault();
  let t = document.getElementById('gender');

  let data = {
    Gender:t[0].value
  }
  console.log(data);
  $.ajax({
      type: "POST",
      contentType: "application/json",
      url: "/student/search",
      data: JSON.stringify(data),
      dataType: 'json',
      cache: false,
      timeout: 600000,
      success: function (f) {
          console.log(f);
          var tableBody = document.getElementById("studentTable").getElementsByTagName("tbody")[0];
          tableBody.innerHTML = "";
          if (f.length === 0) {
            // No records found
            var noRecordsRow = tableBody.insertRow(0);
            var noRecordsCell = noRecordsRow.insertCell(0);
            noRecordsCell.colSpan = 7; // Set the cell to span across all columns
            noRecordsCell.textContent = "No records found";
          } else {
          for (var i = 0; i < f.length; i++) {
              var student = f[i];
          
              // Create a new row
              var row = tableBody.insertRow(i);
          
              // Add cells to the row
              var cellId = row.insertCell(0);
              var cellFirstName = row.insertCell(1);
              var cellLastName = row.insertCell(2);
              var cellGender = row.insertCell(3);
              var cellGPA = row.insertCell(4);
              var cellLevel = row.insertCell(5);
              var cellAddress = row.insertCell(6);
          
              // Populate cells with data
              cellId.textContent = student.id;
              cellFirstName.textContent = student.firstName;
              cellLastName.textContent = student.lastName;
              cellGender.textContent = student.gender;
              cellGPA.textContent = student.gpa;
              cellLevel.textContent = student.level;
              cellAddress.textContent = student.address;
            }
          }
      },
      error: function (e) {
        console.error(e);
      }
  });
})

function displaySearchResults(results) {
  var resultsHtml = "";
  if (results.length === 0) {
    resultsHtml = "<p>No results found.</p>";
  } else {
    resultsHtml = "<h2>Search Results</h2>";
    resultsHtml += "<ul>";
    results.forEach(function (result) {
      resultsHtml +=
        "<li><strong>Name:</strong> " +
        result.firstname +
        " " +
        result.lastname +
        ", <strong>GPA:</strong> " +
        result.GPA +
        "</li>";
    });
    resultsHtml += "</ul>";
  }
  $("#searchResultsContainer").html(resultsHtml);
}
