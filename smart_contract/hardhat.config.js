require("@nomicfoundation/hardhat-toolbox");
// https://eth-goerli.g.alchemy.com/v2/QWl4b4Gs09f3z9FtNUUEHxOC8YwAeFmC
/** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.9",
// };
// require("nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");
module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/QWl4b4Gs09f3z9FtNUUEHxOC8YwAeFmC",
      accounts: [
        "caf38362d252c3b93fb18265e7c63de579296cd543b66d630310c27b75362a58",
      ],
    },
  },
};
