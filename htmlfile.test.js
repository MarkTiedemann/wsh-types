var document = new ActiveXObject("HTMLFile");
document.open();
document.write("<h1 id=\"hello\">world</h1>");
document.close();
WScript.Echo(document.getElementById("hello").innerText); // world
