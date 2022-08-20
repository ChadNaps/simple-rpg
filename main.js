const isDevMode = true;

const readline = require('readline');
const { dramaticElipses, quit } = require('./global-functions.js');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
const tryAgainMessage = "Invalid selection, please try again: ";

const saveData = {
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
	const welcomeMessage = 
	"Welcome to the Playground \n\
Please select an option: \n\
		 1. New Game \n\
		 2. Load Game \n\
		 3. Quit \n";
	const todoMessage = "This feature is still in development. Please select another: ";

	console.clear();
	prompt(welcomeMessage);

	function prompt(message = tryAgainMessage) {
		rl.question(message, (selection) => {
			const descendText = "Good luck adventurer. You begin your descent";
			if (selection === '1') {
				console.clear();
				if (isDevMode)
					playIntro();
				else {
					dramaticElipses(descendText, 5, 750, rl);
					setTimeout(playIntro, 800*5);
				}
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
	const flavorText = "It's been days since you last saw a friendly face. The cool air of the dungeon sits stale around you. \n\
Looking down, past the torch you bear, to a puddle, you are shocked to see how filthy your face has gotten. \n\
You are very average looking, which doesn't do justice to who you are as a person. But now, staring back up at you, you see...\n";
	const raceQ = "Please select your race: \n\
		       1. Human \n\
		       2. Elf \n\
		       3. Dwarf \n\ ";

	console.clear();
	console.log(flavorText);
	prompt(raceQ);

	function prompt(message = tryAgainMessage) {
		rl.question(message, (selection) => {
				if (selection === '1') {
				saveData.character.class = "Human";
				} else if (selection === '2') {
				saveData.character.class = "Elf";
				} else if (selection === '3') {
				saveData.character.class = "Dwarf";
				} else {
				prompt();
				}
				});
	}


}

function main() {
	mainMenu();

	// setTimeout(() => { rl.close(); }, 3000);
}

main();

