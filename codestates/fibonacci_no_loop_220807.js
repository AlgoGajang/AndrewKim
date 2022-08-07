function fibonacci(n) {
    // TODO: 여기에 코드를 작성합니다.
    // make array filled with 'undefined' with using array constructor
    const arr = new Array(1000);

    // no return value due to using pre-determined array
    const innerLogic = (n) => {
        if (n === 0) {
            // set zero for first(0th) element
            arr[0] = 0;
            return 0;
        } else {
            // set one for second(1th) element when 1th element is not defined
            if (n === 1 && typeof arr[n] === 'undefined') {
                arr[1] = 1;
            }
            // recursion
            innerLogic(n - 1);
            // main logic for Fibonacci algorithm
            if (n > 1) {
                arr[n] = arr[n - 2] + arr[n - 1];
            }
        }
        return 0;
    };

    innerLogic(n);

    return arr[n];
}

//
//
//
//
// function fibonacci(n) {
//   // TODO: 여기에 코드를 작성합니다.
//   let fiboArr = new Array(10000);
//   fiboArr[0] = 0;
//   fiboArr[1] = 1;
//   function addFiboNums(inNum){
//     if(fiboArr[inNum] === undefined){
// 			fiboArr[inNum] = addFiboNums(inNum - 2) + addFiboNums(inNum - 1);
//     }
//     return fiboArr[inNum];
//   }
//   return addFiboNums(n);
// }
