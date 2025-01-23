import { secp256k1 } from "ethereum-cryptography/secp256k1.js";
import { toHex } from "ethereum-cryptography/utils"

export const generateKeys = (count) => {
    const keys = [];
    for (let i = 0; i < count; i++){
        const privateKey = secp256k1.utils.randomPrivateKey();
        const publicKey = secp256k1.getPublicKey(privateKey);
        keys.push([toHex(privateKey), toHex(publicKey)]);
    }
    return keys;
}

export const generateBalances = (count) => {
    const balances = [];
    for (let i = 0; i < count; i++){
        const balance = Math.floor(Math.random() * 1000 + 1);
        balances.push(balance)
    }
    return balances
}