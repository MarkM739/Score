
const scoreInput = document.querySelector("#scoreInput");
const form = document.querySelector("#entry");


        


scoreInput.addEventListener('submit', e => {
   e.preventDefault();
   var hole = document.getElementById('hole').value;
   var score = document.getElementById('score').value;
   console.log({hole, score});
   var cell = document.getElementById(hole);
   console.log(cell.innerHTML)
   cell.innerHTML = score
   
let localPersonalScore = JSON.parse(localStorage.getItem('localPersonalScore')) || []
   console.log(localPersonalScore);
   localPersonalScore [Number(hole) -1] =score
   localStorage.setItem('localPersonalScore', JSON.stringify(localPersonalScore));
   
    
     
})


var row = 1;
var teamScores = [["Team 1"]]

function displayDetails() {

   if(!Team || !H1 || !H2 || !H3 || !H4 || !H5 || !H6 || !H7 || !H8 || !H9 || !H10 || !H11 || !H12 || !H13 || !H14 || !H14 || !H15 || !H16 || !H17 || !H18) {
      alert("Please fill all your scores");
      return;}

   var display = document.getElementById("display");

   let localTeamScores = JSON.parse(localStorage.getItem('localTeamScores')) || []
   for (let Team = 0; Team < teamScores.length; Team++) {
      var newRow = display.insertRow(row);
         console.log(Team)

      
      console.log({localTeamScores})
      let currentTeamScores = []

      for (let index = 0; index < 19; index++) {
         if (index==0) {
            var Name = document.getElementById("Team").value;
            teamScores[Team][index] =Name
            var cell =newRow.insertCell(index);
            cell.innerHTML = Name
               console.log(Name)

            // 
            currentTeamScores[index] = Name
               

            }
         else {
            var hole = document.getElementById(`H${index}`).value
            teamScores[Team][index] =hole
            var cell =newRow.insertCell(index);
            cell.innerHTML = hole
                console.log(hole)
            // data[`H${index}`] = hole

                  currentTeamScores[index] = hole
               
         }

 //  define cell IDs. (Set attribute)
  
    
      }
  localTeamScores.push(currentTeamScores)
  localStorage.setItem('localTeamScores', JSON.stringify(localTeamScores))
  }
       
}

// TODO
/*
*  Define cell IDs with setAttribute
*  Accommodate existing data and populate table if any exists  
*  Preventing duplicate teams
*  Dropdown to select teams
*  Editing current teams (last thing to do)
*/

