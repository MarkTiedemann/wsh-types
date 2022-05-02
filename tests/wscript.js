/// <reference types="../test_helpers"/>

var Arguments = WScript.Arguments;
var Named = Arguments.Named;
var Unnamed = Arguments.Unnamed;

test(Arguments.Length, 2);
test(Arguments.Count(), 2);

test(Named.Length, 1);
test(Unnamed.Length, 1);

test(Named.Exists(""), false);
test(Named(""), undefined);
test(Named.Item(""), undefined);

test(Named.Exists("a"), true);
test(Named("a"), "b");
test(Named.Item("a"), "b");

test(Unnamed(0), "c");
test(Unnamed.Item(0), "c");

testThrows(function() { Unnamed(1); }, "TypeError");
testThrows(function() { Unnamed.Item(1); }, "TypeError");

testType(WScript.BuildVersion, "number");
test(WScript.FullName, "C:\\Windows\\system32\\cscript.exe");
test(WScript.Interactive, true);
test(WScript.Name, "Windows Script Host");
test(WScript.Path, "C:\\Windows\\system32");
testType(WScript.ScriptFullName, "string");
test(WScript.ScriptName, "wscript.js");
testType(WScript.Version, "string");
