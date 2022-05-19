// Creates table 6 rows x 2 columns
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
  //  autocomplete(document.getElementById("guessWord"), animals);
}

let guessNum = 0;
var animals = ["Dog",  "Cat", "Tiger", "Lion", "Snake"];
let target = animals[Math.floor(Math.random() * animals.length)].toUpperCase();


//NOTE need to write js to unlock clues as well
function rowInputer() {
    var table = document.getElementById("guessTable");
    let inputWord = document.getElementById("wordInputs").elements["guessWord"].value.toUpperCase();
    
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

        if (inputWord == target) {
            document.getElementById("row" + guessNum + "col1").style.backgroundColor = 'green';
            document.getElementById("row" + guessNum + "col0").style.backgroundColor = 'green';
            document.getElementById("finalMessage").innerHTML = "Congrats you got it correct!!";
            // reveals image of animal
            formSection.style.display = "none";
            markingInput.innerHTML = "&#10003";

            for (let h=guessNum;h<6;h++) {
                document.getElementById("hint" + (h+3)).innerHTML = "Hint " + (h+3) + ":" + "**hint from database**"
                document.getElementById("row" + h + "col1").style.backgroundColor = 'green';
                document.getElementById("row" + h + "col0").style.backgroundColor = 'green';
                document.getElementById("row" + (h+1) + "col0").innerHTML = "&#10003  " + "&#10003  " + "&#10003  " + "&#10003  "
                document.getElementById("row" + (h+1) + "col1").innerHTML = "&#10003"

            }
        }
        else {
            document.getElementById("row" + guessNum + "col1").style.backgroundColor = 'grey';
            document.getElementById("row" + guessNum + "col0").style.backgroundColor = 'grey';
            markingInput.innerHTML = "&#10060";
        }

        guessNum += 1;

        if ((guessNum == 6) && (inputWord != target)) {
            document.getElementById("finalMessage").innerHTML = "Sorry you have run out of guesses :(";
            formSection.style.display = "none";
        }
        else if (inputWord != target){
            document.getElementById("hint" + (guessNum + 2)).innerHTML = "Hint " + (guessNum + 2) + ":" + "**hint from database**"
        }
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
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                b = document.createElement("div")
                /*style choice - make the matching letters bold?:*/
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                b.addEventListener("click", function (e) {
                    inp.value = this.getElementsByTagName("input")[0].value;
                    closeAllLists();
                });
                a.appendChild(b);
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


