import express from 'express';
const app = express();

import cors from 'cors';
const port = 3042;

import { generateKeys, generateBalances } from './scripts/generate.js'

app.use(cors());
app.use(express.json());

const _keys = 5

const keys = generateKeys(_keys);
const valor = generateBalances(_keys);

const balances = {};

for( let i = 0; i < _keys; i++){
  balances[keys[i][1]] = valor[i];
  console.log("private key: ", keys[i][0], "public key: ", keys[i][1])
}

app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  const balance = balances[address] || 0;
  res.send({ balance });
});

app.post("/send", (req, res) => {
  const { sender, recipient, amount } = req.body;

  setInitialBalance(sender);
  setInitialBalance(recipient);

  if (balances[sender] < amount) {
    res.status(400).send({ message: "Not enough funds!" });
  } else {
    balances[sender] -= amount;
    balances[recipient] += amount;
    res.send({ balance: balances[sender] });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}
