function sortTable() {
    let data = {
      sortBy: document.getElementById("sortby").value,
      order: document.getElementById("order").value,
    };
    console.log(data);
    $.ajax({
      type: "POST",
      contentType: "application/json",
      url: "/student/sort",
      data: JSON.stringify(data),
      dataType: "json",
      cache: false,
      timeout: 600000,
      success: function (f){
        
        const tableElement = document.getElementById("studentTable");

            // Clear existing data rows (excluding the header)
            const tbodyElement = tableElement.getElementsByTagName('tbody')[0];
            const dataRows = tbodyElement.querySelectorAll('tr:not(:first-child)');
            dataRows.forEach(row => row.remove());
        for (const student of f) {
          const row = tableElement.insertRow();
          row.insertCell().textContent = student.id;
          row.insertCell().textContent = student.firstName;
          row.insertCell().textContent = student.lastName;
          row.insertCell().textContent = student.gender;
          row.insertCell().textContent = student.gpa;
          row.insertCell().textContent = student.level;
          row.insertCell().textContent = student.address;
        }
        
      },
      error: function (e) {
        console.error(e);
      },
    });
  }