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
