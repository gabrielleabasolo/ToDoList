
function ToDoMain(){
    var tbl = document.getElementById("myTable");
    var row = tbl.insertRow(1);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    
    cell1.innerHTML = "Test";
    cell2.innerHTML = "Test";
    cell3.innerHTML = "Test";
    
}