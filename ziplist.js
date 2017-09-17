const testList1 = [1, 2, 3];
const testList2 = [4, 5, 6];

function zipList(list1, list2) {
  let endList = [];
  let i = 0;
  while (i < list1.length) {
    endList.push(list1[i]);
    endList.push(list2[i]);
    i++;
  }
  return endList;
}

function zipListTheSimpleWay(list1,list2){
  return _.flatten(_.zip(list1,list2));
}

console.log(zipList(testList1,testList2));
console.log(zipListTheSimpleWay(testList1, testList2));
