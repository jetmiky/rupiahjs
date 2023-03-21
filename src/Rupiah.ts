import terbilang from "./terbilang";
import { add as addSeparator } from "./separators";

export default class Rupiah {
  private _value: number;

  constructor(nominal: number = 0) {
    this._value = nominal;
  }

  /**
   * Get real number of value stored.
   * @returns {number} Real number of value stored.
   */
  get value(): number {
    return this._value;
  }

  /**
   * Get Indonesian language of value (terbilang).
   * @returns {string} Number spoken in Indonesian language.
   */
  get terbilang(): string {
    return "".concat(terbilang(this._value), " Rupiah");
  }

  /**
   * Mathematic operation of addition on value.
   * @param {number} args Number(s) which will be added.
   * @returns {number} Calculation of addition.
   */
  add(...args: number[]): number {
    args.forEach((value) => (this._value += value));
    return this._value;
  }

  /**
   * Mathematic operation of subtraction on value.
   * @param {number} args Number(s) which will be subtracted.
   * @returns {number} Calculation of subtraction.
   */
  subtract(...args: number[]): number {
    args.forEach((value) => (this._value -= value));
    return this._value;
  }

  /**
   * Format value in Indonesian currency.
   * @param {"IDR" | "Rp"} symbol Prefix in front of currency.
   * @param {"dot" | "comma"} separator Character of thousand separators.
   * @returns {string} Value in form of Indonesian currency.
   */
  getCurrency(symbol: "IDR" | "Rp" = "Rp", separator: "dot" | "comma" = "dot"): string {
    const prefix = symbol === "IDR" ? "IDR " : symbol === "Rp" ? "Rp" : "";
    return "".concat(prefix, addSeparator(this._value, separator));
  }
}
