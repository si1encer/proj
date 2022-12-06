let div = document.createElement("div");
div.className = "mydiv";

/*
Question 1
Given the following array and implement the table dynamically
*/
const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};

/****************************************************** */
const createTableHead = (tableh) => {
  let tr = document.createElement("tr");
  if (Array.isArray(tableh)) {
    tr.append(
      ...tableh.map((elm) => {
        let th = document.createElement("th");
        th.textContent = elm;
        th.className = "thead";
        th.scope = "col";
        return th;
      })
    );
  }
  return tr;
};
const createTableCon = (table, tablec) => {
  table.append(
    ...tablec.map((elm) => {
      let tr = document.createElement("tr");
      console.log(elm);
      console.log(Object.values(elm));
      let cont = Object.values(elm);
      tr.append(
        ...cont.map((elmd) => {
          let td = document.createElement("td");
          td.textContent = elmd;
          return td;
        })
      );
      return tr;
    })
  );
};
const table1 = document.createElement("table");
table1.appendChild(createTableHead(tableInfo.tableHeader));
createTableCon(table1, tableInfo.tableContent);
div.append(table1);

/*
Question 2
Given the array and generate order list and unordered list dynamically as following:
*/

const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];
/*********************************************************/
const createlist = (type, listcontent) => {
  let mylist = document.createElement(`${type}`);
  mylist.append(
    ...listcontent.map((elm) => {
      let li = document.createElement("li");
      li.textContent = elm;
      return li;
    })
  );
  return mylist;
};
div.append(createlist("ol", list), createlist("ul", list));
/*********************************************************/

/*
Question 3
Given a array and implement a dropdown list with the following options dynamically 
FYI: use 'value' in the object as the value attribute in the option tag when you create the dropdown list
*/

const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];
/******************************************* */
const createdl = (dlist) => {
  let dl = document.createElement("select");
  dl.className = "city";
  dl.id = "select1";
  dl.append(
    ...dlist.map((elm) => {
      let opt = document.createElement("option");
      opt.value = elm.value;
      opt.textContent = elm.content;
      return opt;
    })
  );
  return dl;
};
div.append(createdl(dropDownList));
/***************************************** */

//render tha page
document.body.append(div);
const mycss = document.createElement("link");
mycss.id = "mycss";
mycss.rel = "stylesheet";
mycss.href = "zhen_GONG_assignment3.css";
document.getElementsByTagName("head")[0].append(mycss);
