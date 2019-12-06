var crypto = require("crypto");

class MyEncryptDecryptClass {


    static encrypt(data) {
        var key = "supersecretkey";
        var cipher = crypto.createCipher('aes-256-cbc', key);
        var crypted = cipher.update(data, 'utf-8', 'hex');
        crypted += cipher.final('hex');

        return crypted;
        //console.log('Doing anotherMethod');
    }
    static decrypt(data) {

        var key = "supersecretkey";
        var mykey = crypto.createDecipher('aes-256-cbc', key);
        var mystr = mykey.update(data, 'hex', 'utf8')
        mystr += mykey.final('utf8');

        return mystr;
        //abc
    }

}

module.exports = MyEncryptDecryptClass;