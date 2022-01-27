require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/zDKAIBw9NnnkNs8vuOZkVucGMmhXmZWy",
      accounts: [
        "b3a1db26a25eed500b361234c8316d137074325dc79022362151b49c4f9cf3df",
      ],
    },
  },
};
