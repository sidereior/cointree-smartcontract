const ethers = require('ethers');
const network = 'rinkeby';
const provider = ethers.getDefaultProvider(network);
const address = '0x88aa9612A85aB60f525C63eDbE6AbE9Af3826326';

provider.getBalance(address).then((balance) => {
    const balanceInEth = ethers.utils.formatEther(balance);
    console.log(`balance: ${balanceInEth} ETH`);
});
