// Assignment 1 | COMP1073 Client-Side JavaScript

//const { boolean } = require("yargs");

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
//var textToSpeak = 'This is the text string that you will generate with your script';
var speakButton = document.querySelector('button');


/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}


/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
// speakButton.onclick = function() {
// 	speakNow(textToSpeak);
// }


const word1 = ['The turkey ', 'Mom ', 'Dad ', 'The dog ', 'My teacher ', 'The elephant ', 'The cat '];
const word2 = ['sat on ', 'ate ', 'danced with ', 'saw ', 'doesn\'t like', 'kissed '];
const word3 = ['a funnny ', 'a scary ', 'a goofy ', 'a slimy ', 'a barking ', 'a fat '];
const word4 = ['goat ', 'monkey ', 'fish ', 'cow ', 'frog ', 'bug ', 'worm '];
const word5 = ['on the moon.', 'on the chair.', 'in my spaghetti.', 'in my soup.', 'on the grass.', 'in my shoes.'];



//create a whole sentence by click a button
const allWords = [word1, word2, word3, word4, word5];
let randomString = "";

const image1 = document.querySelector('#col1');
const image2 = document.querySelector('#col2');
const image3 = document.querySelector('#col3');
const image4 = document.querySelector('#col4');
const image5 = document.querySelector('#col5');
const imageHeight = document.querySelector('#col1').offsetHeight;
let topPosition = 0;


document.getElementById('randomSpeakButton').addEventListener('click', function(event){
    event.preventDefault();
    let randomIndex;
    for(let i = 0; i < allWords.length; i++){

        randomIndex = Math.floor(Math.random() * allWords[i].length);
        randomString += allWords[i][randomIndex];
        
    }
    speakNow(randomString);
    //const resetButtonTag = document.getElementById('resetStory');
    //const paragraph = document.createElement('p');
    const paragraph = document.getElementById('randomPara');
    paragraph.textContent = randomString;
    //resetButtonTag.insertAdjacentElement('afterend', paragraph);
    document.getElementById('resetStory').style.backgroundColor = '#fff389';
    document.getElementById('randomPara').style.backgroundImage = 'linear-gradient(90deg, #ff5c5c, #ffce75, #ffff6f, #91ff91, #6a6aff, #a832ff, #a832ff, #ff4b4b)';
});

//reset button for create a whole sentence by click a button
document.getElementById('resetStory').addEventListener('click', function(event){
    event.preventDefault();
    const paragraph = document.getElementById('randomPara');
    paragraph.textContent = "";
    randomString = "";
    document.getElementById('resetStory').style.backgroundColor = '#7f90ff';
    document.getElementById('randomPara').style.backgroundImage = '';
    document.getElementById('randomPara').style.backgroundColor = '#d1e6f6';
    //const resetButtonTag = document.getElementById('resetStory');
    //const parentDiv = resetButtonTag.parentElement;
    //parentDiv.removeChild(parentDiv.lastChild);

});

//create a full sentence by clicking buttons one by one
let result;
let allSetup = false;
const undone = 'You have not finished the sentance.';

let randomStrings = [null, null, null, null, null];

for (let i = 0; i < 5; i++) {
	
    document.getElementById(`button${i}`).addEventListener('click', function (event) {
		
		const data =[word1, word2, word3, word4, word5];
        event.preventDefault();
        const buttonTag = document.getElementById(`button${i}`);
        // const parentDiv = buttonTag.parentElement;
        // parentDiv.removeChild(parentDiv.lastChild);
        const paraTag = document.getElementById(`para${i}`);
        let randomIndex = Math.floor(Math.random() * data[i].length);

        

        switch(i){
            case 0:
                topPosition = 0;
                topPosition = -(-30 + randomIndex * 80);
                image1.style.backgroundPositionY = topPosition+'px';
                paraTag.style.backgroundColor = '#b4a1f5';
                break;
            case 1:
                topPosition = 0;
                paraTag.style.backgroundColor = '#8ccbff';
                switch(randomIndex){
                    case 0:
                        topPosition = -(-20 + randomIndex * 80);
                        image2.style.backgroundPositionY = topPosition+'px';
                        break;
                    case 1:
                        topPosition = -(-20 + randomIndex * 80);
                        image2.style.backgroundPositionY = topPosition+'px';
                        break;
                    case 2:
                        topPosition = -(10 + randomIndex * 80);
                        image2.style.backgroundPositionY = topPosition+'px';
                        break;
                    case 3:
                        topPosition = -(20 + randomIndex * 80);
                        image2.style.backgroundPositionY = topPosition+'px';
                        break;
                    case 4:
                        topPosition = -(40 + randomIndex * 80);
                        image2.style.backgroundPositionY = topPosition+'px';
                        break;
                    case 5:
                        topPosition = -(60 + randomIndex * 80);
                        image2.style.backgroundPositionY = topPosition+'px';
                        break;
                     
                }
                break;
            case 2:
                topPosition = 0;
                paraTag.style.backgroundColor = '#b5ffab';
                switch(randomIndex){
                    case 0:
                        topPosition = -(-20 + randomIndex * 80);
                        image3.style.backgroundPositionY = topPosition+'px';
                        break;
                    case 1:
                        topPosition = -(0 + randomIndex * 80);
                        image3.style.backgroundPositionY = topPosition+'px';
                        break;
                    case 2:
                        topPosition = -(10 + randomIndex * 80);
                        image3.style.backgroundPositionY = topPosition+'px';
                        break;
                    case 3:
                        topPosition = -(20 + randomIndex * 80);
                        image3.style.backgroundPositionY = topPosition+'px';
                        break;
                    case 4:
                        topPosition = -(45 + randomIndex * 80);
                        image3.style.backgroundPositionY = topPosition+'px';
                        break;
                    case 5:
                        topPosition = -(65 + randomIndex * 80);
                        image3.style.backgroundPositionY = topPosition+'px';
                        break;
                }
                break;
            case 3:
                paraTag.style.backgroundColor = '#f4ffc1';
                topPosition = -(-20 + randomIndex * 80);
                image4.style.backgroundPositionY = topPosition+'px';
                break;
            case 4:
                topPosition = 0;
                paraTag.style.backgroundColor = '#ffc8fa';
                switch(randomIndex){
                    case 0:
                        topPosition = -(-20 + randomIndex * 80);
                        image5.style.backgroundPositionY = topPosition+'px';
                        break;
                    case 1:
                        topPosition = -(10 + randomIndex * 80);
                        image5.style.backgroundPositionY = topPosition+'px';
                        break;
                    case 2:
                        topPosition = -(30 + randomIndex * 80);
                        image5.style.backgroundPositionY = topPosition+'px';
                        break;
                    case 3:
                        topPosition = -(40 + randomIndex * 80);
                        image5.style.backgroundPositionY = topPosition+'px';
                        break;
                    case 4:
                        topPosition = -(45 + randomIndex * 80);
                        image5.style.backgroundPositionY = topPosition+'px';
                        break;
                    case 5:
                        topPosition = -(65 + randomIndex * 80);
                        image5.style.backgroundPositionY = topPosition+'px';
                        break;
                }
                break;
        }

        //const paragraph = document.createElement('p');
        //paragraph.textContent = data[i][randomIndex];
        paraTag.textContent = data[i][randomIndex];
        //buttonTag.insertAdjacentElement('afterend', paragraph);
		//randomStrings[i] = paragraph;
        randomStrings[i] = paraTag;
        

		let allDone = randomStrings.every(randomString => randomString !== null);
        if (allDone) {
            result = randomStrings.map(randomString => randomString.textContent).join('');
            allSetup = true;
            document.getElementById('speakButton').style.backgroundImage = 'linear-gradient(90deg, #ff5c5c, #ffce75, #ffff6f, #91ff91, #6a6aff, #a832ff, #a832ff, #ff4b4b)';
            console.log(result);
        }
    });	
}

document.getElementById('speakButton').addEventListener('click', function(event){
	event.preventDefault();
	if(allSetup == true){
		speakNow(result);
	}else{
		speakNow(undone);
	}
});










