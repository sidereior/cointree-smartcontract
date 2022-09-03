const ethers = require('ethers');
const jsonabi = require('./abi/contract.json');
const provider = ethers.getDefaultProvider('rinkeby');
const address = '0x88aa9612A85aB60f525C63eDbE6AbE9Af3826326';

provider.getBalance(address).then((balance) => {
    const contract = new ethers.Contract(address, jsonabi.abi, provider);
    const balanceInEth = ethers.utils.formatEther(balance);
    //instead of logging in console, use express to send the response

    console.log(`balance: ${balanceInEth} ETH`);
    console.log("contract: " + contract);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.warn(`App listening on http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
  return res.send('Received a GET HTTP method');
});

app.post('/', (req, res) => {
  return res.send('Received a POST HTTP method');
});

app.put('/', (req, res) => {
  return res.send('Received a PUT HTTP method');
});

app.delete('/', (req, res) => {
  return res.send('Received a DELETE HTTP method');
});



