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
