// ** String methods()

// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// console.log(text);

// .length : it means counting all.
// let countCharacter = text.length;
// console.log(countCharacter);

// console.log(text.at(5));

let firstName = "Omikunle";
let lastName = "Ibraheem";

// let getLetter = name[3];
// console.log(getLetter);
const fullName = firstName.concat(" ", lastName);
// console.log(fullName);

// ** Extracting String Parts

/**
 * There are 3 methods for extracting a part of a string:

slice(start, end)
substring(start, end)
substr(start, length)
 */

// const microservice = "The scenario is painfully familiar."; // 35
// console.log(microservice.length);

// const slicePart = microservice.slice(4, 12);

// * It can also accept negative parameter
// const slicePart = microservice.slice(-12, -6);
// console.log(slicePart);

// ** Substring method()
//  NoTE {! The difference is that start and end values less than 0 are treated as 0 in substring().}
// const microservice = "The scenario is painfully familiar."; // 35
// const slicePart = microservice.substring(-4);
//
// JavaScript String substr()
//!{ The difference is that the second parameter specifies the length of the extracted part.}
const microservice = "The scenario is painfully familiar."; // 35
const slicePart = microservice.substr(4, 7);
console.log(slicePart);
