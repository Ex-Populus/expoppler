const DungeonsAndDragons = artifacts.require("ExPoppler")
module.exports = async callback => {
    const exp = await DungeonsAndDragons.deployed()
    console.log("Setting the tokenURI for your creatures...")
    const tx = await exp.setTokenURI(0, "https://ipfs.io/ipfs/QmaSED9ZSbdGts5UZqueFJjrJ4oHH3GnmGJdSDrkzpYqRS?filename=the-chainlink-knight.json")
    // const tx1 = await exp.setTokenURI(1, "https://ipfs.io/ipfs/QmTvsVaaHTuMNmwXgbfgkrztFEazAPyzmrb4VSS2PbqLjA?filename=the-chainlink-elf.json")
    // const tx2 = await exp.setTokenURI(2, "https://ipfs.io/ipfs/QmPZQhiBB6pwcxRgwZe2mx6ZizCPYgq8i4FBMETyWK1V2z?filename=the-chainlink-wizard.json")
    // const tx3 = await exp.setTokenURI(3, "https://ipfs.io/ipfs/QmS6aznzxshLMcECPQZjCR94UF22WHu6FMM5HLQvaYL9NP?filename=the-chainlink-orc.json")
    console.log(tx)
    callback(tx.tx)
}
