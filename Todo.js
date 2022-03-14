function ToDoMain(){
    //get document data
    var tbl = document.getElementById("myTable");
    var row = tbl.insertRow(-1);

    //set which table rows to insert
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    //insert html
    for(i = 0; i < tbl.rows.length; i++){
        cell1.innerHTML = i;
    }
    cell2.innerHTML = document.innerHTML.createElement("INPUT");
    cell3.innerHTML = document.innerHTML.createElement("INPUT");
    cell4.innerHTML = document.innerHTML.createElement("INPUT");

    cell2.setAttribute("type", "text");
    cell3.setAttribute("type", "text");
    cell4.setAttribute("type", "text");
    


}

function AddElement(){

}