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

// rl.question("What is your name ? ", function(name) {
//     rl.question("Where do you live ? ", function(country) {
//         console.log(`${name}, is a citizen of ${country}`);
//         rl.close();
//     });
// });

// rl.on("close", function() {
//     console.log("\nBYE BYE !!!");
//     process.exit(0);
// });

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

	prompt(welcomeMessage);

	async	function prompt(message = tryAgainMessage) {
		rl.question(message, (selection) => {
			if (selection === '1') {
				playIntro();
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
	console.log("Intro!");
	// TODO
}

function main() {
	mainMenu();

}

main();
