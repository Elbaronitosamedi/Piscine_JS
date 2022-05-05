const chunk = (Arr,len) => {
    let result = []
    let temp = []

    for (let index = 0; index < Arr.length;index++) {
        temp.push(Arr[index])
        if (temp.length == len) {
            result.push(temp)
            temp = []
            continue
        }
    }
    if (Arr.length%len !==0 ) {
        result.push(temp)
    }
    return result
}