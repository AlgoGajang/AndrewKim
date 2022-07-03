// problems
// 1. NOT unify index convention of js and moves
// 2. NOT consider size of the board

function solution(board, moves) {
    const outlet = [];
    let pang = 0;
    const rowLen = board.length;

    while (moves.length > 0) {
        let row = 0;
        let pick;
        // crain searching columns(moves)
        const crain = moves.shift() - 1;

        // loop until crain searches length of board
        while (row < rowLen) {
            // case when crain can pick element
            if (board[row][crain] !== 0) {
                pick = board[row][crain];
                board[row][crain] = 0;
                break;
            }
            // crain searches element along row increases
            row++;
        }
        // treatment for zero element on outlet
        if (outlet.length === 0) {
            outlet.push(pick);
        } else {
            // consider crain CANNOT pick the element
            if (pick) {
                // case when the last element on outlet is equal to the element which crain picks
                if (outlet[outlet.length - 1] === pick) {
                    outlet.pop();
                    pang += 2;
                }
                // not equal case
                else {
                    outlet.push(pick);
                }
            }
        }
    }
    return pang;
}
