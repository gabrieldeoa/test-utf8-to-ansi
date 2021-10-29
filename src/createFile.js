const path = require("path");
const { existsSync, writeFileSync, appendFileSync } = require("fs");

const createFile = (filename, message, encoding = "") => {
  const baseDir = path.join(__dirname);
  const pathfile = `${baseDir}/${filename}`;

  const fileExists = existsSync(pathfile);

  if (fileExists) {
    appendFileSync(pathfile, message);
  } else {
    writeFileSync(pathfile, message, encoding);
  }
};

module.exports = createFile;
