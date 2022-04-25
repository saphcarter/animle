// Creates table 6 rows x 2 columns
function loadFunction() {
  const table1 = document.createElement('table');
  for (i=0;i<6;i++) {
    const tableRow = document.createElement('tr');

    const tableData1 = document.createElement('td');
    tableData1.innerHTML = 'guess';
    tableData1.setAttribute('width',"85%");
    tableData1.setAttribute('id',"row"+i+"col0");
    tableRow.appendChild(tableData1);

    const tableData2 = document.createElement('td');
    tableData2.innerHTML = '+/-';
    tableData2.setAttribute('width',"15%");
    tableData2.setAttribute('id',"row"+i+"col1");
    tableRow.appendChild(tableData2);

    table1.appendChild(tableRow);
  }

  table1.setAttribute("id", "guessTable");
  form1 = document.getElementById("wordInputs");
  document.getElementById('gameInputs').insertBefore(table1, form1);
}


// function guessChecker() {
//   let guess = document.getElementById("wordInputs").elements["guessWord"].value.toUpperCase();
//   if (guess == "KOALA") {
    
//   }
// }



// doesnt seem to work just yet - ran out of time today - need to write js to unlock clues as well
function rowInputer() {
  var table = document.getElementById("guessTable");
  let inputWord = document.getElementById("wordInputs").elements["guessWord"].value.toUpperCase();
  let target = "KOALA";

  for (k=0; k<6; k++) {
    let tableInput = document.getElementById("row"+k+"col0").innerHTML;
    console.log(tableInput)
    if (tableInput == "guess") {
      tableInput = inputWord;
      if (inputWord == target) {
        document.getElementById("row"+k+"col1").style.backgroundColor = 'green';
      }
      else {
        document.getElementById("row"+k+"col1").style.backgroundColor = 'red';
      }
      break
    }  
  }
}