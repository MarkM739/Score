

 function getScore(){
    let n = document.getElementById("myScore").value;
    document.getElementById("display").innerHTML = n;
 }

 document.getElementById("btn1").addEventListener("click", getScore);

const matrix = new Array(18).fill(0).map(() => new Array(4).fill(0));
console.log(matrix[0][0]);