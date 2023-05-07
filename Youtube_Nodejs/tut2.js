const fs = require("fs");
//Create folder
fs.mkdirSync("Biplab");

//Create file
fs.writeFileSync("./bio.txt", "My name is Biplab Roy");

//Append file
fs.appendFileSync("./bio.txt", "My age is 24")

//Read file
const data = fs.readFileSync("./bio.txt", "utf8"); // "utf8" is a encodding
console.log(data);

//Delete file
fs.unlinkSync("./bio.txt");
