import { secp256k1 } from "ethereum-cryptography/secp256k1.js";
import { toHex } from "ethereum-cryptography/utils"

const privateKey = secp256k1.utils.randomPrivateKey();

console.log('privateKey: ', toHex(privateKey));