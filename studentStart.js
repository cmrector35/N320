var music = ['Rock', 'Alternative','Country', 'Bluegrass', 'Heavy Metal'];

for(var i=0; i<music.length; i++) {
    console.log(music[i]);
}

for(type of music) {
    console.log(type);
}

document.querySelectorAll('p')[1].innerHTML = "My favorite genre is " + music[1] +".";

function animals(breed, color) {
    document.getElementById('animals').innerHTML += "I have a " + breed + " that is " + color +".";
}

animals("German Shepherd", "black and tan<br/>");
animals("Yorkie", "black");

function getName() {
    var userName = document.getElementById('myName').value;
    var color = prompt("Welcome " + userName + "! What is your favorite color?");
    document.getElementsByTagName('body')[0].style.backgroundColor=color;

}

document.getElementsByTagName('button')[0].addEventListener('click', getName);


function getNumber() {
    var userNum = document.getElementById('numPick').value;

    do {
        if(userNum>=7) {
            if(userNum%7==0) {
                alert(userNum + " is the first number divisible by 7.");
                break;
            }
            console.log("not yet...");
            userNum--;
        } else {
            alert("No matches...");
        }
        
    } while (userNum>7);
}

document.getElementsByTagName('button')[1].addEventListener('click', getNumber);