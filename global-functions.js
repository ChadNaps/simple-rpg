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

exports.dramaticEllipses = async function (message, times, intervalInMs, iostream) {
	iostream.write(message);
	return waitAndDo(times);
	async function waitAndDo(times) {
		if(times < 1) {
			return new Promise(resolve => { setTimeout(resolve("waitAndDo resolution"), intervalInMs) });
		}
		timeoutWrapper().then(result => {return waitAndDo(times-1)} );
		async function timeoutWrapper() {
			setTimeout(() => { 
				iostream.write('.');
			}, intervalInMs * times);
		}
	}
}

exports.quit = function (interfaceToQuit, code) {
	interfaceToQuit.on("close", (code) => { console.clear(); process.exit(code); });
}

// TODO - change nested questions to promises: https://stackoverflow.com/questions/36540996/how-to-take-two-consecutive-input-with-the-readline-module-of-node-js
exports.prompt = async function (iostream, responsesAndActionsObject, message = tryAgainMessage) {
	try {
		isJson(responsesAndActionsObject);
	} catch {
		throw new Error("Second parameter MUST be an object of acceptable responses in the form { 'playerSelectedResponse': resultingActionFunction }");
	}
	iostream.question(message, (selection) => {
		if (selection === '1') {
			return responsesAndActionsObject[selection]();
		} else {
			exports.prompt(iostream, responsesAndActionsObject);
		}
	});
}
