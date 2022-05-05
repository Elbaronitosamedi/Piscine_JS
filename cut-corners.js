const round = (num) => {
    let isneg =false;

    if (num < 0) {
        isneg =true
    }
    num = Math.abs(num)

    num = (num *2)
    num -= num%1

    if (num % 2 == 0) {
        num = num/2
    } else {
        num = (num/2)+0.5
    }

    if (isneg == true) {
        num = -num
    }
    return num
}

const ceil = (num) => {

    if (!num) {
        return 0
    }

    let isneg =false;

    if (num < 0) {
        isneg =true
    }
    num = Math.abs(num)

    if (num % 1 == 0) {
        if (isneg == true) {
            return -num
        }
        return num
    }

    num -= num%1

    if (isneg == true) {
        return -num
    } else {
        return num + 1
    }

}


const floor = (num) => {

    if (!num) {
        return 0
    }
    
    let isneg =false;

    if (num < 0) {
        isneg =true
    }
    num = Math.abs(num)

    if (num % 1 == 0) {
        if (isneg == true) {
            return -num
        }
        return num
    }

    num = num/1
    num -= num%1

    if (isneg == true) {
        return -(num+1)
    } else {
        return num
    }

}

const trunc = (num) => {

    if (!num) {
        return 0
    }
    
    let isneg =false;

    if (num < 0) {
        isneg =true
    }
    num = Math.abs(num)

    if (num % 1 == 0) {
        if (isneg == true) {
            return -num
        }
        return num
    }

    num = num/1
    num -= num%1

    if (isneg == true) {
        return -(num)
    } else {
        return num
    }

}

