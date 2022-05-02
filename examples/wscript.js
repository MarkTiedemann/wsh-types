/// <reference types="../types"/>

WScript.Echo(typeof WScript.BuildVersion); // number
WScript.Echo(WScript.BuildVersion); // 16384

WScript.Echo(typeof WScript.FullName); // string
WScript.Echo(WScript.FullName); // C:\Windows\system32\cscript.exe

WScript.Echo(typeof WScript.Interactive); // boolean
WScript.Echo(WScript.Interactive); // 1

WScript.Echo(typeof WScript.Name); // string
WScript.Echo(WScript.Name); // Windows Script Host

WScript.Echo(typeof WScript.Path); // string
WScript.Echo(WScript.Path); // C:\Windows\system32

WScript.Echo(typeof WScript.ScriptFullName); // string
WScript.Echo(WScript.ScriptFullName); // <redacted>\wscript.test.js

WScript.Echo(typeof WScript.ScriptName); // string
WScript.Echo(WScript.ScriptName); // wscript.test.js

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

WScript.Echo(typeof WScript.Version); // string
WScript.Echo(WScript.Version); // 5.812

var network = WScript.CreateObject("WScript.Network");
WScript.Echo(network.ComputerName); // <redacted>
WScript.Echo(network.UserDomain); // <redacted>
WScript.Echo(network.UserName); // <redacted>

WScript.Quit(); // 0
