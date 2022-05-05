const repeat = (str,t) => {
    let result = '';
    let temp = 0;

    if (t <= 0) {
        return ''
    }

    while (temp < t) {
        result += str;
        temp += 1
    }
    return result
}