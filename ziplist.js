
const list1 = [1, 2, 3];
const list2 = ['a', 'b', 'c'];

const zipList = (list1, list2) => {
  let combList = [];
  for(let i = 0; i < list1.length; i++) { // List should be of equal length
    combList.push(list1[i]);
    combList.push(list2[i]);
  }
  return combList;
};

const zipListTheSimpleWay = (list1, list2) => _.flatten(_.zip(list1,list2));

console.log(zipList(list1, list2));
console.log(zipListTheSimpleWay(list1, list2));