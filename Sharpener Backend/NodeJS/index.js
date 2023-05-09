const fs = require("fs");


//Create file
fs.writeFileSync("hello.txt", "Hello World");

//Read file
const data = fs.readFileSync("hello.txt", "utf8"); // "utf8" is a encodding
console.log(data);
