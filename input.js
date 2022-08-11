var entry = document.getElementById("entry");
entry.addEventListener("click", displayDetails);

var row = 1;

function displayDetails() {
   var Team = document.getElementById("Team").value;
   var H1 = document.getElementById("H1").value;
   var H2 = document.getElementById("H2").value;
   var H3 = document.getElementById("H3").value;
   var H4 = document.getElementById("H4").value;
   var H5 = document.getElementById("H5").value;
   var H6 = document.getElementById("H6").value;
   var H7 = document.getElementById("H7").value;
   var H8 = document.getElementById("H8").value;
   var H9 = document.getElementById("H9").value;
   var H10 = document.getElementById("H10").value;
   var H11 = document.getElementById("H11").value;
   var H12 = document.getElementById("H12").value;
   var H13 = document.getElementById("H13").value;
   var H14 = document.getElementById("H14").value;
   var H15 = document.getElementById("H15").value;
   var H16 = document.getElementById("H16").value;
   var H17 = document.getElementById("H17").value;
   var H18 = document.getElementById("H18").value;  
}
if(!Team || !H1 || !H2 || !H3 || !H4 || !H5 || !H6 || !H7 || !H8 || !H9 || !H10 || !H11 || !H12 || !H13 || !H14 || !H14 || !H15 || !H16 || !H17 || !H18) {
   alert("Please fill all your scores");
   return;
}

var display = document.getElementById("display");

var newRow = display.insertRow(row);

var cell1 =newRow.insertCell(0);
var cell2 =newRow.insertCell(1);
var cell3 =newRow.insertCell(2);
var cell4 =newRow.insertCell(3);
var cell5 =newRow.insertCell(4);
var cell6 =newRow.insertCell(5);
var cell7 =newRow.insertCell(6);
var cell8 =newRow.insertCell(7);
var cell9 =newRow.insertCell(8);
var cell10 =newRow.insertCell(9);
var cell11 =newRow.insertCell(10);
var cell12 =newRow.insertCell(11);
var cell13 =newRow.insertCell(12);
var cell14 =newRow.insertCell(13);
var cell15 =newRow.insertCell(14);
var cell16 =newRow.insertCell(15);
var cell17 =newRow.insertCell(16);
var cell18 =newRow.insertCell(17);

cell1.innerHTML = Team;
cell2.innerHTML = H1;
cell3.innerHTML = H2;
cell3.innerHTML = H3;
cell4.innerHTML = H4;
cell5.innerHTML = H5;
cell6.innerHTML = H6;
cell7.innerHTML = H7;
cell8.innerHTML = H8;
cell9.innerHTML = H9;
cell10.innerHTML = H10;
cell11.innerHTML = H11;
cell12.innerHTML = H12;
cell13.innerHTML = H13;
cell14.innerHTML = H14;
cell15.innerHTML = H15;
cell16.innerHTML = H16;
cell17.innerHTML = H17;
cell18.innerHTML = H18;

row++;



