function orderOfPresentation(N, K) {
    // TODO: 여기에 코드를 작성합니다.

    // calculation of factorial
    const calcFactorial = (numb) => {
        let facto = 1;
        if (numb === 0) {
            return facto;
        }
        while (numb > 0) {
            facto *= numb;
            numb -= 1;
        }
        return facto;
    };

    // remove used number
    let countArr = [];
    for (let i = 0; i < N; i++) {
        countArr.push(i + 1);
    }

    // singleStep comes to consider single number step
    let presentInd, singleStep;
    let totalStep = 0;
    let count = 1;

    for (let i = 0; i < N; i++) {
        presentInd = countArr.indexOf(K[i]);
        singleStep = presentInd * calcFactorial(N - count);
        totalStep += singleStep;
        // pop used number
        countArr = countArr
            .slice(0, presentInd)
            .concat(countArr.slice(presentInd + 1, countArr.length));
        count++;
    }

    return totalStep;
}

// function orderOfPresentation (N, K) {
//   // TODO: 여기에 코드를 작성합니다.
//   const masterArr = [];
//   for(let i = 0; i < N; i++){
//     masterArr.push(i + 1);
//   }

//   function calcFacto(num){
//     if (num === 0){
//       return 1;
//     }
//     return num * calcFacto(num - 1);
//   }

//   let summation = 0;
//   for(let i = 0; i < N; i++){
//     let counter = 0;
//     for (elem of masterArr){
//       if(elem < K[i]){
//         counter++;
//       }
//     }
//     masterArr.splice(masterArr.indexOf(K[i]), 1);
//     if (counter !== 0){
//       summation += counter * calcFacto((N - i) - 1);
//     }
//   }
//   return summation;
// }
