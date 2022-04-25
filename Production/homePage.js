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


let guessNum = 0;


// doesnt seem to work just yet - ran out of time today - need to write js to unlock clues as well
function rowInputer() {
  var table = document.getElementById("guessTable");
  let inputWord = document.getElementById("wordInputs").elements["guessWord"].value.toUpperCase();
  let target = "KOALA";
 
  
  let currentInputId = "row"+guessNum+"col0";
  let tableInput = document.getElementById(currentInputId);
  tableInput.innerHTML = inputWord;

  if (inputWord == target) {
    document.getElementById("row"+guessNum+"col1").style.backgroundColor = 'green';
    document.getElementById("row"+guessNum+"col0").style.backgroundColor = 'green';
    document.getElementById("finalMessage").innerHTML = "Congrats you got it correct!!";
    // reveals image of animal
    // remove/hide input & submit elements of page
    }
    else {
      document.getElementById("row"+guessNum+"col1").style.backgroundColor = 'red';
    }
  
  guessNum += 1;

  if (guessNum == 6) {
    document.getElementById("finalMessage").innerHTML = "Sorry you have run out of guesses :(";
    // remove/hide input & submit elements of page
  }
  else {
  document.getElementById("hint"+(guessNum+2)).innerHTML = "Hint "+(guessNum+3)+":" + "**hint from database**"
  }
  console.log(tableInput);
  console.log(inputWord);
  
  }

submitButton = document.getElementById('submitWord');
submitButton.addEventListener('click', rowInputer);