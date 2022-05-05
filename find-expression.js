const findExpression = (number) => {
    if(number%2 != 0) {
        return undefined
    }

    let resultstr ="1 ";
    let resultint = 1;
    let twocount =0;
    while( resultint%2 !=0 || (number-resultint)%4 !=0 ) {
        resultint = 2*resultint
        twocount++
    }
    let fourcount =0;
    while( resultint < number) {
        resultint = resultint +4
        fourcount++
    }
    resultstr += repeat(mul2,twocount) + repeat(add4,fourcount)
    resultstr = resultstr.slice(0, -1)
    return resultstr
}


const repeat = (str,t) => {
    let result = '';
    let temp = 0;

    if (t <= 0) {
        return ''
    }

    while (temp < t) {
        result += str +" ";
        temp += 1
    }
    return result
}

