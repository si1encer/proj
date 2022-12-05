/********************************************************* */
//question 1
const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

//   Given the array, implement a function for generating a new array which doubles the quantity and price in each object.
const f1 = (arr) =>
  // warning: use the object spread syntax to avoid modifying the objects in the array
  arr.map(({ ...elm }) => {
    elm.quantity *= 2;
    elm.price *= 2;
    return elm;
  });

//   Given the array, implement a function for generating a new array which contains item quantity > 2 and price > 300 only.
const f2 = (arr) => arr.filter((elm) => elm.quantity > 2 && elm.price > 300);

// Given the array, implement a function to calculate the total value of the items.
const f3 = (arr) => arr.reduce((acc, cur) => acc + cur.price, 0);

//test the result
console.log(f1(itemsObject));
console.log(f2(itemsObject));
console.log(f3(itemsObject));

/********************************************************* */
//question 2
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
/********************************************************* */
//question 3
const first = [
  { uuid: 2, name: "test" },
  { uuid: 5, name: "test5" },
  { uuid: 3, name: "test3" },
];

const second = [
  { uuid: 6, role: "pm" },
  { uuid: 4, role: "engineer" },
  { uuid: 1, role: "manager" },
  { uuid: 2, role: "associate" },
];
// function sort array according to the uuid property
let sortId = (a) => {
  if (Array.isArray(a)) {
    return a.sort((a, b) => a.uuid - b.uuid);
  } else return null;
};
// combine function integrate two obj, also make sure the property order
let comb = (a, b) => {
  let result = {};
  result.uuid = a.uuid;
  result.role = a.role ? a.role : b.role ? b.role : null;
  result.name = a.name ? a.name : b.name ? b.name : null;
  return result;
};
//*********target function *************/
let result = (first, second) =>
  sortId([...first, ...second]).reduce((acc, curr) => {
    if (acc.length > 0 && curr.uuid == acc.at(-1).uuid) {
      acc.splice(-1, 1, comb(acc.at(-1), curr));
    } else {
      acc.push(comb(curr, curr));
    }
    return acc;
  }, []);
console.log(result(first, second));

/********************************************************* */
