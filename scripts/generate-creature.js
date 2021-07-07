const ExPoppler = artifacts.require("ExPoppler")

module.exports = async callback => {
  const exp = await ExPoppler.deployed();
  console.log("Creating requests on contract:", exp.address);
  const tx = await exp.requestNewRandomCreature("Poppy");
  callback(tx.tx);
}
