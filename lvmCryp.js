console.clear();
const {rnd,cho} = require("./lvm");

const encodeUnixTimestamp = (timestamp=Number(String(rnd(rnd(999)))+String(rnd(rnd(999)))+String(rnd(rnd(999)))+String(rnd(rnd(999)))+String(rnd(rnd(999))))) => {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'; // İstediğiniz karakterleri buraya ekleyin
    const base = characters.length;
  let encoded ="";
    let unixTime = Math.floor(timestamp / 1000);
  
    while (unixTime > 0) {
      const remainder = unixTime % base;
      encoded = characters[remainder] + encoded;
      unixTime = Math.floor(unixTime / base);
    }
    encoded += cho('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'.split(""))
  
    return encoded;
  };
  
  // Şifrelenmiş Unix zamanını çözen arrow fonksiyon
  const decodeUnixTimestamp = (encoded) => {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()-_+=<>?';
    const base = characters.length;
  
    let unixTime = 0;
  
    for (let i = 0; i < encoded.length; i++) {
      const char = encoded.charAt(i);
      const position = characters.indexOf(char);
      if (position === -1) {
        throw new Error('Geçersiz karakter: ' + char);
      }
      unixTime = unixTime * base + position;
    }
  
    return unixTime * 1000; // Saniyeleri milisaniyelere çevirin
  };
/**
 * Belirtilen uzunlukta rastgele sayılar ve harf karakterlerinden oluşan bir dize oluşturan işlev.
 *
 * @param {number} length - Oluşturulan dizenin uzunluğu.
 * @returns {string} - Rastgele sayılar ve harf karakterlerinden oluşan dize.
 *
 * @example
 * // Örnek: 10 karakter uzunluğunda rastgele dize oluştur
 * const randomString = generateRandomString(10);
 * console.log('Random String:', randomString);
 */
const generateRandomString = (length) => {
  const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let randomString = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }

  return randomString;
};
  
  
  module.exports={
    cr:encodeUnixTimestamp,
    rcr: generateRandomString,
    recr:decodeUnixTimestamp
  }

