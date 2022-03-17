function add(){
    var task = document.getElementById("task").value;
    var desc = document.getElementById("desc").value;
    var start = document.getElementById("start").value;
    var end = document.getElementById("end").value;

    var table = document.getElementById("myTable");

    var row = table.insertRow(0);
    
    var myTask = row.insertCell(0);
    var myDesc = row.insertCell(1);
    var myStart = row.insertCell(2);
    var myEnd = row.insertCell(3)


    myTask.innerHTML = task;
    myDesc.innerHTML = desc;
    myStart.innerHTML = start;
    myEnd.innerHTML = end;


    document.getElementById("task").value = "";
    document.getElementById("desc").value = "";
    document.getElementById("start").value = "";
    document.getElementById("end").value = "";
}

function Delete(){

}
