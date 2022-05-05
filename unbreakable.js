const split = (str, spliter) => {
    if (spliter == "") {
        return Array.from(str)
    }

    let result = [];
    let init = 0;
    let limit = 0;
    
    while (str.search(spliter) !== -1) {
        limit = str.search(spliter)
        str = str.replace(spliter,"§")
        result.push(str.slice(init,limit))
        init = limit+1
    }

    result.push(str.slice(init))
    return result

}

const join = (Arr,spliter) => {
    let result = ""
    for (let temp=0;temp < Arr.length;temp++) {
        if (temp == Arr.length-1) {
            result += Arr[temp]
            break
        }
        result += Arr[temp]+spliter    
    }

    return result
}