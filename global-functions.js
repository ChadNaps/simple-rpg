const tryAgainMessage = "Invalid selection, please try again: ";

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
exports.prompt = function (iostream, acceptableResponses = [-1], message = tryAgainMessage) {
	if (!Array.isArray(acceptableResponses)) {
		throw new Error("Second parameter MUST be an array of acceptable responses.");
	}
	iostream.question(message, (selection) => {
		if (typeof acceptableResponses[selection] !== "undefined") {
			console.log("It's here!");
		} else {
			exports.prompt();
		}
	});
}
