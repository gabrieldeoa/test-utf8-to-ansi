const { utf8ToAnsi } = require("utf8-to-ansi");
const createFile = require("./src/createFile");

const test = "integração";
createFile("test.xml", test, "latin1");

const ansi = utf8ToAnsi(test);
createFile("testAnsi.xml", ansi);
