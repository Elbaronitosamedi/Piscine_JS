const pyramid = (str, depth) => {
    let result =''
    let tempStr = 1



    for(let i = depth; i > 1; i--) {
        result += repeat(" ",(i*str.length)-str.length)  + repeat(str,tempStr) +"\n";
        tempStr +=2
    }
    result += repeat(str,tempStr);
    return result
}

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