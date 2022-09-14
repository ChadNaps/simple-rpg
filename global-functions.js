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

exports.dramaticEllipses = async function (iostream, times, intervalInMs ) {
	const wrapper = async () => {
		const originalTimesValue = times;
		do {
		setTimeout(() => { iostream.write('.'); }, intervalInMs * times);
		times--;
	} while (times > 0);
		function timeout(ms) {
			return new Promise(resolve => setTimeout(resolve(true), ms));
		}
		return await timeout(intervalInMs * originalTimesValue);
		iostream.write('\n');
		//setTimeout(() => { iostream.write('\n') }, intervalInMs * originalTimesValue);
		//return true;
	}
	const returnedPromise = await wrapper();
	return returnedPromise;
//	await waitAndDo(times);
//	async function waitAndDo(times) {
//		if(times < 1) {
//			return new Promise(resolve => { resolve(true); });
//		}
//		timeoutWrapper()
//			.then(result => { console.log("wrapper next:"); console.log(result); waitAndDo(times-1); })
//			.then(result => { console.log("wrapper2 next"); console.log(result); return new Promise(resolve => { console.log("REST"); resolve(true) }) });
//		async function timeoutWrapper() {
//			setTimeout(() => { 
//				iostream.write('.');
//				return new Promise(resolve => { resolve(true); });
//			}, intervalInMs * times);
//		}
//	}
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
		if (intifiedUserInput === 1) { // TODO - Change this 1 to any numeric value.
			return await responsesAndActionsObject[intifiedUserInput]();
			//console.log("\n tempVal in processInput next:");
			//console.log(tempVal);
			//return new Promise(resolve => { resolve(true); });
		} else {
			console.log(tryAgainMessage);
			continue;
		}
	}
}
