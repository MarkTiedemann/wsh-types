
//#region

WScript.Echo("[" + (testCount - errorCount) + "/" +  testCount + "] " + WScript.ScriptName);
if (errorCount > 0) {
	WScript.Quit(1);
}

//#endregion
