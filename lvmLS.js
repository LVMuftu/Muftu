const fs = require('fs');

/**
 * Belirtilen dizindeki dosya ve klasör içeriğini alır.
 *
 * @param {string} folderPath - İçeriği alınacak dizin yolunu içeren bir dize.
 * @returns {Object} - Dosya ve klasör içeriğini temsil eden bir nesne.
 * @returns {string[]} Object.files - Dizindeki dosya adlarını içeren bir dizi.
 * @returns {string[]} Object.folders - Dizindeki klasör adlarını içeren bir dizi.
 * @throws {Error} - Dizin okunamazsa veya herhangi bir hata oluşursa bir hata fırlatır.
 *
 * @example
 * // Örnek: Dizin içeriğini al
 * const folderPath = '/path/to/your/folder';
 * const contents = getDirectoryContents(folderPath);
 * console.log('Files:', contents.files);
 * console.log('Folders:', contents.folders);
 *
 * @example
 * // Örnek: Hata durumu - Dizin okunamazsa
 * try {
 *   const contents = getDirectoryContents('/nonexistent/folder');
 * } catch (error) {
 *   console.error(error.message); // "Dizin okunamıyor."
 * }
 */
const getDirectoryContents = (folderPath) => {
  const directoryContents = {
    files: [],
    folders: []
  };

  try {
    const fileNames = fs.readdirSync(folderPath);

    fileNames.forEach((fileName) => {
      const filePath = `${folderPath}/${fileName}`;
      const stats = fs.statSync(filePath);

      if (stats.isFile()) {
        directoryContents.files.push(fileName);
      } else if (stats.isDirectory()) {
        directoryContents.folders.push(fileName);
      }
else{
throw new Error('Dosya yolu yada klasör yolu ile etkileşime geçilemedi. Linux yada Mac işletim sistemi için "sudo" komutunu kullanın.')
}
    });
  } catch (error) {
    throw new Error("Dizin okunamıyor.");
  }

  return directoryContents;
};
