const fs = require('fs')
const path = require('path')

// fs.mkdir(path.join(__dirname, 'notes'), err => {
//     if(err) throw new Error(err)

//     console.log("Created");
// })

const os = require('os')
console.log(os.platform());
console.log(os.arch());
console.log(os.cpus());