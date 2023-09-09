const fs = require('fs');
const lvmuftu = require("./lvm.js");
const path = require('path');




/**
 * Belirtilen dosyaya veri yazan bir işlemi gerçekleştirir.
 * @param {string} file_name - Verilerin yazılacağı dosyanın adı ve yol.
 * @param {string|Buffer|Uint8Array} data - Dosyaya yazılacak veri.
 * @param {string} [option="utf-8"] - Dosya yazma seçenekleri. Varsayılan olarak "utf-8" kullanılır.
 * @param {boolean|string} [consol=false] - İşlem sonucunu konsola yazdırma veya özel bir metin yazdırma seçeneği. Varsayılan olarak false kullanılır.
 * @throws {Error} - Dosya yazma işlemi sırasında bir hata oluşursa bir hata nesnesi fırlatılır.
 * @since 1.0.0
 * @category Fonksiyonlar
 * 
 * @example
 * // Örnek Kullanım:
 * write("dosya.txt", "Merhaba, Dünya!", "utf-8", true);
 * // "dosya.txt" adlı dosyaya "Merhaba, Dünya!" verisi yazılır ve başarı mesajı konsola yazdırılır.
 */
const write = (file_name, data, option = "utf-8", consol = false) => {
    fs.writeFileSync(file_name, data, option, (err) => {
        if (err) throw err;
        else {
            if (consol) {
                lvmuftu.cpx(`${file_name} başarıyla yazıldı.`);
            } else if (typeof consol === "string") {
                lvmuftu.cpx(consol);
            }
        }
    });
};

/**
 * Belirtilen dosyadan veri okuyan bir işlemi gerçekleştirir.
 * @param {string} file_name - Okunacak dosyanın adı ve yol.
 * @param {string} [option="utf-8"] - Dosya okuma seçenekleri. Varsayılan olarak "utf-8" kullanılır.
 * @param {boolean} [consol=false] - Okunan veriyi konsola yazdırma seçeneği. Varsayılan olarak false kullanılır.
 * @returns {string|Buffer} - Dosyadan okunan veri. Eğer dosya okuma başarısız olursa veya dosya bulunamazsa undefined döner.
 * @throws {Error} - Dosya okuma işlemi sırasında bir hata oluşursa bir hata nesnesi fırlatılır.
 * @since 1.0.0
 * @category Fonksiyonlar
 * 
 * @example
 * // Örnek Kullanım:
 * const veri = read("dosya.txt", "utf-8", true);
 * if (veri) {
 *   console.log("Okunan Veri:", veri);
 * } else {
 *   console.error("Dosya okuma hatası!");
 * }
 */
const read = (file_name, option = "utf-8", consol = false) => {
    try {
        const veri = fs.readFileSync(file_name, option);
        if (consol) {
            lvmuftu.cpx(`${file_name} başarıyla okundu.`);
        }
        return veri;
    } catch (err) {
        if (consol) {
            lvmuftu.cpx(`Hata: ${file_name} okunamadı.`);
        }
        throw err;
    }
};
/**
 * Belirtilen dosyayı silen bir işlemi gerçekleştirir.
 * @param {string} file_name - Silinecek dosyanın adı ve yol.
 * @param {boolean} [consol=false] - Silme işlemi sonucunu konsola yazdırma seçeneği. Varsayılan olarak false kullanılır.
 * @throws {Error} - Dosya silme işlemi sırasında bir hata oluşursa bir hata nesnesi fırlatılır.
 * @since 1.0.0
 * @category Fonksiyonlar
 * 
 * @example
 * // Örnek Kullanım:
 * deleteFile("sil.txt", true);
 * // "sil.txt" adlı dosya silinir ve başarı mesajı konsola yazdırılır.
 */
const delfile = (file_name, consol = false) => {
    try {
        fs.unlinkSync(file_name);
        if (consol) {
            lvmuftu.cpx(`${file_name} başarıyla silindi.`);
        }
    } catch (err) {
        if (consol) {
            lvmuftu.cpx(`Hata: ${file_name} silinemedi.`);
        }
        throw err;
    }
};
    /**
 * Belirtilen dosyaya veri eklemek için bir işlemi gerçekleştirir.
 * @param {string} file_name - Veri eklenecek dosyanın adı ve yol.
 * @param {string|Buffer|Uint8Array} data - Dosyaya eklenecek veri.
 * @param {string} [option="utf-8"] - Dosya yazma seçenekleri. Varsayılan olarak "utf-8" kullanılır.
 * @param {boolean|string} [consol=false] - İşlem sonucunu konsola yazdırma veya özel bir metin yazdırma seçeneği. Varsayılan olarak false kullanılır.
 * @throws {Error} - Dosya yazma işlemi sırasında bir hata oluşursa bir hata nesnesi fırlatılır.
 * @since 1.0.0
 * @category Fonksiyonlar
 * 
 * @example
 * // Örnek Kullanım:
 * appendToFile("dosya.txt", "Yeni veri", "utf-8", true);
 * // "dosya.txt" adlı dosyaya "Yeni veri" eklenir ve başarı mesajı konsola yazdırılır.
 */
const appned = (file_name, data, option = "utf-8", consol = false) => {
    try {
        fs.appendFileSync(file_name, data, option);
        if (consol) {
            lvmuftu.cpx(`${file_name} başarıyla güncellendi.`);
        }
    } catch (err) {
        if (consol) {
            lvmuftu.cpx(`Hata: ${file_name} güncellenemedi.`);
        }
        throw err;
    }
};
/**
 * Belirtilen yolun bir klasör mü yoksa dosya mı olduğunu kontrol eden bir işlemi gerçekleştirir.
 * @param {string} path - Kontrol edilecek yol.
 * @returns {boolean} - Eğer yol bir klasörse true, dosyaysa false döner.
 * @throws {Error} - Yol kontrolü sırasında bir hata oluşursa bir hata nesnesi fırlatılır.
 * @since 1.0.0
 * @category Fonksiyonlar
 * 
 * @example
 * // Örnek Kullanım:
 * const isFolder = checkPath("myFolder");
 * if (isFolder) {
 *   console.log("Bu bir klasördür.");
 * } else {
 *   console.log("Bu bir dosyadır.");
 * }
 */
const isDic = (path) => {
    try {
        const stats = fs.statSync(path);
        return stats.isDirectory();
    } catch (err) {
        throw err;
    }
};

/**
 * Belirtilen klasörü oluşturan bir işlemi gerçekleştirir.
 * @param {string} folder_name - Oluşturulacak klasörün adı ve yol.
 * @param {boolean} [consol=false] - Oluşturma işlemi sonucunu konsola yazdırma seçeneği. Varsayılan olarak false kullanılır.
 * @throws {Error} - Klasör oluşturma işlemi sırasında bir hata oluşursa bir hata nesnesi fırlatılır.
 * @since 1.0.0
 * @category Fonksiyonlar
 * 
 * @example
 * // Örnek Kullanım:
 * createFolder("yeniKlasor", true);
 * // "yeniKlasor" adlı klasör oluşturulur ve başarı mesajı konsola yazdırılır.
 */
const newFolder = (folder_name, consol = false) => {
    try {
        fs.mkdirSync(folder_name);
        if (consol) {
            lvmuftu.cpx(`${folder_name} başarıyla oluşturuldu.`);
        }
    } catch (err) {
        if (consol) {
            lvmuftu.cpx(`Hata: ${folder_name} oluşturulamadı.`);
        }
        throw err;
    }
};


/**
 * Belirtilen klasörü silen bir işlemi gerçekleştirir.
 * @param {string} folder_path - Silinecek klasörün adı ve yol.
 * @param {boolean} [consol=false] - Silme işlemi sonucunu konsola yazdırma seçeneği. Varsayılan olarak false kullanılır.
 * @throws {Error} - Klasör silme işlemi sırasında bir hata oluşursa bir hata nesnesi fırlatılır.
 * @since 1.0.0
 * @category Fonksiyonlar
 * 
 * @example
 * // Örnek Kullanım:
 * deleteFolder("silKlasor", true);
 * // "silKlasor" adlı klasör silinir ve başarı mesajı konsola yazdırılır.
 */
const deleteFolder = (folder_path, consol = false) => {
    try {
        if (fs.existsSync(folder_path)) {
            fs.readdirSync(folder_path).forEach((file) => {
                const current_path = path.join(folder_path, file);
                if (fs.lstatSync(current_path).isDirectory()) {
                    // Klasör ise, özyinelemeli olarak içeriğini sil
                    deleteFolder(current_path);
                } else {
                    // Dosya ise, sil
                    fs.unlinkSync(current_path);
                }
            });
            fs.rmdirSync(folder_path); // Klasörü sil
            if (consol) {
                lvmuftu.cpx(`${folder_path} başarıyla silindi.`);
            }
        }
    } catch (err) {
        if (consol) {
            lvmuftu.cpx(`Hata: ${folder_path} silinemedi.`);
        }
        throw err;
    }
};


/**
 * Belirtilen dosyayı veya klasörü silen bir işlemi gerçekleştirir.
 * @param {string} path - Silinecek dosyanın veya klasörün adı ve yol.
 * @param {boolean} [consol=false] - Silme işlemi sonucunu konsola yazdırma seçeneği. Varsayılan olarak false kullanılır.
 * @throws {Error} - Dosya veya klasör silme işlemi sırasında bir hata oluşursa bir hata nesnesi fırlatılır.
 * @returns {boolean} - İşlem başarılıysa true, hata oluşursa false döner.
 * @since 1.0.0
 * @category Fonksiyonlar
 * 
 * @example
 * // Örnek Kullanım:
 * const success = deleteFileOrFolder("silKlasor", true);
 * if (success) {
 *   console.log("Başarıyla silindi.");
 * } else {
 *   console.error("Silme hatası!");
 * }
 * 
 * const success = deleteFileOrFolder("dosya.txt", true);
if (success) {
    console.log("Dosya başarıyla silindi.");
} else {
    console.error("Dosya silme hatası!");
}

 */
const deleteFileOrFolder = (path, consol = false) => {
    try {
        if (fs.existsSync(path)) {
            if (fs.lstatSync(path).isDirectory()) {
                // Klasör ise, içeriği ve klasörü sil
                fs.readdirSync(path).forEach((file) => {
                    const current_path = path.join(path, file);
                    deleteFileOrFolder(current_path);
                });
                fs.rmdirSync(path);
            } else {
                // Dosya ise, sil
                fs.unlinkSync(path);
            }
            if (consol) {
                lvmuftu.cpx(`${path} başarıyla silindi.`);
            }
            return true;
        }
        return false;
    } catch (err) {
        if (consol) {
            lvmuftu.cpx(`Hata: ${path} silinemedi.`);
        }
        throw err;
    }
};
/**
 * Tarih ve saatle ilgili bilgileri döndüren bir nesne.
 * @namespace
 * @since 1.0.0
 * @category Fonksiyonlar
 */
const tipo = {
    /**
     * Geçerli Unix zamanını (milisaniye cinsinden) döndüren bir işlemi gerçekleştirir.
     * @function
     * @returns {number} - Unix zamanı (milisaniye cinsinden).
     * @since 1.0.0
     * @example
     * // Örnek Kullanım:
     * const unixTime = tipo.unix();
     * console.log("Unix Zamanı:", unixTime);
     */
    unix: () => {
        return new Date().getTime();
    },
    /**
     * Geçerli yılı döndüren bir işlemi gerçekleştirir.
     * @function
     * @returns {number} - Geçerli yıl.
     * @since 1.0.0
     * @example
     * // Örnek Kullanım:
     * const currentYear = tipo.y();
     * console.log("Geçerli Yıl:", currentYear);
     */
    y: () => {
        return new Date().getFullYear();
    },
    /**
     * Geçerli ayı (0'dan başlayarak) döndüren bir işlemi gerçekleştirir.
     * @function
     * @returns {number} - Geçerli ayın indeksi (0: Ocak, 1: Şubat, ...).
     * @since 1.0.0
     * @example
     * // Örnek Kullanım:
     * const currentMonth = tipo.mo();
     * console.log("Geçerli Ay:", currentMonth);
     */
    mo: () => {
        return new Date().getMonth();
    },
    /**
     * Geçerli günün haftanın günlerine göre indeksini döndüren bir işlemi gerçekleştirir.
     * @function
     * @returns {number} - Geçerli günün indeksi (0: Pazar, 1: Pazartesi, ...).
     * @since 1.0.0
     * @example
     * // Örnek Kullanım:
     * const currentDayOfWeek = tipo.w();
     * console.log("Geçerli Gün:", currentDayOfWeek);
     */
    w: () => {
        return new Date().getDay();
    },
    /**
     * Geçerli ayın gününü döndüren bir işlemi gerçekleştirir.
     * @function
     * @returns {number} - Geçerli ayın günü.
     * @since 1.0.0
     * @example
     * // Örnek Kullanım:
     * const currentDayOfMonth = tipo.d();
     * console.log("Geçerli Gün:", currentDayOfMonth);
     */
    d: () => {
        return new Date().getDate();
    },
    /**
     * Geçerli saati döndüren bir işlemi gerçekleştirir.
     * @function
     * @returns {number} - Geçerli saat.
     * @since 1.0.0
     * @example
     * // Örnek Kullanım:
     * const currentHour = tipo.h();
     * console.log("Geçerli Saat:", currentHour);
     */
    h: () => {
        return new Date().getHours();
    },
    /**
     * Geçerli dakikayı döndüren bir işlemi gerçekleştirir.
     * @function
     * @returns {number} - Geçerli dakika.
     * @since 1.0.0
     * @example
     * // Örnek Kullanım:
     * const currentMinute = tipo.mi();
     * console.log("Geçerli Dakika:", currentMinute);
     */
    mi: () => {
        return new Date().getMinutes();
    },
    /**
     * Geçerli saniyeyi döndüren bir işlemi gerçekleştirir.
     * @function
     * @returns {number} - Geçerli saniye.
     * @since 1.0.0
     * @example
     * // Örnek Kullanım:
     * const currentSecond = tipo.s();
     * console.log("Geçerli Saniye:", currentSecond);
     */
    s: () => {
        return new Date().getSeconds();
    },
    /**
     * Geçerli milisaniyeyi döndüren bir işlemi gerçekleştirir.
     * @function
     * @returns {number} - Geçerli milisaniye.
     * @since 1.0.0
     * @example
     * // Örnek Kullanım:
     * const currentMillisecond = tipo.ms();
     * console.log("Geçerli Milisaniye:", currentMillisecond);
     */
    ms: () => {
        return new Date().getMilliseconds();
    },
    /**
     * Geçerli tarih ve saat bilgilerini bir nesne veya dizi olarak döndüren bir işlemi gerçekleştirir.
     * @function
     * @param {boolean} [returnArray=false] - Bilgilerin bir dizi olarak dönüp dönmemesi. Varsayılan olarak false kullanılır.
     * @returns {object|number[]} - Tarih ve saat bilgilerini içeren nesne veya dizi.
     * @since 1.0.0
     * @example
     * // Örnek Kullanım:
     * const dateInfo = tipo.ll();
     * console.log("Tarih ve Saat Bilgileri:", dateInfo);
     */
    ll: (returnArray = false) => {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth();
        const dayOfWeek = date.getDay();
        const dayOfMonth = date.getDate();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const second = date.getSeconds();
        const millisecond = date.getMilliseconds();

        if (returnArray) {
            return [year, month, dayOfWeek, dayOfMonth, hour, minute, second, millisecond];
        } else {
            return {
                year,
                month,
                dayOfWeek,
                dayOfMonth,
                hour,
                minute,
                second,
                millisecond
            };
        }
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

module.exports={
    odd:odd,
    tipo:tipo,
    del:deleteFileOrFolder,
    defol:deleteFolder,
    newfol:newFolder,
    write:write,
    read:read,
    defile:delfile,
    appned:appned,
    isDic:isDic,
    


}
