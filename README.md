# Convert Numbers to Nepali Texts

Convert numbers to Nepali text.

## Installation

You can install the package using npm:

```bash
npm install number-to-nepali-text
```

You can also install via yarn:

```bash
yarn add number-to-nepali-text
```

# Import in Your Code

In your JavaScript or TypeScript file, import the Nepali Number Converter:

```
import { numberToNepaliText } from "number-to-nepali-text";

```

# Convert Numbers to Nepali Text

Use the `numberToNepaliText` function to convert numbers to Nepali text:

```
const number = 13500;
const nepaliText = numberToNepaliText(number);
console.log(`${number} in Nepali: ${nepaliText}`);

```

Replace 13500 with your desired number for conversion.

# Example Usage

```
console.log(numberToNepaliText(100));
// Output: सय

console.log(numberToNepaliText(1230000));
// Output: बाह्र लाख तीस हजार
```

Feel free to adjust the examples and instructions based on your specific use case or any additional features your package might have.

# API

`convertToNepali(number)`
Converts the given number to Nepali text.

## Parameters:

`(number)`: The number to convert.

## Returns:

`(string)`: The Nepali text representation of the number.
