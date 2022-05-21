// Creates table 6 rows x 2 columns
//const {animal_names} = require('./gamepage.html');

function loadFunction() {
    const table1 = document.createElement('table');
    for (i = 0; i < 6; i++) {
        const tableRow = document.createElement('tr');

        const tableData1 = document.createElement('td');
        tableData1.innerHTML = '_______________';
        tableData1.setAttribute('width', "85%");
        tableData1.setAttribute('id', "row" + i + "col0");
        tableRow.appendChild(tableData1);

        const tableData2 = document.createElement('td');
        tableData2.setAttribute('width', "15%");
        tableData2.setAttribute('id', "row" + i + "col1");
        tableRow.appendChild(tableData2);
        table1.appendChild(tableRow);
    }

    table1.setAttribute("id", "guessTable");
    form1 = document.getElementById("wordInputs");
    document.getElementById('gameInputs').insertBefore(table1, form1);

    //links html to row inputer function
    submitButton = document.getElementById('submitWord');
    submitButton.addEventListener('click', rowInputer);
    guessWord = document.getElementById('guessWord');
    guessWord.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
          event.preventDefault();
          submitButton.click();
        }
    })
    

    //links html to auto complete function
    autocomplete(document.getElementById("guessWord"), animals);
   //console.log(Animal.query.all())
}

let guessNum = 0;
var animals = ["Numbat", "Woylie", "Southern Snapping Turtle", "Hawksbill Turtle",
"Grey Nurse Shark", "Sawfish", "Mountain Pygmy Possum", "Regent Honey Eater", "Western Brown Snake", 
"Red Kangaroo", "Koala", "Rock Wallaby", "Wombat", "Wedge Tailed Eagle", "Pelican", 
"Funnel Web Spider", "Brush Tail Possum", "Echidna", "Bull Ant"];
//var animals = document.getElementById("auto")
//let target = {animal_names};
let target = animals[Math.floor(Math.random() * animals.length)];


//NOTE need to write js to unlock clues as well
function rowInputer() {
    var table = document.getElementById("guessTable");
    let inputWord = document.getElementById("wordInputs").elements["guessWord"].value;
    
    if (inputWord.length == 0) {
        alert("You need to guess an Animal!!");
    }
    // else if animal guess not in database
    // alert "Input is not Australian animal in this game"

    else {
        let currentInputId = "row" + guessNum + "col0";
        let tableInput = document.getElementById(currentInputId);
        tableInput.innerHTML = inputWord;

        let markingInputId = "row" + guessNum + "col1";
        let markingInput = document.getElementById(markingInputId);

        let formSection = document.getElementById("wordInputs");
        document.getElementById("finalMessage").innerHTML = "You have " + (5-guessNum) + " guesses remaining!"
        document.getElementById("wordInputs").elements["guessWord"].value = '';

        if (inputWord.toUpperCase() == target.toUpperCase()) {
            document.getElementById("row" + guessNum + "col1").style.backgroundColor = 'green';
            document.getElementById("row" + guessNum + "col0").style.backgroundColor = 'green';
            document.getElementById("finalMessage").innerHTML = "Congrats you got it correct!!";
            // reveals image of animal
            formSection.style.display = "none";
            markingInput.innerHTML = "&#10003";

            for (let h=guessNum+1;h<6;h++) {
                document.getElementById("hint" + (h+3)).innerHTML = "Hint " + (h+3) + ":" + "**hint from database**";
                document.getElementById("row" + (h) + "col1").style.backgroundColor = 'green';
                document.getElementById("row" + (h) + "col0").style.backgroundColor = 'green';
                document.getElementById("row" + (h) + "col0").innerHTML = "&#10003  " + "&#10003  " + "&#10003  " + "&#10003  ";
                document.getElementById("row" + (h) + "col1").innerHTML = "&#10003";

            }
        }
        else {
            document.getElementById("row" + guessNum + "col1").style.backgroundColor = 'grey';
            document.getElementById("row" + guessNum + "col0").style.backgroundColor = 'grey';
            markingInput.innerHTML = "&#10060";
        }

        guessNum += 1;

        if ((guessNum == 6) && (inputWord != target)) {
            document.getElementById("finalMessage").innerHTML = "Sorry you have run out of guesses, the animal was: " + target;
            formSection.style.display = "none";
        }
        else if (inputWord.toUpperCase() != target.toUpperCase()){
            document.getElementById("hint" + (guessNum + 3)).innerHTML = "Hint " + (guessNum + 3) + ":" + "**hint from database**"
        }
        console.log(target);
    }
}


function autocomplete(inp, arr) {
    inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
        closeAllLists();
        if (!val) { return False; }
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("div")
        a.setAttribute("id", this.id + "autocomplete-list")
        a.setAttribute("class", "autocomplete-items")
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a)
        for (i = 0; i < arr.length; i++) {
            /*find items that make text field and create div */
            let split = arr[i].split(" ");
            for (k = 0; k < split.length; k++){
                if (split[k].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                    //if any of the split by spaces of the arr[i].substr(0,..)...
                    b = document.createElement("div")
                    b.innerHTML = arr[i];
                    b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                    b.addEventListener("click", function (e) {
                        inp.value = this.getElementsByTagName("input")[0].value;
                        closeAllLists();
                    });
                    a.appendChild(b);
            }
        }
        }
    });
    function closeAllLists() {
        var toclose = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < toclose.length; i++) {
            toclose[i].parentNode.removeChild(toclose[i]);
        }
    };
}



function pickAnimal() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("testingDB").innerHTML = this.responseText;
    }
};
xhttp.open("GET", "getcustomer.php?q="+str, true);
xhttp.send();
}
