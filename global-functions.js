const readline = require('readline');

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
  interfaceToQuit.on("close", (code) =>     { process.exit(code); });
}
