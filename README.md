# add_numbers

This is a TypeScript function that takes an array of numbers and returns their sum. If the array is empty, the function returns 0.

## Usage

To use this function, first import it into your TypeScript code:

```ts
import { addNNumbers } from "./addNNumbers";
```

Then you can call the `addNNumbers` function with an array of numbers:

```js
const numbers = [1, 2, 3, 4, 5];
```

```js
const sum = addNNumbers(numbers); // sum is now 15
```

If you pass an empty array to the `addNNumbers` function, it will return 0:

```js
const emptyArray = [];
const sum = addNNumbers(emptyArray); // sum is now 0
```

## Tests

This function includes unit tests to verify its correctness. To run the tests, first install the necessary dependencies:

```sh
npm install
```

Then you can run the tests using the following command:

```sh
npm test
```

## License
This code is released under the [MIT License](https://opensource.org/license/mit/). Feel free to use it in your own projects or modify it as needed.
