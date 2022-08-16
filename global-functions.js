const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
//  output: process.stdout
});

exports.dramaticElipses = function (message, times, intervalInMs) {
	rl.write(message);
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

exports.quit = function (interfaceToQuit, code) {
  interfaceToQuit.on("close", (code) =>     { process.exit(code); });
}
