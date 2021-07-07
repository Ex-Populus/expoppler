const ExPoppler = artifacts.require("ExPoppler")
const fs = require("fs");

const parseNumber = (num) => {
  if (isNaN(parseInt(num, 10))) {
    console.error("WARN: Failed to parse value", num);
    return 0;
  }

  return parseInt(num, 10);
}

module.exports = async callback => {
  const exp = await ExPoppler.deployed();
  length = await exp.getNumberOfCreatures();

  for (let index = 0; index < this.length; index += 1) {
    console.log(`Stats for creature ${index + 1} of ${length}`);
    const {
      name,
      level,
      red,
      green,
      blue,
    } = await exp.creatures(index);

    const creatureMetadata = {
      name,
      description: "",
      image: "",
      attributes: {
        level: parseNumber(level),
        red: parseNumber(red),
        green: parseNumber(green),
        blue: parseNumber(blue),
      }
    };

    const filename = `./metadata/${index}-${name.toLowerCase().replace(/\s/g, "-")}.json`;
    fs.writeFileSync(filename, JSON.stringify(creatureMetadata));
    console.log(`Metadata created at ${filename}`);
  }
  callback(exp.address);
}
