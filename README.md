# Combined Lesson

## Try, Catch and Errors

### JS Try Catch

The try...catch statement is used in JavaScript to handle errors that may occur during the execution of a block of code. The try block contains the code that may throw an error, while the catch block contains the code that is executed if an error is thrown. The catch block takes an error object as its argument, which can be used to get information about the error.

```js
try {
  let x = y + 5;   // y is not defined
} catch(err) {
  console.error("An error occurred: " + err.message);
}
```

This is most useful inside a function

```js
const mySafeFunction = (y) => {
    try {
        let x = y + 5;   // if y is not defined...
    }
    catch(err) {
        // log that y is not defined
        console.error("An error occurred: " + err.message);
        x = 5
    }
    
    return x
    
}
```

## Date Object

### Lesson Objectives

- JS Date Object

### JS Date Object

The `Date object` is a *built-in object* in **JavaScript** that provides `methods` *for working with dates and times*. The `Date object` represents a single moment in time and can be used to perform operations such as adding or subtracting `days`, `hours`, or `minutes` to a given date. The `Date object` provides several `methods` for getting and setting the different parts of a `date`, such as a `year`, `month`, `day`, `hour`, `minute`, and `second`.

```js
let today = new Date(); // create a NEW date object

console.log(today.getFullYear());// 2023
console.log(today.getMonth());   // 2 (March)
console.log(today.getDate());    // 15
console.log(today.getHours());   // 10
console.log(today.getMinutes()); // 30
console.log(today.getSeconds()); // 00
```

## Resources

### W3 Schools

- [JavaScript Errors (try catch)](https://www.w3schools.com/js/js_errors.asp)
- [JavaScript Date Objects](https://www.w3schools.com/js/js_dates.asp)

### MDN Docs

- [try...catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)
- [Error() constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/Error)
- [Date() constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date)
- [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
