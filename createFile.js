//========================================================
//Write File with Static Path
//========================================================

const fs = require('fs');
fs.writeFileSync('testfile.txt',`Hello Fella, How are you doing?`);

//========================================================
//How to get Folder Path and Create File in specific folder
//========================================================

const path =  require('path')

//const dirPath = path.join(__dirname, 'myFolder');

console.log(path.join(__dirname));

fs.writeFileSync(path.join(__dirname) + '\\File1.txt',`This is my content`)