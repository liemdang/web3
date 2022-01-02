require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/0A10r4GQqZB4Y1udHGw9YGYrcEFiHjXb',
      accounts: [ 'e5212f1054487caf4a7a95a19e0f587b6968af8ff0bc7c1f45823cebeb4ab0e7' ]
    }
  }
}