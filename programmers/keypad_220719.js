// problems
// 1. Need to refactoring...

function solution(numbers, hand) {
    // function which calculates coordinate of single key
    const calcCoordinate = (keyNum) => {
        let row = 3;
        let col;
        if (keyNum === '*') {
            col = 0;
        } else if (keyNum === 0) {
            col = 1;
        } else if (keyNum === '#') {
            col = 2;
        } else {
            row = Math.floor((keyNum - 1) / 3);
            col = (keyNum - 1) % 3;
        }
        return [row, col];
    };

    // function which calculates distance between two coordinates
    const calcDistance = (coordFir, coordSec) => {
        const rowDistance = Math.abs(coordSec[0] - coordFir[0]);
        const colDistance = Math.abs(coordSec[1] - coordFir[1]);
        return rowDistance + colDistance;
    };

    // total pressing finger
    let pressingFinger = '';
    // initial position of each finger
    let leftFinger = '*';
    let rightFinger = '#';
    // each press of finger
    let pressedNum;
    // coordinate of left, right finger and given key
    let leftCoordinate, rightCoordinate, nCoordinate;
    // distance between left or right and key, min distance
    let leftDistance, rightDistance, minDistance;

    for (let n of numbers) {
        // left side of the keypad
        if (n === 1 || n === 4 || n === 7) {
            leftFinger = n;
            pressedNum = 'L';
        }
        // right side of the keypad
        else if (n === 3 || n === 6 || n === 9) {
            rightFinger = n;
            pressedNum = 'R';
        }
        // center of the keypad
        else {
            nCoordinate = calcCoordinate(n);
            leftCoordinate = calcCoordinate(leftFinger);
            rightCoordinate = calcCoordinate(rightFinger);
            leftDistance = calcDistance(leftCoordinate, nCoordinate);
            rightDistance = calcDistance(rightCoordinate, nCoordinate);

            // case when left and right distance are same
            if (leftDistance === rightDistance) {
                // case when main hand is left
                if (hand === 'left') {
                    pressedNum = 'L';
                    leftFinger = n;
                }
                // case when main hand is right
                else {
                    pressedNum = 'R';
                    rightFinger = n;
                }
            } else {
                minDistance = Math.min(leftDistance, rightDistance);
                // case when left distance is lower than right
                if (minDistance === leftDistance) {
                    pressedNum = 'L';
                    leftFinger = n;
                }
                // case when right distance is lower than right
                else {
                    pressedNum = 'R';
                    rightFinger = n;
                }
            }
        }
        pressingFinger += pressedNum;
    }

    return pressingFinger;
}
