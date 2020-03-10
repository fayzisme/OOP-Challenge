const crypto = require('crypto');

class Hash {

    static md5(text){
        return crypto.createHash('md5').update(text).digest("hex");
    }

    static sha1(text){
        return crypto.createHash('sha1').update(text).digest("hex");
    }

    static sha256(text) {
        return crypto.createHash('sha256').update(text).digest("hex");
    }

    static sha512(text) {
        return crypto.createHash('sha512').update(text).digest("hex");
    }

  }



console.log(Hash.md5('secret'));
console.log(Hash.sha1('secret'));
console.log(Hash.sha256('secret'));
console.log(Hash.sha512('secret'));