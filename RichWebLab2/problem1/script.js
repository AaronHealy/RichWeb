var selectedRow = null
//checks if the form text has been validated
function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

//reads data inputted into the form
function readFormData() {
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["phone"] = document.getElementById("phone").value;
    formData["email"] = document.getElementById("email").value;
    return formData;
}

 //inserts data inputted into form
function insertNewRecord(data) {
    var table = document.getElementById("phoneList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell0 = newRow.insertCell(0);
    cell0.innerHTML = data.name;  
    cell1 = newRow.insertCell(1);
    cell1.innerHTML = data.phone;
    cell2 = newRow.insertCell(2);
    cell2.innerHTML = data.email;
}

//resets the form to null
function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    selectedRow = null;
}

//updates cells in table
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.phone;
    selectedRow.cells[2].innerHTML = formData.email;
}

//validation to ensure first text input is not null
function validate() {
    isValid = true;
    if (document.getElementById("name").value == "") {
        isValid = false;
        document.getElementById("nameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("nameValidationError").classList.contains("hide"))
            document.getElementById("nameValidationError").classList.add("hide");
    }
    return isValid;
}
