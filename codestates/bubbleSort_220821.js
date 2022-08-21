const bubbleSort = function (arr) {
    // TODO: 여기에 코드를 작성합니다.
    let alignPos = 0;
    const arrLen = arr.length;
    let tempNum;

    while (alignPos < arrLen) {
        if (arr[alignPos] > arr[alignPos + 1]) {
            // should sort
            // pop element align position + 1
            tempNum = arr.splice(alignPos + 1, 1)[0];
            // insert element align position
            arr.splice(alignPos, 0, tempNum);
            // reset align position
            alignPos = 0;
        } else {
            // continue case (already sorted)
            // shift position
            alignCount++;
        }
    }

    return arr;
};
//
//
//
//
//
//
//
//
//
// const bubbleSort = function (arr) {
//   // TODO: 여기에 코드를 작성합니다.
//   let tempArr = arr.slice(0);
//   for(let i = 0; i < arr.length; i++){
//   	let sortToggle = false;
//   	for(let j = 0; j < arr.length - i; j++){
//     	if(tempArr[j] > tempArr[j + 1]){
//         const valArr = [tempArr[j], tempArr[j+1]];
//       	tempArr.splice(j + 1, 1, valArr[0]); // pop ith item
// 	      tempArr.splice(j, 1, valArr[1]); // pop ith item
//         sortToggle = true;
//       }
//   	}
//     if(!sortToggle){
//       break;
//     }
//   }
//   return tempArr;
// };
