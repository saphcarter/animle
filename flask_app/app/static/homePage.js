// Creates table 6 rows x 2 columns

let guessNum = 0;

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


//NOTE need to write js to unlock clues as well
function rowInputer() {
    var table = document.getElementById("guessTable");
    let inputWord = document.getElementById("wordInputs").elements["guessWord"].value;
    
    if (inputWord.length == 0) {
        alert("You need to guess an Animal!!");
    }
     else if (Names.includes(inputWord) == false) {
        alert("Input is not an Australian animal in this game!!");
    }

    else {
        let currentInputId = "row" + guessNum + "col0";
        let tableInput = document.getElementById(currentInputId);
        tableInput.innerHTML = inputWord.toUpperCase();

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
        else if ((guessNum == 5) && (inputWord != target)) {
            document.getElementById("row" + guessNum + "col1").style.backgroundColor = 'grey';
            document.getElementById("row" + guessNum + "col0").style.backgroundColor = 'grey';
            markingInput.innerHTML = "&#10060";
            formSection.style.display = "none";
            document.getElementById("finalMessage").innerHTML = "Sorry you have run out of guesses :( <br> The answer was: '"+target.toUpperCase()+"'";
        }
        else if (inputWord.toUpperCase() != target.toUpperCase()){
            document.getElementById("row" + guessNum + "col1").style.backgroundColor = 'grey';
            document.getElementById("row" + guessNum + "col0").style.backgroundColor = 'grey';
            markingInput.innerHTML = "&#10060";
            //document.getElementById("hint" + (guessNum+4)).innerHTML = "Hint " + (guessNum+4) + ":" + "**hint from database**";
            hintsInputer(guessNum);
        }

        guessNum += 1;
    }
}


function autocomplete(inp, arr) {
    inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
        closeAllLists();
        if (!val) { }
        /*create a DIV element that will contain the items (values):*/
        else{
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
   
    if (guessNumber==0) {
        document.getElementById("hint" + (guessNumber + 4)).innerHTML = "Hint " + (guessNumber + 4) + ":" + " I live in a '" + Climate[index] + "' climate.";
    }

    else if (guessNumber==1) {
        if (Tail[index] == true) {
            document.getElementById("hint" + (guessNumber + 4)).innerHTML = "Hint " + (guessNumber + 4) + ":" + " I have a tail.";
        }
        else {
            document.getElementById("hint" + (guessNumber + 4)).innerHTML = "Hint " + (guessNumber + 4) + ":" + " I DON'T have a tail.";
        }
        }
    
    else if (guessNumber==2) {
        if (Wings[index] == true) {
            document.getElementById("hint" + (guessNumber + 4)).innerHTML = "Hint " + (guessNumber + 4) + ":" + " I have wings.";
        }
        else {
            document.getElementById("hint" + (guessNumber + 4)).innerHTML = "Hint " + (guessNumber + 4) + ":" + " I DON'T have wings.";
        }
        }

    else if (guessNumber==3) {
        if (Flippers[index] == true) {
            document.getElementById("hint" + (guessNumber + 4)).innerHTML = "Hint " + (guessNumber + 4) + ":" + " I have a fins or flippers.";
        }
        else {
            document.getElementById("hint" + (guessNumber + 4)).innerHTML = "Hint " + (guessNumber + 4) + ":" + " I DON'T have fins or flippers.";
        }
        }

    else if (guessNumber==4) {
        if (Endangered[index] == 'CE') {
            document.getElementById("hint" + (guessNumber + 4)).innerHTML = "Hint " + (guessNumber + 4) + ":" + " My population is critically endangered.";
        }
        else if (Endangered[index] == 'LC') {
            document.getElementById("hint" + (guessNumber + 4)).innerHTML = "Hint " + (guessNumber + 4) + ":" + " My population is of least concern.";
        }
        else if (Endangered[index] == 'VU') {
            document.getElementById("hint" + (guessNumber + 4)).innerHTML = "Hint " + (guessNumber + 4) + ":" + " My population is vulnerable.";
        }
        else if (Endangered[index] == 'EN') {
            document.getElementById("hint" + (guessNumber + 4)).innerHTML = "Hint " + (guessNumber + 4) + ":" + " My population is endangered.";
        }
    }    
 }

 //" My Classification is '" + Classification[index] + "'"


function hintsInitiator(){
    //start with classification, size and legs
    document.getElementById("hint1").innerHTML = "Hint 1" + ":" + " I am a '" + Classification[index] + "'.";
    if (Size[index] == 'XS') {
        document.getElementById("hint2").innerHTML = "Hint 2" + ":" + " I am extra small in size.";
    }
    else if (Size[index] == 'S') {
        document.getElementById("hint2").innerHTML = "Hint 2" + ":" + " I am small in size.";
    }
    else if (Size[index] == 'M') {
        document.getElementById("hint2").innerHTML = "Hint 2" + ":" + " I am medium in size.";
    }
    else if (Size[index] == 'L') {
        document.getElementById("hint2").innerHTML = "Hint 2" + ":" + " I am large in size.";
    }
    else if (Size[index] == 'XL') {
        document.getElementById("hint2").innerHTML = "Hint 2" + ":" + " I am extra large in size.";
    }
    if (Legs[index] == 0){
        document.getElementById("hint3").innerHTML = "Hint 3" + ":" + " I DON'T have any legs";
    }
    else if (Legs[index] == 1) {
        document.getElementById("hint3").innerHTML = "Hint 3" + ":" + " I have 1 leg.";
    }
    else if (Legs[index] > 0) {
        document.getElementById("hint3").innerHTML = "Hint 3" + ":" + " I have " + Legs[index] + " legs.";
    }

}