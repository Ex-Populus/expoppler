const ExPoppler = artifacts.require("ExPoppler");

module.exports = async callback => {
    const exp = await ExPoppler.deployed();
    console.log("Let's get your creature's stats");
    const {
      name,
      level,
      red,
      green,
      blue,
      tx,
    } = await exp.creatures(0);

    console.log(JSON.stringify({
      name,
      level: level.toString(),
      red: red.toString(),
      green: green.toString(),
      blue: blue.toString(),
    }, null, 2));

    callback(tx);
}
