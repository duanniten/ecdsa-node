import { secp256k1 } from "ethereum-cryptography/secp256k1.js";
import { toHex } from "ethereum-cryptography/utils"

const generateKeys = (count) => {
    const keys = []
    for (let i = 0; i < count; i++){
        const privateKey = secp256k1.utils.randomPrivateKey();
        const publicKey = secp256k1.getPublicKey(privateKey);
        keys.push([toHex(privateKey), publicKey]);
    }
    return keys;
}