const multiply = (a,b) => {
    let result = 0;
    let temp = 0;
    let isneg =false;
    if (sameSign(a,b) == false) {
        isneg = true
    } 
    a = Math.abs(a)
    b = Math.abs(b)

    while(temp<b) {
        result+=a
        temp++
    }

    if (isneg) {
        return -Math.abs(result)
    }

    return result
}

const divide = (a,b) => {


    if (b== 0) {
        return Number.POSITIVE_INFINITY
    }
    let result = 0; 
    let isneg =false;
    if (sameSign(a,b) == false) {
        isneg = true
    } 
    a = Math.abs(a)
    b = Math.abs(b)

    while (a >= b) {
        a -= b
        result++
    }

    if (isneg) {
        return -Math.abs(result)
    }

    return result
}

const modulo = (a,b) => {

    if (b == 0) {
        return Number.POSITIVE_INFINITY
    }
    let isneg = false;
    if (a < 0) {
        isneg = true
    }
    


    a = Math.abs(a)
    b = Math.abs(b)
    var total = a
    var temp = 0
    var result = 0
    
    while (a >= b) {
        a -= b
        temp++ 
    }

    result = total - multiply(temp, b)

    if (isneg) {
        return -Math.abs(result)
    }
    
    return result
}






function sameSign(a,b) {
    if ( a < 0 && b < 0) {
        return true
    } else if ( a > 0 && b > 0) {
        return true
    } else if ( a == 0 && b == 0) {
        return true
    }
    return false
}