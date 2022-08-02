function solution(clothes) {
    const hashClothes = {};
    let keyArr, clothesCat, singleClothes;

    const genComb = (arr) => {
        const numSet = arr.slice();
        const calcBiNum = (decNum) => {
            let biNum = String(decNum % 2);
            while (decNum > 1) {
                decNum >>= 1;
                biNum = String(decNum & 1) + biNum;
            }
            if (biNum.length !== numSet.length) {
                while (biNum.length !== numSet.length) {
                    biNum = String(0) + biNum;
                }
            }
            return biNum;
        };

        const powerSetArr = [];
        const setLen = numSet.length;
        for (let i = 0; i < 2 ** setLen; i++) {
            powerSetArr.push([]);
            const biNum = calcBiNum(i);
            for (let j = 0; j < biNum.length; j++) {
                if (biNum[j] === '1') {
                    powerSetArr[i].push(numSet[j]);
                }
            }
        }
        return powerSetArr.slice(1);
    };

    clothes.forEach((elem, idx) => {
        singleClothes = elem[0];
        clothesCat = elem[1];
        keyArr = Object.keys(hashClothes);
        if (keyArr.indexOf(clothesCat) < 0) {
            hashClothes[clothesCat] = [];
        }

        hashClothes[clothesCat].push(singleClothes);
    });

    let combination = 1;
    keyArr.forEach((key, idx) => {
        combination *= hashClothes[key].length + 1;
    });

    return combination - 1;

    //     const clothesComb = genComb(keyArr)

    //     let combination = 0;
    //     let combCase;
    //     clothesComb.forEach((elem1, idx) => {
    //         combCase = 1;
    //         elem1.forEach((elem2, idx) => {
    //             combCase *= hashClothes[elem2].length;
    //         });
    //         combination += combCase;
    //     });

    //     return combination
}
