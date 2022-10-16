var selectedRow = null
// update form data if data was not null
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

function readFormData() {
    var formData = {};
    formData["notes"] = document.getElementById("notes").value;
    return formData;
}


//create a table consisting of inputed data to ntoes and edit/delete cell 
function insertNewRecord(data) {
    var table = document.getElementById("notesList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell0 = newRow.insertCell(0);
    cell0.innerHTML = data.notes;  
    cell1 = newRow.insertCell(1);
    cell1.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}


//clear on reset
function resetForm() {
    document.getElementById("notes").value = "";
    selectedRow = null;
}


//selects first cell being notes to edit 
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("notes").value = selectedRow.cells[0].innerHTML;
}


function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.notes;
}


//on detele click asks if sure if yes delete at appropriate index
function onDelete(td) {
    if (confirm('Delete this Note?')) {
        row = td.parentElement.parentElement;
        document.getElementById("notesList").deleteRow(row.rowIndex);
        resetForm();
    }
}


//makes sure notes field has content in it to add when creating note
function validate() {
    isValid = true;
    if (document.getElementById("notes").value == "") {
        isValid = false;
        document.getElementById("notesValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("notesValidationError").classList.contains("hide"))
            document.getElementById("notesValidationError").classList.add("hide");
    }
    return isValid;
}
