const CryptoJS = require("crypto-js");
 
class Cipher {

    static encrypt (text, key){
        return CryptoJS.AES.encrypt(text, key).toString();
    }

    static decrypt (val, key){
        return CryptoJS.AES.decrypt(val, key).toString(CryptoJS.enc.Utf8);
    }
}

const message = Cipher.encrypt('ini tulisan rahasia', 'p4$$w0rd');

const decryptedMessage = Cipher.decrypt(message, 'p4$$w0rd');

console.log(message);
 
console.log(decryptedMessage);
