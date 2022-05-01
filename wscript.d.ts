/// <reference no-default-lib="true"/>

/** Provides access to root object for the Windows Script Host object model.
 * @see https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/windows-scripting/at5ydy31(v=vs.84) */
interface WScript {
	/** Returns the WshArguments object (a collection of arguments).
	 * @see https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/windows-scripting/z2b05k8s(v=vs.84) */
	Arguments: WshArguments;
	/** Returns the Windows Script Host build version number.
	 * @see https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/windows-scripting/kt8ycte6(v=vs.84) */
	BuildVersion: number;
	/** Returns the fully qualified path of the host executable (CScript.exe or WScript.exe).
	 * @see https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/windows-scripting/z00t383b(v=vs.84) */
	FullName: string;
	/** Sets the script mode, or identifies the script mode.
	 * @see https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/windows-scripting/b48sxsw0(v=vs.84) */
	Interactive: boolean;
	/** Returns the name of the WScript object (the host executable file).
	 * @see https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/windows-scripting/3ktf76t1(v=vs.84) */
	Name: string;
	/** Returns the name of the directory containing the host executable (CScript.exe or WScript.exe).
	 * @see https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/windows-scripting/sw3e6ehs(v=vs.84) */
	Path: string;
	/** Returns the full path of the currently running script.
	 * @see https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/windows-scripting/cc5ywscw(v=vs.84) */
	ScriptFullName: string;
	/** Returns the file name of the currently running script.
	 * @see https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/windows-scripting/3faf1xkh(v=vs.84) */
	ScriptName: string;
	/** Exposes the write-only error output stream for the current script.
	 * @see https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/windows-scripting/hyez2k48(v=vs.84) */
	StdErr: TextStream;
	/** Exposes the read-only input stream for the current script.
	 * @see https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/windows-scripting/1y8934a7(v=vs.84) */
	StdIn: TextStream;
	/** Exposes the write-only output stream for the current script.
	 * @see https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/windows-scripting/c61dx86d(v=vs.84) */
	StdOut: TextStream;
	/** Returns the version of Windows Script Host.
	 * @see https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/windows-scripting/kaw07b53(v=vs.84) */
	Version: string;
	// ConnectObject()
	/** Creates a COM object. 
	 * @see https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/windows-scripting/xzysf6hc(v=vs.84) */
	CreateObject(
		/** String value indicating the programmatic identifier (ProgID) of the object you want to create. */
		strProgID: string,
		/** String value indicating the function prefix. */
		strPrefix?: string
	): any;
	/** Creates a WshShell object. */
	CreateObject(strProgID: "WScript.Shell"): WshShell;
	/** Creates a WshNetwork object. */
	CreateObject(strProgID: "WScript.Network"): WshNetwork;
	// DisconnectObject()
	/** Outputs text to either a message box or the command console window.
	 * @see https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/windows-scripting/h8f603s7(v=vs.84) */
	Echo(
		/** String value indicating the list of items to be displayed. */
		...args: string[]
	): void;
	// GetObject()
	/** Forces script execution to stop at any time.
	 * @see https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/windows-scripting/fw0fx1aw(v=vs.84) */
	Quit(
		/** Integer value returned as the process's exit code. */
		intErrorCode?: number
	): void;
	/** Suspends script execution for a specified length of time, then continues execution.
	 * @see https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/windows-scripting/6t81adfd(v=vs.84) */
	Sleep(
		/** Integer value indicating the interval (in milliseconds) you want the script process to be inactive. */
		intTime: number
	): void;
}
declare var WScript: WScript;

/** Provides access to the entire collection of command-line parameters — in the order in which they were originally entered.
 * @see https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/windows-scripting/ss1ysb2a(v=vs.84) */
interface WshArguments {
	/** Returns the number of command-line parameters belonging to a script (the number of items in an argument's collection). 
	 * @see https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/windows-scripting/zz1z71z6(v=vs.84) */
	Length: number;
	/** Returns the WshNamed object (a collection of named arguments).
	 * @see https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/windows-scripting/zw780x4f(v=vs.84) */
	Named: WshNamed;
	/** Returns the WshUnnamed object (a collection of unnamed arguments).
	 * @see https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/windows-scripting/b4ywdf43(v=vs.84) */
	Unnamed: WshUnnamed;
	/** Returns the number of command-line parameters.
	 * @see https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/windows-scripting/6x47fysb(v=vs.84) */
	Count(): number;
	/** Provides access to the items in the WshArguments object. 
	 * @see https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/windows-scripting/yzefkb42(v=vs.84) */
	Item(
		/** Index of the item you want to retrieve. */
		index: number
	): string;
	// ShowUsage()
}

/** Provides access to the named arguments from the command line.
 * @see https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/windows-scripting/d6y04sbb(v=vs.84) */
interface WshNamed {
	/** Returns the number of named arguments. */
	Length: number;
	/** Returns the number of named arguments. */
	Count(): number;
	/** Provides access to the items in the WshNamed object.
	 * @see https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/windows-scripting/c2x76sxz(v=vs.84) */
	Item(
		/** The name of the item you want to retrieve. */
		key: string
	): string;
	/** Indicates whether a specific key value exists in the WshNamed object.
	 * @see https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/windows-scripting/0axxztye(v=vs.84) */
	 Exists(
		/** String value indicating an argument of the WshNamed object. */
		key: string
	): boolean;
}

/** Provides access to the unnamed arguments from the command line.
 * @see https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/windows-scripting/ah2hawwc(v=vs.84) */
interface WshUnnamed {
	/** Returns the number of unnamed arguments. */
	Length: number;
	/** Returns the number of unnamed arguments. */
	Count(): number;
	/** Provides access to the items in the WshUnnamed object.
	 * @see https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/windows-scripting/x49bex47(v=vs.84) */
	Item(
		/** Index of the item you want to retrieve. */
		index: number
	): string;
}

/** Provides access to the native Windows shell.
 * @see https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/windows-scripting/aew9yb99(v=vs.84) */
interface WshShell {
	// TODO(@Mark)
}

/** Provides access to the shared resources on the network to which your computer is connected. 
 * @see https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/windows-scripting/s6wt333f(v=vs.84) */
interface WshNetwork {
	/** Returns the name of the computer system.
	 * @see https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/windows-scripting/wck0hkd7(v=vs.84) */
	ComputerName: string;
	/** Returns a user's domain name.
	 * @see https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/windows-scripting/tte130y1(v=vs.84) */
	UserDomain: string;
	/** Returns the name of a user.
	 * @see https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/windows-scripting/3fxhka75(v=vs.84) */
	UserName: string;
	// AddWindowsPrinterConnection()
	// AddPrinterConnection()
	// EnumNetworkDrives()
	// EnumPrinterConnections()
	// MapNetworkDrive()
	// RemoveNetworkDrive()
	// RemovePrinterConnection()
	// SetDefaultPrinter()
}

/** Facilitates sequential access to file.
 * @see https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/windows-scripting/312a5kbt(v=vs.84) */
interface TextStream {
	/** Returns true if the file pointer is positioned immediately before the end-of-line marker in a TextStream file; false if it is not.
	 * @see https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/windows-scripting/kaf6yaft(v=vs.84) */
	AtEndOfLine: boolean;
	/** Returns true if the file pointer is at the end of a TextStream file; false if it is not.
	 * @see https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/windows-scripting/ffk3x3bw(v=vs.84) */
	AtEndOfStream: boolean;
	/** Read-only property that returns the column number of the current character position in a TextStream file.
	 * @see https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/windows-scripting/3tza1eca(v=vs.84) */
	Column: number;
	/** Read-only property that returns the current line number in a TextStream file.
	 * @see https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/windows-scripting/chsfhd43(v=vs.84) */
	Line: number;
	/** Closes an open TextStream file.
	 * @see https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/windows-scripting/yb3tbdkw(v=vs.84) */
	Close(): void;
	/** Reads a specified number of characters from a TextStream file and returns the resulting string.
	 * @see https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/windows-scripting/dhyx75w2(v=vs.84) */
	Read(
		/** Number of characters you want to read from the file. */
		characters: number
	): string;
	/** Reads an entire TextStream file and returns the resulting string.
	 * @see https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/windows-scripting/t58aa4dd(v=vs.84) */
	ReadAll(): string;
	/** Reads an entire line (up to, but not including, the newline character) from a TextStream file and returns the resulting string.
	 * @see https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/windows-scripting/h7se9d4f(v=vs.84) */
	ReadLine(): string;
	/** Skips a specified number of characters when reading a TextStream file.
	 * @see https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/windows-scripting/08xz3c5a(v=vs.84) */
	Skip(
		/** Number of characters to skip when reading a file. */
		characters: number
	): void;
	/** Skips the next line when reading a TextStream file.
	 * @see https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/windows-scripting/zbhhkawe(v=vs.84) */
	SkipLine(): void;
	/** Writes a specified string to a TextStream file.
	 * @see https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/windows-scripting/6ee7s9w2(v=vs.84) */
	Write(
		/** The text you want to write to the file. */
		string: string
	): void;
	/** Writes a specified number of newline characters to a TextStream file.
	 * @see https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/windows-scripting/eysctzwa(v=vs.84) */
	WriteBlankLines(
		/** Number of newline characters you want to write to the file. */
		lines: number
	): void;
	/** Writes a specified string and newline character to a TextStream file.
	 * @see https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/windows-scripting/t5399c99(v=vs.84) */
	WriteLine(
		/** The text you want to write to the file. If omitted, a newline character is written to the file. */
		string?: string
	): void;
}
