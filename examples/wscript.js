/// <reference types="../types"/>

WScript.StdOut.WriteBlankLines(2);

var stdIn = WScript.StdIn;
WScript.Echo(stdIn.Column); // 1
WScript.Echo(stdIn.Line); // 1
if (typeof stdIn.Line === "number") {
	WScript.Echo("Stream open");
}
stdIn.Close();
if (typeof stdIn.Line === "unknown") {
	WScript.Echo("Stream closed");
}

WScript.StdErr.WriteBlankLines(2);
