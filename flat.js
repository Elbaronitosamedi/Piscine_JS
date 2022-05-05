const flat = (arr, deep) => {
    if(!deep) {
        return arr.reduce((acc, val) => acc.concat(val), []);
    } else if (deep == 'Infinity') {
        return flatDeep(arr);
    }
    for(let i = 1; i <= deep; i++) {
        arr = arr.reduce((acc, val) => acc.concat(val), []);
    }
    return arr
}
function flatDeep(arr) {
    return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val) : val), []);
 };