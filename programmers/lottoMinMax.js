// problems
// 1. cannot find entire element using forEach method -> not resolved yet
// 2. Not consider relation between winCount and rank

function solution(lottos, win_nums) {
    // shallow copy for maintain immutability
    let lottosCopy = lottos.slice().sort((e1, e2) => {
        return e1 - e2;
    });
    const winNumsCopy = win_nums.slice().sort((e1, e2) => {
        return e1 - e2;
    });

    // variables for count win, rank, number of zeros
    let winCount = 0;
    let zeroCount = 0;
    let rank = 6;

    // count number of zero
    lottosCopy.forEach((elem, idx) => {
        if (elem === 0) {
            zeroCount++;
        }
    });

    // early return when the case which contain all zero component
    if (zeroCount === 6) {
        return [1, 6];
    }

    // n^2 time complexity
    for (elem1 of winNumsCopy) {
        for (elem2 of lottosCopy) {
            if (elem1 === elem2) {
                // find index of single win number
                const idx = lottosCopy.indexOf(elem1);
                // exclude win number on lottosCopy
                lottosCopy = lottosCopy
                    .slice(0, idx)
                    .concat(lottosCopy.slice(idx + 1, lottosCopy.length));
                // rank up when count of win is bigger than 0
                if (winCount > 0) {
                    rank--;
                }
                winCount++;
            }
        }
    }

    // number of zero means rank up possibility(max rank)
    return [rank - zeroCount, rank];
}
