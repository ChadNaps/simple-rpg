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

exports.dramaticElipses = function (message, times, intervalInMs, iostream) {
	iostream.write(message);
	waitAndDo(times);
	function waitAndDo(times) {
		if(times < 1) {
			iostream.write('\n');
			return;
		}
		setTimeout(function() {
				iostream.write('.');

				waitAndDo(times-1);
				}, intervalInMs);
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
		console.log(selection);
		console.log(responsesAndActionsObject[selection]);
		if (selection === '1') {
		const returnedPromise = responsesAndActionsObject[selection]();
			
		} else {
			exports.prompt(iostream, responsesAndActionsObject);
		}
	});
	return;
}
