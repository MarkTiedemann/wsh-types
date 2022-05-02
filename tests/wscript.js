/// <reference types="../test_helpers"/>

var Arguments = WScript.Arguments;
var Named = WScript.Arguments.Named;
var Unnamed = WScript.Arguments.Unnamed;

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
