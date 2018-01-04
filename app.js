const fs = require('fs');

fs.readFile("./challenge1/info.txt", "utf8", (err, data)=>{
  // let fs = require('fs');
  if (err) {
    throw err;
  }
  console.log(data);
})


let names = fs.readFileSync('./challenge2/info.txt', 'utf-8')
names = names  + 'Nickg\n' + 'Nickd\n' + 'Jen\n';
fs.writeFileSync('./challenge2/info.txt', names);



fs.renameSync('./challenge3/binfo.txt', './challenge3/info.txt')

// fs.mkdirSync()
// let new_location = './challenge4/';
// fs.mkdirSync(new_location[, 0o777]


// fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
//   if (err) throw err;
//   console.log('File Renamed!');
// });
