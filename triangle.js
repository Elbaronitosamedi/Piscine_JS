const triangle = (str, depth) => {
    let result ='';

    for(let i = 1; i < depth; i++) {
        result += repeat(str,i) +"\n";
    }
    result += repeat(str,depth);
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