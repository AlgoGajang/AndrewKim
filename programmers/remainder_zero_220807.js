function solution(arr, divisor) {
    // sort number array
    const arrCopy = arr.sort((a, b) => a - b);
    const resultArr = [];
    arrCopy.forEach((elem, idx) => {
        // calculate remainder which comes to zero
        if (elem % divisor === 0) {
            resultArr.push(elem);
        }
    });
    // no elements for zero remainder
    if (resultArr.length === 0) {
        resultArr.push(-1);
    }

    return resultArr;
}
