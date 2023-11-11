function addRow() {
    var firstname = document.getElementById("fname").value;
    var lastname = document.getElementById("lname").value;
    var username = document.getElementById("uname").value;

    var table = document.querySelector("table");
    var newRow = table.insertRow();

    var number = table.rows.length - 1;

    newRow.insertCell(0).innerHTML = number;
    newRow.insertCell(1).innerHTML = firstname;
    newRow.insertCell(2).innerHTML = lastname;
    newRow.insertCell(3).innerHTML = username;

    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("uname").value = "";
    return;
}
