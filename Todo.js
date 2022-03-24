function add(){

    


    var task = document.getElementById("task").value;
    var desc = document.getElementById("desc").value;
    var start = document.getElementById("start").value;
    var end = document.getElementById("end").value;
    

    var delBtn = document.createElement("BUTTON");
    var deltxt = document.createTextNode("\u00D7");
    delBtn.className = "DeleteBtn";
    delBtn.appendChild(deltxt);

    var table = document.getElementById("myTable");

    var delBtn = document.createElement("BUTTON");
    var deltxt = document.createTextNode("X");
    delBtn.className = "DeleteBtn";
    delBtn.appendChild(deltxt);

    var row = table.insertRow(0);
    
    var myTask = row.insertCell(0);
    var myDesc = row.insertCell(1);
    var myStart = row.insertCell(2);
    var myEnd = row.insertCell(3);
    delBtn = row.insertCell(4);



    //button


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
