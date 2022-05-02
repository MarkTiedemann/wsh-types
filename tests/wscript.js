/// <reference types="../test_helpers"/>

test(WScript.Arguments.Length, 2);
test(WScript.Arguments.Count(), 2);

test(WScript.Arguments.Named.Length, 1);
test(WScript.Arguments.Unnamed.Length, 1);

test(WScript.Arguments.Named.Exists(""), false);
test(WScript.Arguments.Named(""), undefined);
test(WScript.Arguments.Named.Item(""), undefined);

test(WScript.Arguments.Named.Exists("a"), true);
test(WScript.Arguments.Named("a"), "b");
test(WScript.Arguments.Named.Item("a"), "b");

test(WScript.Arguments.Unnamed(0), "c");
test(WScript.Arguments.Unnamed.Item(0), "c");

testThrows(function() { WScript.Arguments.Unnamed(1); }, "TypeError");
testThrows(function() { WScript.Arguments.Unnamed.Item(1); }, "TypeError");
