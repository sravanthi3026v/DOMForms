let selectedRow = null;

function onFormSubmit() {
  var formData = readFormData();

  if (selectedRow == null) insertNewRecord(formData);
  else updateRecord(formData);

  resetForm();
}

function readFormData() {
  //create an empty object
  const formData = {};
  formData["fullname"] = document.getElementById("fullname").value;
  formData["empCode"] = document.getElementById("empCode").value;
  formData["salary"] = document.getElementById("salary").value;
  formData["city"] = document.getElementById("city").value;
  return formData;
  // console.log(formData);
}

function insertNewRecord(data) {
  let table = document
    .getElementById("employeeList")
    .getElementsByTagName("tbody")[0];

  //insert row
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.fullname;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.empCode;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.salary;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.city;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = `
  <button class="btn btn-primary" onClick="onEdit(this)">Edit</button>
  <button class="btn btn-primary" onClick="onDelete(this)">Delete</button>
  `;
}

//reset functionality should  be executed
function resetForm() {
  document.getElementById("fullname").value = "";
  document.getElementById("empCode").value = "";
  document.getElementById("salary").value = "";
  document.getElementById("city").value = "";
  selectedRow = null;
}

//We will bring the data in form if user click on edit button
function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("fullname").value = selectedRow.cells[0].innerHTML;
  document.getElementById("empCode").value = selectedRow.cells[1].innerHTML;
  document.getElementById("salary").value = selectedRow.cells[2].innerHTML;
  document.getElementById("city").value = selectedRow.cells[3].innerHTML;
}

//Update the record after populating the data
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.fullname;
  selectedRow.cells[1].innerHTML = formData.empCode;
  selectedRow.cells[2].innerHTML = formData.salary;
  selectedRow.cells[3].innerHTML = formData.city;
}

function onDelete(td) {
  if (confirm("Do you want to Delete this Employee Data ? ")) {
    row = td.parentElement;
    document.getElementById("employeeList").deleteRow(row.rowIndex);
    resetForm();
  }
}