/// <reference types="../types"/>

declare function testType<T>(actual: T, expected: T): void;
declare function testType(object: any, expectedType: "string" | "number" | "boolean" | "object" | "unknown" | "undefined"): void;
declare function testThrows(func: (...any: []) => any, expectedName: string): void;
