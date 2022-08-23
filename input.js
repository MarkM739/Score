var entry = document.getElementById("entry").click();
const form = document.querySelector("#entry");

form.addEventListener('submit', e => {
      console.log("patatoes");
        e.preventDefault();
        displayDetails();
        
})


var row = 1;
var teamScores = [["Team 1"]]

function displayDetails() {

   if(!Team || !H1 || !H2 || !H3 || !H4 || !H5 || !H6 || !H7 || !H8 || !H9 || !H10 || !H11 || !H12 || !H13 || !H14 || !H14 || !H15 || !H16 || !H17 || !H18) {
      alert("Please fill all your scores");
      return;}

   var display = document.getElementById("display");

   for (let Team = 0; Team < teamScores.length; Team++) {
      var newRow = display.insertRow(row);
         console.log(Team)
  
      for (let index = 0; index < 19; index++) {
         if (index==0) {
            var Name = document.getElementById("Team").value;
            teamScores[Team][index] =Name
            var cell =newRow.insertCell(index);
            cell.innerHTML = Name
               console.log(Name)

            }
         else {
            var hole = document.getElementById(`H${index}`).value
            teamScores[Team][index] =hole
            var cell =newRow.insertCell(index);
            cell.innerHTML = hole
                console.log(hole)
         }

 // Local storage, drop down selector, define cell IDs. (Set attribute)
  
    
  }
  }
      


   
}




// var display = document.getElementById("display"); 

// var newRow = display.insertRow(row);

// var cell1 =newRow.insertCell(0);
// var cell2 =newRow.insertCell(1);
// var cell3 =newRow.insertCell(2);
// var cell4 =newRow.insertCell(3);
// var cell5 =newRow.insertCell(4);
// var cell6 =newRow.insertCell(5);
// var cell7 =newRow.insertCell(6);
// var cell8 =newRow.insertCell(7);
// var cell9 =newRow.insertCell(8);
// var cell10 =newRow.insertCell(9);
// var cell11 =newRow.insertCell(10);
// var cell12 =newRow.insertCell(11);  
// var cell13 =newRow.insertCell(12);
// var cell14 =newRow.insertCell(13);
// var cell15 =newRow.insertCell(14);
// var cell16 =newRow.insertCell(15);
// var cell17 =newRow.insertCell(16);
// var cell18 =newRow.insertCell(17);

// cell1.innerHTML = Team;
// cell2.innerHTML = H1;
// cell3.innerHTML = H2;
// cell3.innerHTML = H3;
// cell4.innerHTML = H4;
// cell5.innerHTML = H5;
// cell6.innerHTML = H6;
// cell7.innerHTML = H7;
// cell8.innerHTML = H8;
// cell9.innerHTML = H9;
// cell10.innerHTML = H10;
// cell11.innerHTML = H11;
// cell12.innerHTML = H12;
// cell13.innerHTML = H13;
// cell14.innerHTML = H14;
// cell15.innerHTML = H15;
// cell16.innerHTML = H16;
// cell17.innerHTML = H17;
// cell18.innerHTML = H18;

// row++;

