import "mocha";
import { assert } from "chai";

import terbilang from "../src/terbilang";

describe("Terbilang function", () => {
  it("should be a function", () => {
    assert.isFunction(terbilang);
  });
});

describe("Output terbilang function", () => {
  it("correct output of: 0", () => {
    const actual = terbilang(0);
    const expected = "Nol";

    return assert.equal(actual, expected);
  });

  it("equal output of: 1", () => {
    const actual = terbilang(1);
    const expected = "Satu";

    return assert.equal(actual, expected);
  });

  it("equal output of: 11", () => {
    const actual = terbilang(11);
    const expected = "Sebelas";

    return assert.equal(actual, expected);
  });

  it("equal output of: 15", () => {
    const actual = terbilang(15);
    const expected = "Lima Belas";

    return assert.equal(actual, expected);
  });

  it("equal output of: 20", () => {
    const actual = terbilang(20);
    const expected = "Dua Puluh";

    return assert.equal(actual, expected);
  });

  it("equal output of: 35", () => {
    const actual = terbilang(35);
    const expected = "Tiga Puluh Lima";

    return assert.equal(actual, expected);
  });

  it("equal output of: 115", () => {
    const actual = terbilang(115);
    const expected = "Seratus Lima Belas";

    return assert.equal(actual, expected);
  });

  it("equal output of: 251", () => {
    const actual = terbilang(251);
    const expected = "Dua Ratus Lima Puluh Satu";

    return assert.equal(actual, expected);
  });

  it("equal output of: 1.000", () => {
    const actual = terbilang(1000);
    const expected = "Seribu";

    return assert.equal(actual, expected);
  });

  it("equal output of: 1.348", () => {
    const actual = terbilang(1348);
    const expected = "Seribu Tiga Ratus Empat Puluh Delapan";

    return assert.equal(actual, expected);
  });

  it("equal output of: 2.300", () => {
    const actual = terbilang(2300);
    const expected = "Dua Ribu Tiga Ratus";

    return assert.equal(actual, expected);
  });

  it("equal output of: 10.000", () => {
    const actual = terbilang(10000);
    const expected = "Sepuluh Ribu";

    return assert.equal(actual, expected);
  });

  it("equal output of: 10.086", () => {
    const actual = terbilang(10086);
    const expected = "Sepuluh Ribu Delapan Puluh Enam";

    return assert.equal(actual, expected);
  });

  it("equal output of: 13.752", () => {
    const actual = terbilang(13752);
    const expected = "Tiga Belas Ribu Tujuh Ratus Lima Puluh Dua";

    return assert.equal(actual, expected);
  });

  it("equal output of: 20.000", () => {
    const actual = terbilang(20000);
    const expected = "Dua Puluh Ribu";

    return assert.equal(actual, expected);
  });

  it("equal output of: 20.002", () => {
    const actual = terbilang(20002);
    const expected = "Dua Puluh Ribu Dua";

    return assert.equal(actual, expected);
  });

  it("equal output of: 1.000.000", () => {
    const actual = terbilang(1000000);
    const expected = "Satu Juta";

    return assert.equal(actual, expected);
  });

  it("equal output of: 1.500.300", () => {
    const actual = terbilang(1500300);
    const expected = "Satu Juta Lima Ratus Ribu Tiga Ratus";

    return assert.equal(actual, expected);
  });

  it("equal output of: 92.500.300", () => {
    const actual = terbilang(92500300);
    const expected = "Sembilan Puluh Dua Juta Lima Ratus Ribu Tiga Ratus";

    return assert.equal(actual, expected);
  });
});
