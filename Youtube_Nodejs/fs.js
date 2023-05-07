const fs = require("fs");
//Write file 

//replace text
fs.writeFileSync("read.txt", "Welcome to Nodejs part");

//Append text
fs.appendFileSync("read.txt", "  I am Fine How are you bro  ");

//read file :
const buf_data = fs.readFileSync("read.txt");
//console.log(buf_data);

//Get Original data
const org_data = buf_data.toString();
console.log(org_data);

//Change file name :
fs.renameSync("read.txt", "readWrite.txt");