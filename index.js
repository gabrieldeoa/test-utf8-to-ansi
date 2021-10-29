const { utf8ToAnsi } = require("utf8-to-ansi");
const utf8 = "integração";
const ansi = utf8ToAnsi(utf8);

console.log(ansi);
