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
