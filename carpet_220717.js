// problems
// 1. unpropriate consideration of case when number of yellow carpet is odd

function solution(brown, yellow) {
    let row, col;
    // consider when yellow carpet is not single line
    let devideBy = 1;
    // brute force dividing
    while (yellow >= devideBy) {
        // case when yellow carpet is devided by certain number
        if (yellow % devideBy === 0) {
            // variable 'devideBy' comes to number of line of carpet
            const yellowDivision = yellow / devideBy;
            const countBrown = 2 * denom + 2 * yellowDivision + 4;
            // case when calculated number of brown carpet is equal to given number of brown carpet
            if (countBrown === brown) {
                row = denom + 2;
                col = yellowDivision + 2;
                break;
            }
        }
        denom++;
    }
    return [col, row];
}
