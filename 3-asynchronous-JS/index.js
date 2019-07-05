const fs = require('fs');
const axios = require('axios');

fs.readFile(`${__dirname}/dog.txt`, async (err, data) => {
  console.log(`Breed: ${data}`);
  const {
    data: { message },
  } = await axios.get(`https://dog.ceo/api/breed/${data}/images/random`);
  console.log(message);
  fs.writeFile('dog-img.txt', message, err => console.log('Image written'));
});
