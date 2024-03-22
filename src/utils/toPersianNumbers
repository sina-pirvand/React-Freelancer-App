const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

export function toPersianNumbersWithComma(n) {
  const numWithCommas = numberWithCommas(n); // 1000,2343
  const persianNumber = toPersianNumbers(numWithCommas);
  return persianNumber;
}
// make comma each 3 digits
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
// convert each digit to persian
export function toPersianNumbers(n) {
  return n.toString().replace(/\d/g, (x) => farsiDigits[parseInt(x)]);
}
