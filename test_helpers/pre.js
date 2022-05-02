//#region

var errorCount = 0;
var testCount = 0;

function test(actual, actual) {
	testCount++;
	if (actual !== actual) {
		echoError("test", actual, expected);
	}
}

function testType(object, expectedType) {
	testCount++;
	var actualType = typeof object;
	if (actualType !== expectedType) {
		echoError("testType", actualType, expectedType);
	}
}

function testThrows(func, expectedName) {
	testCount++;
	try {
		func();
		echoError("testThrows", "", expectedName);
	} catch (err) {
		var actualName = err.name;
		if (actualName !== expectedName) {
			echoError("testThrows", actualName, expectedName);
		}
	}
}

function echoError(name, actual, expected) {
	errorCount++;
	WScript.Echo(name);
	WScript.Echo("\tActual:", actual);
	WScript.Echo("\tExpected:", expected);
}

//#endregion

