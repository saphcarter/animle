let guessNum = 0;
let previousGuesses = [];

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

    hintsInitiator()

    //links html to auto complete function
    autocomplete(document.getElementById("guessWord"), Names);
}

function rowInputer() {
    var table = document.getElementById("guessTable");
    let inputWord = document.getElementById("wordInputs").elements["guessWord"].value;
    
    if (inputWord.length == 0) {
        alert("You need to guess an Animal!!");
        document.getElementById("wordInputs").elements["guessWord"].value = '';
    }
    else if (Names.includes(inputWord) == false) {
        alert("Input is not an Australian animal in this game!!");
        document.getElementById("wordInputs").elements["guessWord"].value = '';
    }
    else if (previousGuesses.includes(inputWord.toUpperCase()) == true){
        alert("You have already guessed this animal.");
        document.getElementById("wordInputs").elements["guessWord"].value = '';
    }

    else {
        //Inputs users guess into table and updates guesses remaining
        guessNum += 1;
        previousGuesses.push(inputWord.toUpperCase())
        let currentInputId = "row" + (guessNum-1) + "col0";
        let tableInput = document.getElementById(currentInputId);
        tableInput.innerHTML = inputWord.toUpperCase();

        let markingInputId = "row" + (guessNum-1) + "col1";
        let markingInput = document.getElementById(markingInputId);

        let formSection = document.getElementById("wordInputs");
        document.getElementById("finalMessage").innerHTML = "You have " + (6-guessNum) + " guesses remaining!"
        document.getElementById("wordInputs").elements["guessWord"].value = '';

        //If user guesses correctly:
        if (inputWord.toUpperCase() == target.toUpperCase()) {
            document.getElementById("row" + (guessNum-1) + "col1").style.backgroundColor = 'green';
            document.getElementById("row" + (guessNum-1) + "col0").style.backgroundColor = 'green';
            document.getElementById("finalMessage").innerHTML = "Congrats you got it correct!!";
            formSection.style.display = "none";
            markingInput.innerHTML = "&#10003";
            document.getElementById("hintTitle").innerHTML = "Characteristics of " + target;
            //document.getElementById("thisAttempt").innerHTML = "It took you "+guessNum+" guesses today!";
            //post guessNum variable

            //Making remaining rows green
            if (guessNum != 6) {
                for (let h=guessNum;h<6;h++) {
                    document.getElementById("row" + (h) + "col1").style.backgroundColor = 'green';
                    document.getElementById("row" + (h) + "col0").style.backgroundColor = 'green';
                    document.getElementById("row" + (h) + "col0").innerHTML = "&#10003  " + "&#10003  " + "&#10003  " + "&#10003  ";
                    document.getElementById("row" + (h) + "col1").innerHTML = "&#10003";
                }
            }  
            
            //Implementing the rest of the hints
            for (let i=guessNum; i<6; i++){
                document.getElementById("hint"+(i+3)).style.display = "block";
                hintsInputer(i)
            }

        }
        else if ((guessNum == 6) && (inputWord != target)) {
            document.getElementById("row" + (guessNum-1) + "col1").style.backgroundColor = 'grey';
            document.getElementById("row" + (guessNum-1) + "col0").style.backgroundColor = 'grey';
            markingInput.innerHTML = "&#10060";
            formSection.style.display = "none";
            document.getElementById("finalMessage").innerHTML = "Sorry you have run out of guesses :( <br> The answer was: '"+target.toUpperCase()+"'";
            //document.getElementById("thisAttempt").innerHTML = "Sorry you did not complete the Animle for today :(";
        }
        else if (inputWord.toUpperCase() != target.toUpperCase()){
            document.getElementById("row" + (guessNum-1) + "col1").style.backgroundColor = 'grey';
            document.getElementById("row" + (guessNum-1) + "col0").style.backgroundColor = 'grey';
            markingInput.innerHTML = "&#10060";
            hintsInputer(guessNum);
            document.getElementById("hint"+(guessNum+4)).style.display = "block";
        }
    }
    
}


function autocomplete(inp, arr) {
    inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
        closeAllLists();
        if (!val) { }
        else{
            a = document.createElement("div")
            a.setAttribute("id", this.id + "autocomplete-list")
            a.setAttribute("class", "autocomplete-items")
            this.parentNode.appendChild(a)
            for (i = 0; i < arr.length; i++) {
                let split = arr[i].split(" ");
                for (k = 0; k < split.length; k++){
                    if (split[k].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
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
        }
    });
    function closeAllLists() {
        var toclose = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < toclose.length; i++) {
            toclose[i].parentNode.removeChild(toclose[i]);
        }
    };
}

function hintsInputer(guessNumber){

    if (guessNumber==1) {
        document.getElementById("hint" + (guessNumber + 3)).innerHTML = "I live in a '" + Climate[index] + "' climate.";
    }
    else if (guessNumber==2) {
        if (Tail[index] == true) {
            document.getElementById("hint" + (guessNumber + 3)).innerHTML = "I have a tail.";
        }
        else {
            document.getElementById("hint" + (guessNumber + 3)).innerHTML = "I DON'T have a tail.";
        }
        }
    
    else if (guessNumber==3) {
        if (Wings[index] == true) {
            document.getElementById("hint" + (guessNumber + 3)).innerHTML = "I have wings.";
        }
        else {
            document.getElementById("hint" + (guessNumber + 3)).innerHTML = "I don't have wings.";
        }
        }

    else if (guessNumber==4) {
        if (Flippers[index] == true) {
            document.getElementById("hint" + (guessNumber + 3)).innerHTML = "I have a fins or flippers.";
        }
        else {
            document.getElementById("hint" + (guessNumber + 3)).innerHTML = "I don't have fins or flippers.";
        }
        }

    else if (guessNumber==5) {
        if (Endangered[index] == 'CE') {
            document.getElementById("hint" + (guessNumber + 3)).innerHTML = "My population is critically endangered.";
        }
        else if (Endangered[index] == 'LC') {
            document.getElementById("hint" + (guessNumber + 3)).innerHTML = "My population is of least concern.";
        }
        else if (Endangered[index] == 'VU') {
            document.getElementById("hint" + (guessNumber + 3)).innerHTML = "My population is vulnerable.";
        }
        else if (Endangered[index] == 'EN') {
            document.getElementById("hint" + (guessNumber + 3)).innerHTML = "My population is endangered.";
        }
    }    
 }


function hintsInitiator(){
    document.getElementById("hint1").innerHTML = " I am a '" + Classification[index] + "'.";
    
    if (Size[index] == 'XS') {
        document.getElementById("hint2").innerHTML = "I am extra small in size.";
    }
    else if (Size[index] == 'S') {
        document.getElementById("hint2").innerHTML = "I am small in size.";
    }
    else if (Size[index] == 'M') {
        document.getElementById("hint2").innerHTML = "I am medium in size.";
    }
    else if (Size[index] == 'L') {
        document.getElementById("hint2").innerHTML = "I am large in size.";
    }
    else if (Size[index] == 'XL') {
        document.getElementById("hint2").innerHTML = "I am extra large in size.";
    }
    if (Legs[index] == 0){
        document.getElementById("hint3").innerHTML = "I don't have any legs";
    }
    else if (Legs[index] == 1) {
        document.getElementById("hint3").innerHTML = "I have 1 leg.";
    }
    else if (Legs[index] > 0) {
        document.getElementById("hint3").innerHTML = "I have " + Legs[index] + " legs.";
    }

}

//Shortcut for database - as ran out of time to completely implement database
var Names = ['Woylie', 'Southern Snapping Turtle', 'Hawksbill Turtle', 'Grey Nurse Shark', 'Sawfish', 'Mountain Pygmy Possum', 'Regent Honey Eater', 'Western Brown Snake', 'Red Kangaroo', 'Koala', 'Rock Wallaby', 'Wombat', 'Wedge Tailed Eagle', 'Pelican', 'Funnel Web Spider', 'Brush Tail Possum ', 'Echidna', 'Numbat', 'Emu', 'Western Australian Dhufish', 'Platapus', 'Sea Gull', 'Whale Shark', 'Dingo', 'Little Penguin', 'Quokka', 'Salt water Crocodile', 'Tasmanian Devil', 'Green Tree Frog', 'Frill Necked Lizard', 'Blue Tongued Lizard', 'Taipan', 'Cassowary', 'Goanna', 'Bilby', 'Kookaburra', 'Dugong', 'Gang Gang Cockatoo'];
var Classification = ['Mammal', 'Reptile', 'Reptile', 'Fish', 'Fish', 'Mammal', 'Bird', 'Reptile', 'Mammal', 'Mammal', 'Mammal', 'Mammal', 'Bird', 'Bird', 'Arachnid', 'Mammal', 'Mammal', 'Mammal', 'Bird', 'Fish', 'Mammal', 'Bird', 'Fish', 'Mammal', 'Bird', 'Bird', 'Reptile', 'Mammal', 'Reptile', 'Reptile', 'Reptile', 'Reptile', 'Bird', 'Reptile', 'Mammal', 'Bird', 'Mammal', 'Bird'];
var Tail = [true, true, true, true, true, true, true, true, true, false, true, true, true, true, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true];
var Wings = [false, false, false, false, false, false, true, false, false, false, false, false, true, true, false, false, false, false, true, false, false, true, false, false, true, false, false, false, false, false, false, false, true, false, false, true, false, true];
var Flippers = [false, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, false, true, false, true, false, false, false, false, false, false, false, false, false, false, false, true, false];
var Size = ['S', 'M', 'M', 'L', 'L', 'S', 'S', 'M', 'L', 'M', 'M', 'M', 'M', 'M', 'XS', 'S', 'S', 'S', 'L', 'M', 'M', 'S', 'XL', 'M', 'S', 'S', 'XL', 'S', 'XS', 'S', 'S', 'M', 'L', 'M', 'S', 'S', 'L', 'S'];
var Climate = ['Scrubland', 'Temporate', 'Coral Reef', 'Temporate Ocean', 'Tropical', 'Alpine', 'Temporate', 'Desert|Temporate|Scrubland', 'Desert|Scrubland', 'Temporate', 'Scrubland|Subtropical', 'Temporate', 'Dessert|Scrubland', 'Temporate Ocean', 'Temporate', 'Temporate', 'Dessert|Scrubland', 'Dessert|Scrubland', 'Dessert|Scrubland', 'Temporate Ocean', 'Temporate', 'Everywhere', 'Coral Reef', 'Dessert|Scrubland', 'Temporate', 'Temporate', 'Tropical|Equatorial', 'Temporate', 'Tropical', 'Dessert|Scrubland', 'Temporate|Scrubland', 'Dessert|Scrubland|Subtropical', 'Sub Tropical| Tropical', 'Dessert|Scrubland', 'Dessert|Scrubland', 'Temporate|Scrubland', 'Coral Reef', 'Temporate'];
var Endangered = ['CE', 'CE', 'CE', 'CE', 'CE', 'CE', 'CE', 'LC', 'LC', 'VU', 'EN', 'VU', 'LC', 'LC', 'LC', 'VU', 'VU', 'CE', 'LC', 'VU', 'EN', 'LC', 'VU', 'LC', 'LC', 'VU', 'LC', 'EN', 'LC', 'LC', 'EN', 'LC', 'VU', 'LC', 'EN', 'LC', 'VU', 'EN'];
var Legs = [4, 4, 0, 0, 0, 4, 2, 0, 2, 4, 2, 4, 2, 2, 8, 4, 4, 4, 2, 0, 4, 2, 0, 4, 2, 4, 4, 4, 4, 4, 4, 0, 2, 4, 4, 2, 0, 2];

//Making a seed based on date
var d = new Date()
var day = d.getDate()
var month = d.getMonth()+1
var year = d.getFullYear()
var date = year+month+day+1
var index = parseInt(Math.floor(date % 38))

//var index = Math.floor(Math.random() * animals.length)
let target = Names[index];


//NOT WORKING YET - UNABLE TO MAKE ANY STATS
function postGuessNum () {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        //document.getElementById("thisAttempt").innerHTML = "It took you "+guessNum+" guesses today!";
        //document.getElementById("demo").innerHTML = this.responseText;
        document.getElementById("thisAttempt").innerHTML = this.responseText;
      }
      xhttp.open("GET", "demo_get.asp");
      xhttp.send();
}
