const readline = require('readline');
const isInDevMode = false;
const { askQuestion, quit, dramaticEllipses } = require('./global-functions.js');
const fs = require('node:fs');

async function mainMenu() {
	const welcomeMessage = "Welcome to my game, enjoy! \n\
Please select an option: \n\
		 1. New Game \n\
		 2. Load Game \n\
		 3. Quit \n";
	const todoMessage = "This feature is still in development. Please select another: ";

	async function newGame() {
		console.clear();
		const rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout
		});
		const descendText = "Good luck adventurer. You begin your descent";
		rl.write(descendText);
		const success = await dramaticEllipses(rl, 4, 500);
		if (!success) {
			return new Promise((resolve, reject) => { reject(false) });
		}
		return new Promise(resolve => { resolve(success) });
	}
	async function loadGame(dir = './save_files') {
		// TODO
		// [x] build out db schema
		// [x] check if save file(s) exist
		// [] load them into memory
		// [] display saves to player
		// ----------------------
		const saveGames = [];
		fs.readdir(dir, (err, files) => {
			if (err)
				console.log(err.message);
			getSaveFiles();
			console.clear();
			if (saveGames.length === 0) {
				console.log("There were no save files found, returning to main menu...");
				setTimeout(mainMenu, 5000);
			} else {
				let [prompt, saves] = assemblePrompt();
				askQuestion(prompt, saves)
				.then(result => { return result; });
			}
			function assemblePrompt() {
				let prompt = "Select a game to load:\n";
				const saves = [];
				let saveNum = 1; // TODO - Working Here
				for (save of saveGames) {
					prompt += `${saveNum}: ${save.slice(0, -4)}\n`;
					console.log(saveNum);
					saves[saveNum-1] = async function () { console.log(saveNum); console.log(saveGames[saveNum]); return executeLoad(saveNum-1, saveGames[saveNum-1].slice(0, -4)) };
					saveNum++;
				}
				prompt += `${saveNum}: Return to main menu\n`;
				return [prompt, saves];
				async function executeLoad(saveFileNum, saveFileName) {
					console.log(`Loaded save file ${saveFileNum}: ${saveFileName}`);
					//TODO
					return true;
				}
			}
			function getSaveFiles() {
				for (file of files) {
					if (file.includes('.sav'))
						saveGames.push(file);
				}
			}
		});
//		fs.readFile('./testfile.sav', 'utf8', (err, data) => {
//			console.log(data);
//			return;
//		});
	}
	//async quit() {
		//TODO
	//}
	console.clear();
	try {
		const succeeded = await askQuestion(welcomeMessage,
			{ 
				1: newGame,
				2: loadGame
			}
		);
		if (succeeded) {
			return new Promise(resolve => { resolve(true) });
		}
	} catch (err) {
		if (err !== false) {
			throw new Error("Error in mainMenu()");
		}
	}
}

function playIntro() {
	const flavorText = "It's been days since you last saw a friendly face. The cool air of the dungeon sits stale around you. \
Looking down, past the torch you bear, you see a puddle. In it, you find a stranger staring back at you. \
You are surprised to see how filthy your face has gotten these last few days. Though, if you disregard the mounting filth, you arn't ugly. \
In fact, you're very average looking, which you suppose could be worse.\n";
	const raceQ = "Please select your race: \n\
					 1. Human \n\
					 2. Elf \n\
					 3. Dwarf \n\ ";
	console.clear();
	console.log(flavorText);
	//
	//	function prompt(message = tryAgainMessage) {
	//		rl.question(message, (selection) => {
	//				if (selection === '1') {
	//					saveData.character.class = "Human";
	//				} else if (selection === '2') {
	//					saveData.character.class = "Elf";
	//				} else if (selection === '3') {
	//					saveData.character.class = "Dwarf";
	//				} else {
	//					prompt();
	//				}
	//		});
	//	}
}

async function main() {
	await mainMenu();
	//await playIntro();
	console.log("Done!");

	//quit(rl, 0);
}

main();

