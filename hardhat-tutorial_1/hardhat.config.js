require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });

const RINKEBY_ALCHEMY_API_KEY_URL = process.env.RINKEBY_ALCHEMY_API_KEY_URL;

const GOERLI_ALCHEMY_API_URL = process.env.GOERLI_ALCHEMY_API_URL

const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY;

const GOERLI_PRIVATE_KEY = process.env.GOERLI_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: RINKEBY_ALCHEMY_API_KEY_URL,
      accounts: [RINKEBY_PRIVATE_KEY],
    },
    goerli: {
      url: GOERLI_ALCHEMY_API_URL,
      accounts: [`${GOERLI_PRIVATE_KEY}`],
    },
  },
};
