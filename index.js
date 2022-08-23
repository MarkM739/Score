var array= [["Mark",0,1,2,4,5,5,6,7,6,7,4,2,3,4],["Brandon"0,1,4,5,3,1,7,3,4,5,7]]

for (let Team = 0; Team < array.length; Team++) {
    var newRow = display.insertRow(row);

    for (let index = 0; index < array[Team].length; index++) {
        const element = array[Team][index];
        var cell =newRow.insertCell(index);
        console.log(element);

    cell.innerHTML = element
}
}

// Can we get the Data from input into a for loop? What about just the cells... TBD`