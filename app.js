function returnRandom() {
	return (Math.random()*100).toFixed();
}

function yellRandom(randomNumGenerator) {
	console.log("GENERATOR DEFINITION: ", randomNumGenerator);
	console.log("YOUR RANDOM NUMBER IS: " +randomNumGenerator());
}

yellRandom(returnRandom);


function greeting() {
	console.log("Hello, World!");
}

function formalGreeting(informalGreeting) {
	informalGreeting();
	console.log("How are you?");
}

formalGreeting(greeting);

function alarm() {
	console.log("Wake up!");
}
setTimeout(alarm, 10000);

function annoy() {
  console.log('Are we there yet?');
}
setInterval(annoy, 1000);

// function alarm() {
// 	console.log("Wake up!");
// }
let firstAlarm = setTimeout(alarm, 3000);
let secondAlarm = setTimeout(alarm, 6000);


function annoy() {
	console.log('Are we there yet?');
}
function shutDown() {
	console.log('No!');
}
let kids = setInterval(annoy, 1000);
let parents = setInterval(shutDown, 3200);


// function annoy() {
// 	console.log('Are we there yet?');
// }
function hush() {
	clearInterval(moreKids);
}
let moreKids = setInterval(annoy, 1000);
setTimeout(hush, 10000);

function alarmRing() {
	console.log('RRRIIINNNGGGGG');
}

function turnOffSnooze() {
	console.log("Turning snooze off now");
	clearTimeout(snoozeAlarm);
}

let snoozeAlarm = setTimeout(alarmRing, 3000);
let snoozeOff = setTimeout(turnOffSnooze, 5000);