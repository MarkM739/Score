
const scoreInput = document.querySelector("#scoreInput");
const form = document.querySelector("#entry");


        


scoreInput.addEventListener('submit', e => {
   e.preventDefault();
   var hole = document.getElementById('hole').value;
   var score = document.getElementById('score').value;
   var cell = document.getElementById(hole);
   cell.innerHTML = score
   
   let localPersonalScore = JSON.parse(localStorage.getItem('localPersonalScore')) || []
   localPersonalScore [Number(hole) -1] =score
   localStorage.setItem('localPersonalScore', JSON.stringify(localPersonalScore));
   calculateSums(localPersonalScore)
    
})

function displayDetails() {

   let localPersonalScore = JSON.parse(localStorage.getItem('localPersonalScore')) || []
   

      for (let index = 0; index < 18; index++) {
         if (localPersonalScore[index]){
            var hole = document.getElementById(`${index + 1}`)
            hole.innerHTML = localPersonalScore[index]

         }
         
         }
  calculateSums(localPersonalScore)     
}
function calculateSums(sums) {
   var front = 0
   var back = 0
   var total = 0
   for (let index = 0; index < 9; index++) {
      if (sums[index]){
         front+=Number(sums[index])
      }
   }
   for (let index = 9; index < 18; index++) {
      if (sums[index]){
         back+=Number(sums[index])
      }
   }
   total=front+back
   document.getElementById(`front`).innerHTML=front
   document.getElementById(`back`).innerHTML=back
   document.getElementById(`total`).innerHTML=total
      }

displayDetails()
// TODO
/*
*  Define cell IDs with setAttribute
*  Accommodate existing data and populate table if any exists  
*  Preventing duplicate teams
*  Dropdown to select teams
*  Editing current teams (last thing to do)
*/

