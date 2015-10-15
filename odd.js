testArr = [1,2,3,1,2,3,2,2,2,2,2,2,3];
myArr = [1,1,2,3,3];


var findOdd = function(arr){
  workArr = arr.sort();
  console.log(workArr);
  for (var i = 0; i < workArr.length; i += 2) {
    if ((workArr[i] + workArr[i+1]) % 2 !== 0){
      console.log(workArr[i]);
      return workArr[i];
    }
  }
};

findOdd(testArr);
