/// <reference types="../types"/>

var locator = new ActiveXObject("WbemScripting.SWbemLocator");
var service = locator.ConnectServer(".", "root\\cimv2");

// List process names
var collection = service.ExecQuery("SELECT Name, ProcessId FROM Win32_Process");
for (var e = new Enumerator(collection), i = e.item(); !e.atEnd(); e.moveNext(), i = e.item()) {
	WScript.Echo(i.ProcessId, i.Name);
}

// List CPU percentage of processes
var refresher = new ActiveXObject("WbemScripting.SWbemRefresher");
var perfdata = refresher.AddEnum(service, "Win32_PerfFormattedData_PerfProc_Process").ObjectSet;
refresher.refresh();
for (var e = new Enumerator(perfdata), i = e.item(); !e.atEnd(); e.moveNext(), i = e.item()) {
	WScript.Echo(i.IDProcess, i.PercentProcessorTime);
}
