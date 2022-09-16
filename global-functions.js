const readline = require('readline');
const tryAgainMessage = "Invalid selection, please try again: ";
function isJson(data) {
	try {
		if (typeof JSON.parse(data) === "object")
			return true;
		else
			return false;
	} catch {
		return false;
	}
}

exports.askQuestion = async function (question, acceptableResponses) {
	const tempRL = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});
	return await processInput(tempRL, acceptableResponses, question);
}

exports.sleep = async function (ms) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
}

exports.dramaticEllipses = async function (iostream, times, intervalInMs ) {
	const wrapper = async () => {
		const originalTimesValue = times;
		do {
			setTimeout(() => { iostream.write('.'); }, intervalInMs * times);
			times--;
		} while (times > 0);
		await exports.sleep(intervalInMs * originalTimesValue);
		iostream.write('\n');
		return true;
	}
	return await wrapper();
}

exports.quit = function (interfaceToQuit, code = 0) {
	interfaceToQuit.on("close", (code) => { console.clear(); process.exit(code); });
}

async function processInput (ioStream, responsesAndActionsObject, message = tryAgainMessage) {
	try {
		isJson(responsesAndActionsObject);
	} catch {
		throw new Error("Second parameter MUST be an object of acceptable responses in the form { 'playerSelectedResponse': resultingActionFunction }");
	}
	ioStream.write(message);
	for await (const line of ioStream) {
		const intifiedUserInput = parseInt(line);
		const size = Object.keys(responsesAndActionsObject).length;
		if (!isNaN(intifiedUserInput) && intifiedUserInput <= size) { 
			return await responsesAndActionsObject[intifiedUserInput]();
		} else {
			console.log(tryAgainMessage);
			continue;
		}
	}
}
