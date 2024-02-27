require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  solidity: "0.8.6",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },

    networks: {
      hardhat: {
        chainId: 1337, //Local chain id for hardhat
      },
      // mumbai:{
      //   url:`https://polygon-mumbai.infura.io/v3/${process.env.INFURA_API}`,
      //   accounts:[process.env.MAIN_ACCOUNT],
      //   chainId:80001,
      // },

      //go to metamask and select mumbai testnet
      //go to account details from the three dots option
      //select export private key
      //copy and paste pvt key .env Main_account
    },
  },
  // goerli:{
  //   url: `https://goerli.infura.io/v3/${process.env.INFURA_API}`,
  //   accounts:[process.env.MAIN_ACCOUNT],
  //   chainId: 5,
  // },
  // mumbai:{
  //   url:`https://polygon-mumbai.infura.io/v3/${process.env.INFURA_API}`,
  //   accounts:[process.env.MAIN_ACCOUNT],
  //   chainId:80001,
  // },

  gasReporter: {
    enabled: true,
    currency: "INR",
    coinmarketcap: "0e5feebf-eac3-48d3-9df8-ec120035dba9",
    // token: "matic",
    outputFile: "gasReports2.txt",
    noColors: true,
  },
};
