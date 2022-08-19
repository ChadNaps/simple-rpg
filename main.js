const readline = require('readline');
const { dramaticElipses, quit } = require('./global-functions.js');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

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
				dramaticElipses(descendText, 5, 750, rl);
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

function playIntro() {
	console.clear();
	console.log("<Introduction Text Here>");
	// TODO
}

function main() {
	mainMenu();

}

main();

