/// <reference types="../types"/>

var xmlDoc = new ActiveXObject("Msxml2.DOMDocument.6.0");
xmlDoc.loadXML("<root></root>");
WScript.Echo(xmlDoc.firstChild.nodeName); // root
