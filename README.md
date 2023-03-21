# Rupiah JS

A simple, lightweight, and performant library to manage Indonesian Rupiah in any JavaScript projcets.

Proud to be Indonesian :indonesia:

## :cd: Installation

### Using package managers

Install package:

- `yarn add @jetmiky/rupiahjs`
- or `npm install --save @jetmiky/rupiahjs`

---

## :sunglasses: How to use it?

### 1. Using Rupiah `class`:

#### Initializing.

```js
import { Rupiah } from "@jetmiky/rupiahjs";

// Pass an optional number as initial value,
// if it's ommited, will be using "0" as initial value.
const price = new Rupiah(350000);
```

#### Access real value

```js
// The outuput of code below is number of "350000"
console.log(price.value);
```

#### Mathematic Operation

Currently, supported mathematic operations are addition and subtraction.

```js
// Add numbers as needed. This will return the value after additions.
// In example, method below will be returning 500000.
price.add(50000, 100000);

// Subtract numbers as needed. This will return the value after subtraction.
// In example, method below will be returning 100000.
price.subtract(400000);
```

#### Terbilang

Terbilang feature can be used either in class or in _separate import_.
Please scroll below to see the implementation of separate import.

```js
// The outuput of code below is "Seratus Ribu Rupiah"
console.log(price.terbilang);
```

#### Currency Formatting

```js
// The available parameters are Prefix and Thousand Separators.
const symbol = "Rp"; // Available options "Rp" | "IDR", default to "Rp"
const separators = "dot"; // Available options "dot" | "comma", default to "dot"

// The output of code below is Rp100.000
console.log(price.getCurrency());
console.log(price.getCurrency(symbol, separators));
```

### 2. Only `terbilang` function:

```js
import { terbilang } from "@jetmiky/rupiahjs";

// The output of code below is "Sepuluh Ribu"
console.log(terbilang(10000));
```

---

## :question: Questions and Improvements

If you found bugs, having questions, or requesting features, please don't be hesitate to create new issues.
