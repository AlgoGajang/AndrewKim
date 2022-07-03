// problems
// 1. NOT consider case when initial 0th element is 100
// 2. NOT remove 0th speed element

function solution(progresses, speeds) {
    // number of deployed programs
    let deployCount = 0;
    // array which each element tells number of deployed programs
    const depArr = [];

    while (progresses.length > 0) {
        // case when 0th(first) element is not ready to deploy
        if (progresses[0] < 100) {
            progresses.forEach((elem, idx) => {
                progresses[idx] += speeds[idx];
            });
        }
        // case when 0th(first) element is ready to deploy
        // i.e., first element >= 100
        else {
            // consider successive element is ready to deploy
            while (progresses[0] >= 100) {
                // deploy program (pop 0th element)
                progresses.shift();
                // deploying speed also should be popped
                speeds.shift();
                deployCount++;
            }
            depArr.push(deployCount);
            deployCount = 0;
        }
    }
    return depArr;
}
