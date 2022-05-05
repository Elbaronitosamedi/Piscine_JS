  
let Arr = []
const indexOf = (Arr, str, index ) => {
    let start = 0;

    if (!index) {
         start = 0;
    } else {
        start = index
    }

    for (let temp = start; temp < Arr.length; temp++) {
        if (Arr[temp] == str) {
            return temp
        }
    }
    return -1
}

const lastIndexOf = (Arr, str, index) => {
    var start = 0;

    if ((!index) || (index >= Arr.length)) {
         start = Arr.length-1;
    } else {
        start = index
    }

    for(let temp = start; temp >= 0; temp--) {
        if (Arr[temp] == str) {
            return temp
        }
    }

    return -1
}


const includes = (Arr, str) => {

    for(let temp = 0; temp < Arr.length; temp++) {
        if  (Arr[temp] == str) {
            return true
        }
    }

    return false
}