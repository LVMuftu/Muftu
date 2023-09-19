const getFormattedDate = () => {
  const now = new Date();
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0'); // JavaScript'te aylar 0'dan başlar, bu yüzden +1 eklenir.
  const year = String(now.getFullYear()).slice(-2);

  return `${seconds}-${minutes}-${hours}-${day}${month}${year}`;
};
module.exports={}
