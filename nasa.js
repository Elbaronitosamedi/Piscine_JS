const nasa = (N) => {
    let result ='';

    for (let temp = 1; temp <= N; temp++) {
        if (temp % 3 == 0 && temp % 5 == 0) {
            result += "NASA"
        } else if (temp % 3 == 0) {
            result += "NA"
        } else if (temp % 5 == 0) {
            result += "SA"
        } else {
            result += temp
        }
        result += " "
    }
    result = result.slice(0, -1)
    return result
}