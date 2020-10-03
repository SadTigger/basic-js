const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(machine) {
    if (machine === undefined) {
      this.machineMode = 'direct';
    } else {
      this.machineMode = 'reverse' 
    }
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error()
    }
    message = message.toUpperCase().split('')
    key = key.toUpperCase();
    let keyPhrase = '';
    let encryptMessage = '';
  
    for (let i =0,j = 0; i < message.length; i++) {
      if (message[i].match(/\W+|\d+/)) {      
        keyPhrase += message[i];
        continue
      }
      if ((i >= key.length && j >= key.length) && key[j] === undefined ) {
        j = 0;
      };
      keyPhrase += key[j] ;
      j += 1;
    };

    message.forEach ((el, index) => {
      if (!el.match(/[\w+]/) || parseInt(this.alphabet.indexOf(keyPhrase[index])) == -1 || this.alphabet[parseInt(this.alphabet.indexOf(message[index]))] == -1) {      
        encryptMessage += el;
      } else {
        if (parseInt(this.alphabet.indexOf(message[index])) + parseInt(this.alphabet.indexOf(keyPhrase[index])) >= 26 ) {
          encryptMessage += this.alphabet[parseInt(this.alphabet.indexOf(message[index])) + parseInt(this.alphabet.indexOf(keyPhrase[index])) - 26];
        } else {
          encryptMessage += this.alphabet[parseInt(this.alphabet.indexOf(message[index])) + parseInt(this.alphabet.indexOf(keyPhrase[index]))]
        };
      };
    });
  
    if (this.machineMode == 'reverse') return encryptMessage.split('').reverse().join('');
    return encryptMessage;
  }    
  decrypt(encryptedMessage, key) {

    if (encryptedMessage === undefined || key === undefined ) {
      throw new Error()
    }
    encryptedMessage = encryptedMessage.toUpperCase().split('')
    key = key.toUpperCase();
    let keyPhrase = '';
    let baseMessage = '';
  
    for (let i = 0, j = 0; i < encryptedMessage.length; i++) {
      if (encryptedMessage[i].match(/\W+|\d+/)) {      
        keyPhrase += encryptedMessage[i];
        continue
      }
      if ((i >= key.length && j >= key.length) && key[j] === undefined ) {
        j = 0;
      }
      keyPhrase += key[j] ;
      j += 1;
    };

  
    encryptedMessage.forEach ((el, index) => {
      if (!el.match(/[\w+]/) || parseInt(this.alphabet.indexOf(keyPhrase[index])) == -1 || this.alphabet[parseInt(this.alphabet.indexOf(encryptedMessage[index]))] == -1) {      
        baseMessage += el;
      } else {
        if (parseInt(this.alphabet.indexOf(encryptedMessage[index])) - parseInt(this.alphabet.indexOf(keyPhrase[index])) < 0 ) {
          baseMessage += this.alphabet[parseInt(this.alphabet.indexOf(encryptedMessage[index])) + 26 - parseInt(this.alphabet.indexOf(keyPhrase[index]))];
        } else {
          baseMessage += this.alphabet[parseInt(this.alphabet.indexOf(encryptedMessage[index])) - parseInt(this.alphabet.indexOf(keyPhrase[index]))]
        };  
      };
    });

    if (this.machineMode == 'reverse') return baseMessage.split('').reverse().join('');
    return baseMessage;
  }
}

module.exports = VigenereCipheringMachine;
