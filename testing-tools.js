exports.testPassed = function () {
	process.stdout.write('[' + '\x1b[32mpassed\x1b[0m' + ']\n');
}

exports.testFailed = function () {
	process.stdout.write('[' + '\x1b[31mfailed\x1b[0m' + ']\n');
}
