/**
 * Add thousand separators on number.
 * @param {number} nominal Number which the separators will be inserted.
 * @param {string} separator Character being used as separators.
 * @returns {string} Number with thousand separators.
 */
export function add(nominal: number, separator: "dot" | "comma" = "dot"): string {
  const locale = separator === "dot" ? "id-ID" : separator === "comma" ? "en-EN" : "";
  return nominal.toLocaleString(locale);
}

/**
 * Remove thousand separators on number.
 * @param {number | string} nominal Number which the separators will be removed.
 * @returns {number} Real value of number.
 */
export function remove(nominal: string | number): number {
  return Number(nominal.toString().replace(/^\D+/g, ""));
}
