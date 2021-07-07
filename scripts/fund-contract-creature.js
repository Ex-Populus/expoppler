const ExPoppler = artifacts.require("ExPoppler");
const LinkTokenInterface = artifacts.require("LinkTokenInterface");

/*
  This script is meant to assist with funding the requesting
  contract with LINK. It will send 1 LINK to the requesting
  contract for ease-of-use. Any extra LINK present on the contract
  can be retrieved by calling the withdrawLink() function.
*/

const payment = process.env.TRUFFLE_CL_BOX_PAYMENT || "3000000000000000000";

module.exports = async callback => {
  try {
    const exp = await ExPoppler.deployed();

    const tokenAddress = await exp.LinkToken();
    console.log("Chainlink Token Address:", tokenAddress);
    const token = await LinkTokenInterface.at(tokenAddress);
    
    console.log("Funding contract:", exp.address);
    const tx = await token.transfer(exp.address, payment);

    console.log("Funded with:", payment);

    callback(tx.tx);
  } catch (err) {
    callback(err);
  }
}
