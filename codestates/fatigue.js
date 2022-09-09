function solution(k, dungeons) {
    const arr = [[]];
    let count = 0;

    const deepCopyArr = (arr) => {
        // two depth
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            result.push([]);
            result[i].push(arr[i][0]);
            result[i].push(arr[i][1]);
        }
        return result;
    };

    const findInd = (arr, elem) => {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i][0] === elem[0] && arr[i][1] === elem[1]) {
                return count;
            }
        }
        return -1;
    };

    let copyDun, tempArr, elemInd;
    let initFlag = true;
    const perArr = [];

    const permutation = (arr) => {
        if (arr.length === 1) {
            return [arr[0]];
        }
        for (let elem of arr) {
            tempArr = [elem];
            copyDun = deepCopyArr(arr);
            elemInd = findInd(copyDun, elem);
            copyDun.splice(elemInd, 1);
            aaa = permutation(copyDun);
            tempArr += aaa;
            if (tempArr.length === 3) {
                perArr.push(tempArr);
            }
        }
        return tempArr;
    };

    permutation(dungeons);

    console.log(perArr);

    // return answer;
}

const dungeons = [
    [80, 20],
    [50, 40],
    [30, 10],
];
const k = 80;

solution(k, dungeons);

// const spread = (dunArr) => {
//     for (let elem of dunArr) {
//         if (initFlag) {
//             copyDun = deepCopyArr(dungeons);
//             tempArr = [];
//             initFlag = false;
//         }
//         tempArr.push(elem);
//         elemInd = findInd(copyDun, elem);
//         copyDun.splice(elemInd, 1);
//         if (dunArr.length === 1) {
//             initFlag = true;
//             spreadArr.push(tempArr);
//             return 0;
//         }
//         spread(copyDun);
//     }
// // };

// a = [1, 2, 3, 4, 5];
// a.splice(0, 1);
// console.log(a);
