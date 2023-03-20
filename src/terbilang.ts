// prettier-ignore
const SPECIAL_NUMBERS: {[key: string]: string} = { "0": "Nol" };

// prettier-ignore
const DIGITS: string[] = ["", "Satu", "Dua", "Tiga", "Empat", "Lima", "Enam", "Tujuh", "Delapan", "Sembilan", "Sepuluh", "Sebelas"];

function isNumberBeetween(number: number, lowest: number, highest: number): boolean {
  return lowest <= number && number <= highest;
}

function calcTerbilang(number: number, resultArray: string[]): void {
  switch (true) {
    case isNumberBeetween(number, 0, 11):
      resultArray.push(DIGITS[number]);
      break;
    case isNumberBeetween(number, 12, 19):
      calcTerbilang(number % 10, resultArray);
      resultArray.push("Belas");

      break;
    case isNumberBeetween(number, 20, 99):
      calcTerbilang(Math.floor(number / 10), resultArray);
      resultArray.push("Puluh");
      calcTerbilang(number % 10, resultArray);

      break;
    case isNumberBeetween(number, 100, 199):
      resultArray.push("Seratus");
      calcTerbilang(number - 100, resultArray);

      break;
    case isNumberBeetween(number, 200, 999):
      calcTerbilang(Math.floor(number / 100), resultArray);
      resultArray.push("Ratus");
      calcTerbilang(number % 100, resultArray);

      break;
    case isNumberBeetween(number, 1000, 1999):
      resultArray.push("Seribu");
      calcTerbilang(number - 1000, resultArray);

      break;
    case isNumberBeetween(number, 2000, 999999):
      calcTerbilang(Math.floor(number / 1000), resultArray);
      resultArray.push("Ribu");
      calcTerbilang(number % 1000, resultArray);

      break;
    case isNumberBeetween(number, 1000000, 999999999):
      calcTerbilang(Math.floor(number / 1000000), resultArray);
      resultArray.push("Juta");
      calcTerbilang(number % 1000000, resultArray);

      break;
    default:
      calcTerbilang(Math.floor(number / 1000000000), resultArray);
      resultArray.push("Milyar");
      calcTerbilang(number % 1000000000, resultArray);

      break;
  }
}

/**
 * Convert provided number to Indonesian language.
 * @param {number} nominal Number to be converted.
 * @returns {string} Number in Indonesian language.
 */
export default function terbilang(nominal: number): string {
  if (nominal in SPECIAL_NUMBERS) return SPECIAL_NUMBERS[nominal];

  const isNegative = nominal < 0;

  const resultArray: string[] = [];
  calcTerbilang(Math.abs(nominal), resultArray);

  return (isNegative ? "Minus " : "") + resultArray.filter((val) => !!val).join(" ");
}
