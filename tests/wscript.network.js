/// <reference types="../test_helpers"/>

var Named = WScript.Arguments.Named;
var ComputerName = Named("computername");
var UserDomain = Named("userdomain");
var UserName = Named("username");

var Network = WScript.CreateObject("WScript.Network");
test(Network.ComputerName, ComputerName);
test(Network.UserDomain, UserDomain);
test(Network.UserName, UserName);
