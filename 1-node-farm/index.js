const fs = require('fs');

// // Blocking syncrohnous
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIn);

// // Write file
// const textOut = `This is what ww know about avocado: ${textIn}\nCreated on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOut);

// Async  - Non-blocking reading file
fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
  if (err) return console.log('ERROR!');
  fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
    console.log({ data2 });
    fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
      console.log({ data3 });
      fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
        console.log('File written 😎');
      });
    });
  });
});
console.log('Will read file');
