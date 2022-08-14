const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let selection = "";
let isValidSelection = false;
let saveData = {
	exists: false,
	player: { name: "" },
	character: {
		name: "",
		class: "",
		level: 1,
		exp: 0,
		expToLevel: 50,
		inventory: [],
		statusAilments: {
			poisoned: false,
			blind: false,
			fatigued: false,
			unconscious: false,
			bleeding: false	
		}
	}
};

function quit(interfaceToQuit, code) {
	interfaceToQuit.on("close", (code) => { process.exit(code); });
}

function mainMenu() {
	let welcomeMessage = 
	"Welcome to the Playground \n\
Please select an option: \n\
		 1. New Game \n\
		 2. Load Game \n\
		 3. Quit \n";
	let tryAgainMessage = "Invalid selection, please try again: ";
	let todoMessage = "This feature is still in development. Please select another: ";

	console.clear();
	prompt(welcomeMessage);

	function prompt(message = tryAgainMessage) {
		rl.question(message, (selection) => {
			let descendText = "Good luck adventurer. You begin your descent";
			if (selection === '1') {
				console.clear();
				dramaticElipses(descendText, 5, 750);
				setTimeout(playIntro, 800*5);
			} else if (selection === '2') {
				prompt(todoMessage);
			} else if (selection === '3') {
				rl.close();
			} else {
				prompt();
			}
		});
	}
}

function exit(message = "Closed\n") {
	rl.on("close", function() {
		console.log(message);
	});

	rl.close();
}

function playIntro() {
	console.clear();
	console.log("Intro!");
	// TODO
}

function dramaticElipses(message, times, intervalInMs) {
	rl.write(`${message}`);
	waitAndDo(times);

	function waitAndDo(times) {
		if(times < 1) {
			return;
		}

		setTimeout(function() {
			rl.write('.');

			waitAndDo(times-1);
		}, intervalInMs);
	}

}

function main() {
	mainMenu();

}

main();
