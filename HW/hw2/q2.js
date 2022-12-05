const string1 =
  " Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ";

//   Given the string, implement a function to remove all the non-alphabet characters and extra space in the string and convert the string to all lowercase.
const fun = (str) =>
  str
    .trim()
    .split(/\W/)
    .filter((elm) => !!elm)
    .join(" ")
    .toLowerCase();

//test the result
console.log(fun(string1));

// above solution actuallly is replace all non-alphabet characters with single Space
//  here's solution to remove instead of replace.
const fun2 = (str) =>
  str
    .toLowerCase()
    .trim()
    .split(/\s+\b/)
    .map((elm) => elm.replaceAll(/\W/g, ""))
    .join(" ");

let test = fun2(string1);
console.log(fun2(string1));
