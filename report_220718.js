// problems
// 1. unfamiliar usage of Javascript object

function solution(id_list, report, k) {
    const res = {};
    const objID = {};
    // set user information to object
    id_list.forEach((elem, idx) => {
        objID[elem] = [0];
        res[elem] = 0;
    });
    // using 'set' type, remove duplicate report
    const removeDupReport = new Set(report);
    for (elem of removeDupReport) {
        let a = elem.split(' ');
        // add reported user
        objID[a[0]].push(a[1]);
        // count number of reports
        objID[a[1]][0]++;
    }
    const checkArr = Object.entries(objID);
    for (elem1 of checkArr) {
        if (elem1[1][0] >= k) {
            for (elem2 of checkArr) {
                // case when alarm exists to reported user
                if (elem2[1].includes(elem1[0])) {
                    res[elem2[0]]++;
                }
            }
        }
    }
    return Object.values(res);
}
