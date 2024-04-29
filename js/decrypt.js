function decrypt(key,phrase) {
    var decrypted = CryptoJS.AES.decrypt(key, phrase);
    return decrypted.toString(CryptoJS.enc.Utf8);
}