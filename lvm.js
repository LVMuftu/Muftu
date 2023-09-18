/**
 * @
 */
/**
 * ofs nesnesi, matematiksel işlemleri gerçekleştirmek için kullanılır.
 * @namespace
 * @since 1.0.0
 */
const ofs = {
  cal: {
    /**
     * İki nesne özelliğini toplar.
     * @param {object} obj - İşlem yapılacak nesne.
     * @param {string} prop1 - İlk özellik adı.
     * @param {string} prop2 - İkinci özellik adı.
     * @returns {number|undefined} - Toplam sonucu veya undefined (nesne veya özellikler eksikse).
     * @since 1.0.0
     * @example
     * Örnek Kullanım:
     * const obj = { a: 5, b: 3 };
     * const result = ofs.cal.plus(obj, 'a', 'b');
     * console.log(result); // 8
     */
    plus: (obj, prop1, prop2) => {
      if (
        typeof obj === "object" &&
        obj.hasOwnProperty(prop1) &&
        obj.hasOwnProperty(prop2)
      ) {
        return obj[prop1] + obj[prop2];
      }
    },
    /**
     * İki nesne özelliğini çıkarır.
     * @param {object} obj - İşlem yapılacak nesne.
     * @param {string} prop1 - İlk özellik adı.
     * @param {string} prop2 - İkinci özellik adı.
     * @returns {number|undefined} - Çıkarma sonucu veya undefined (nesne veya özellikler eksikse).
     * @since 1.0.0
     * @example
     * Örnek Kullanım:
     * const obj = { x: 10, y: 5 };
     * const result = ofs.cal.min(obj, 'x', 'y');
     * console.log(result); // 5
     */
    min: (obj, prop1, prop2) => {
      if (
        typeof obj === "object" &&
        obj.hasOwnProperty(prop1) &&
        obj.hasOwnProperty(prop2)
      ) {
        return obj[prop1] - obj[prop2];
      }
    },
    /**
     * İki nesne özelliğini çarpar.
     * @param {object} obj - İşlem yapılacak nesne.
     * @param {string} prop1 - İlk özellik adı.
     * @param {string} prop2 - İkinci özellik adı.
     * @returns {number|undefined} - Çarpma sonucu veya undefined (nesne veya özellikler eksikse).
     * @since 1.0.0
     * @example
     * Örnek Kullanım:
     * const obj = { num1: 4, num2: 3 };
     * const result = ofs.cal.time(obj, 'num1', 'num2');
     * console.log(result); // 12
     */
    time: (obj, prop1, prop2) => {
      if (
        typeof obj === "object" &&
        obj.hasOwnProperty(prop1) &&
        obj.hasOwnProperty(prop2)
      ) {
        return obj[prop1] * obj[prop2];
      }
    },
    /**
     * İki nesne özelliğini böler.
     * @param {object} obj - İşlem yapılacak nesne.
     * @param {string} prop1 - İlk özellik adı.
     * @param {string} prop2 - İkinci özellik adı.
     * @returns {number|undefined} - Bölme sonucu veya undefined (nesne veya özellikler eksikse).
     * @since 1.0.0
     * @example
     * Örnek Kullanım:
     * const obj = { dividend: 20, divisor: 5 };
     * const result = ofs.cal.split(obj, 'dividend', 'divisor');
     * console.log(result); // 4
     */
    split: (obj, prop1, prop2) => {
      if (
        typeof obj === "object" &&
        obj.hasOwnProperty(prop1) &&
        obj.hasOwnProperty(prop2)
      ) {
        return obj[prop1] / obj[prop2];
      }
    },
    /**
     * İki nesne özelliğinin modunu hesaplar.
     * @param {object} obj - İşlem yapılacak nesne.
     * @param {string} prop1 - İlk özellik adı.
     * @param {string} prop2 - İkinci özellik adı.
     * @returns {number|undefined} - Mod sonucu veya undefined (nesne veya özellikler eksikse).
     * @since 1.0.0
     * @example
     * Örnek Kullanım:
     * const obj = { dividend: 13, divisor: 5 };
     * const result = ofs.cal.mode(obj, 'dividend', 'divisor');
     * console.log(result); // 3
     */
    mode: (obj, prop1, prop2) => {
      if (
        typeof obj === "object" &&
        obj.hasOwnProperty(prop1) &&
        obj.hasOwnProperty(prop2)
      ) {
        return obj[prop1] % obj[prop2];
      }
    },
  },
};

/**
 * iki sayınında yönü sıfıra doğru aynı ise true dönderir
 * @param {number} num1
 * @param {number} num2
 * @returns bollean
 * @since 1.0.0
 * @category Functions
 *
 * @example
 * pone(15,24)  //true
 * pone(-14,47) //false
 * pone(-8,-4) //true
 *  */
const pone = (num1, num2) => {
  return !(num1 < 0 && num2 > 0) || (num1 > 0 && num2 < 0);
};

/**
 * Belirli bir aralıkta rastgele bir tamsayı üretir.
 * @param {number} max - Üretilen türün en büyük değeri (dahil değil).
 * @param {number} [min=0] - Üretilen türün en küçük değeri (dahil). Varsayılan değer 0'dır.
 * @returns {number} - Üretilen rastgele tür.
 * @since 1.0.0
 * @category Functions
 *
 * @example
 * // Örnek Kullanım:
 * const randomType = rnd(10, 5);
 * console.log(randomType); // 5 ile 9 arasında rastgele bir tür üretir.
 */
const rnd = (max, min = 0) => {
  const alt = Math.floor(Math.random() * min);
  const otr = Math.floor(Math.random() * (max - min));
  return otr + alt;
};

/**
 * İki daire arasındaki çakışmayı kontrol eder veya iki daire arasındaki hipotenüs uzunluğunu döndürür.
 * @param {number} x1 - Birinci dairenin merkezinin x koordinatı.
 * @param {number} y1 - Birinci dairenin merkezinin y koordinatı.
 * @param {number} r1 - Birinci dairenin yarıçapı.
 * @param {number} x2 - İkinci dairenin merkezinin x koordinatı.
 * @param {number} y2 - İkinci dairenin merkezinin y koordinatı.
 * @param {number} r2 - İkinci dairenin yarıçapı.
 * @param {boolean} [m=false] - Eğer true ise, hipotenüs uzunluğunu ve koordinat farklarını içeren bir nesne döndürür.
 * @returns {boolean|object} - Eğer m false ise, iki dairenin çakışıp çakışmadığını belirtir (true/false). Eğer m true ise, bir nesne döndürür: { hp: hipotenüs uzunluğu, dx: x koordinat farkı, dy: y koordinat farkı }.
 * @since 1.0.0
 * @category Fonksiyonlar
 *
 * @example
 * Örnek Kullanım:
 * const collision = hipo(0, 0, 5, 10, 0, 5);
 * console.log(collision); // true
 *
 * Hipotenüs ve koordinat farklarını almak için:
 * const result = hipo(0, 0, 5, 10, 0, 5, true);
 * console.log(result); // { hp: 10, dx: -10, dy: 0 }
 */
const hipo = (x1, y1, r1, x2, y2, r2, m = false) => {
  const dx = x1 - x2;
  const dy = y1 - y2;
  const hp = Math.sqrt(dx * dx + dy * dy);
  if (!m) {
    if (hp <= r1 + r2) {
      return true;
    }
    return false;
  } else {
    return {
      hp: hp,
      dx: dx,
      dy: dy,
    };
  }
};

/**
 * Konsolu temizler ve verilen log mesajlarını konsola yazar.
 * @param {...any} logs - Konsola yazılacak log mesajları.
 * @since 1.0.0
 * @category Fonksiyonlar
 *
 * @example
 * Örnek Kullanım:
 * cls("Bu bir log mesajıdır.", "Başka bir log mesajı.");
 *  Konsol temizlenir ve her iki log mesajı konsola yazılır.
 */
const cls = (...logs) => {
  console.clear();
  logs.forEach((t) => {
    console.log(t);
  });
};

/**
 * Konsolu temizler veya verilen log mesajlarını konsola yazar.
 * "cls" parametresi kullanıldığında konsolu temizler.
 * @param {...any} logs - Konsola yazılacak log mesajları veya "cls" parametresi.
 * @since 1.0.0
 * @category Fonksiyonlar
 *
 * @example
 *  Örnek Kullanım:
 * cpx("Bu bir log mesajıdır.", "Başka bir log mesajı.", "cls");
 * // Konsol temizlenir ve her iki log mesajı konsola yazılır.
 */
const cpx = (...logs) => {
  logs.forEach((t) => {
    if (t === "cls") {
      console.clear();
    } else {
      console.log(t);
    }
  });
};

/**
 * Verilen bir diziden rastgele bir öğe seçer.
 * @param {array} arr - Rastgele öğe seçilecek dizi.
 * @param {number} [max=arr.length] - Seçilebilecek öğelerin en büyük indeksi (dahil değil).
 * @param {number} [min=0] - Seçilebilecek öğelerin en küçük indeksi (dahil). Varsayılan değer 0'dır.
 * @returns {any} - Rastgele seçilen öğe.
 * @since 1.0.0
 * @category Fonksiyonlar
 *
 * @example
 * // Örnek Kullanım:
 * const myArray = [1, 2, 3, 4, 5];
 * const randomItem = cho(myArray);
 * console.log(randomItem); // Diziden rastgele bir öğe döndürür.
 */
const cho = (arr, max = arr.length, min = 0) => {
  return arr[rnd(max, min)];
};
/**
 * Verilen bir diziden belirli bir sayıda rastgele öğeleri seçer.
 * @param {array} arr - Rastgele öğeleri seçilecek dizi.
 * @param {number} j - Kaç öğe seçileceği.
 * @param {number} [max=arr.length] - Seçilebilecek öğelerin en büyük indeksi (dahil değil).
 * @param {number} [min=0] - Seçilebilecek öğelerin en küçük indeksi (dahil). Varsayılan değer 0'dır.
 * @returns {array} - Seçilen rastgele öğelerin bir dizisi.
 * @since 1.0.0
 * @category Fonksiyonlar
 *
 * @example
 * // Örnek Kullanım:
 * const myArray = [1, 2, 3, 4, 5];
 * const selectedItems = acho(myArray, 3);
 * console.log(selectedItems); // Diziden 3 rastgele öğe içeren bir dizi döndürür.
 */
const acho = (arr, j, max = arr.length, min = 0) => {
  const res = [];
  for (let i = 0; i < j; i++) {
    res.push(cho(arr, max, min));
  }
  return res;
};

/**
 * Bir metin dizisini belirli bir başlangıç ve bitiş noktasına göre keser ve belirtilen adımda öğeleri alır.
 * @param {string} str - Kesilecek metin dizisi.
 * @param {number|string} b - Kesmenin başlayacağı indeks veya karakter.
 * @param {number|string} f - Kesmenin biteceği indeks veya karakter.
 * @param {number} [step=1] - Seçilecek öğelerin adım sayısı. Varsayılan değer 1'dir.
 * @returns {string|undefined} - Kesilen metin dizisi veya undefined (tanımsız) eğer girdiler geçersizse.
 * @since 1.0.0
 * @category Fonksiyonlar
 *
 * @example
 * // Örnek Kullanım:
 * const metin = "Bu bir örnek metindir.";
 * const kesilmisMetin = restr(metin, 3, 10, 2);
 * console.log(kesilmisMetin); // "birö"
 *
 * const metin2 = "JavaScript öğrenmek çok eğlencelidir.";
 * const kesilmisMetin2 = restr(metin2, "e", "ç", 3);
 * console.log(kesilmisMetin2); // "Jva "
 */
const restr = (str, b, f, step = 1) => {
  if (typeof str === "string") {
    const ssstr = str.split("");
    let bg, fn;
    if (typeof b === "number") {
      bg = b;
    } else if (typeof b === "string") {
      bg = str.indexOf(b);
    } else {
      return;
    }
    if (typeof f === "number") {
      fn = f;
    } else if (typeof f === "string") {
      fn = str.indexOf(f);
    } else {
      return;
    }

    let res = "";
    for (let i = bg; i < fn; i += step) {
      res += ssstr[i];
    }
    return res;
  }
};

/**
 * Belirtilen süre kadar işlemi bekleten bir Promise döndürür.
 * @param {number} ms - Bekleme süresi milisaniye cinsinden.
 * @returns {Promise} - Bekleme süresi sona erdikten sonra çözülen Promise.
 * @since 1.0.1
 * @category Fonksiyonlar
 *
 * @example
 * // Örnek Kullanım:
 * async function main() {
 *   console.log("Başlangıç");
 *   await sleep(2000); // 2 saniye beklet
 *   console.log("2 saniye sonra");
 * }
 *
 * main();
 */
const sleep = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Belirli bir sayıda işlem sonrasında bir işlevi çağırır.
 * @param {number} n - İşlem sayısı, işlevin çağrılmasını tetikler.
 * @param {function} func - Çağrılacak işlev.
 * @returns {function} - Yeni işlev, belirli sayıda işlem sonrasında orijinal işlevi çağırır.
 * @since 1.0.0
 * @category Fonksiyonlar
 *
 * @example
 * // Örnek Kullanım:
 * const logAfter3 = after(3, () => {
 *   console.log("3 kez çalıştım!");
 * });
 *
 * logAfter3();
 * logAfter3();
 * logAfter3(); // 3 kez çalıştım!
 */
const after =
  (n, func) =>
  (...args) =>
    --n < 1 && func(...args);
/**
 * Belirli bir sayıda işlem öncesinde bir işleve çağrır.
 * @param {number} n - İşlem sayısı, işleve çağrılmadan önce kontrol edilir.
 * @param {function} func - Çağrılacak işlem.
 * @returns {function} - Yeni işlem, belirli sayıda işlem öncesinde orijinal işlemi çağırır.
 * @throws {TypeError} - İşlem işlevi bir işlev değilse bir TypeError fırlatır.
 * @since 1.0.0
 * @category Fonksiyonlar
 *
 * @example
 * // Örnek Kullanım:
 * const logBefore3 = before(3, () => {
 *   console.log("3 kez çalıştım!");
 * });
 *
 * logBefore3();
 * logBefore3();
 * logBefore3(); // 3 kez çalıştım!
 */
const before = (n, func) => {
  if (typeof func !== "function") {
    throw new TypeError("Bir işlev bekleniyor");
  }
  return (...args) => --n > 0 && func(...args);
};
const getAfterLastDot = (str) => {
  const lastDotIndex = str.lastIndexOf(".");
  if (lastDotIndex === -1) {
    return ""; // String içinde nokta yoksa boş bir string döndür
  }
  return str.slice(lastDotIndex); // Son noktadan sonrasını döndür
};
const cfn = (filePath) => {
  // dosya ismini "." ve "/" işarretlerinden temizler mime "." işareti hariç
  const regex = /\/?(\w+\.\w+)(\/|$)/;
  const match = filePath.match(regex);
  if (match) {
    return match[1];
  } else {
    return null;
  }
};

/**
 * Bir sayının diğer sayılara tam bölünüp bölünmediğini kontrol eden bir işlemi gerçekleştirir.
 * @function
 * @param {number} num - Kontrol edilecek sayı.
 * @param {...number} nums - num'un tam bölünüp bölünmediği kontrol edilecek diğer sayılar (istediğiniz kadar sayı ekleyebilirsiniz).
 * @returns {boolean} - Birinci sayı diğerlerine tam bölünüyorsa true, aksi takdirde false.
 * @since 1.0.0
 * @category Fonksiyonlar
 * 
 * @example
 * // Örnek Kullanım:
 * const sonuc = odd(10, 2, 5);
 * console.log("Sonuç:", sonuc); // Sonuç: true
 */
const odd = (num, ...nums) => {
    let rtq = true;
    for (let i = 0; i < nums.length; i++) {
        if (rtq) {
            if (num % nums[i] == 0) {
                rtq = false;
                return true;
            }
        }
    }

    return false;
}

module.exports = {
  ofs: ofs,
  pone: pone,
  rnd: rnd,
  hipo: hipo,
  cls: cls,
  cpx: cpx,
  cho: cho,
  acho: acho,
  restr: restr,
  after: after,
  before: before,
  sleep: sleep,
  mime: getAfterLastDot,
  cfn:cfn,
  odd:odd
};
