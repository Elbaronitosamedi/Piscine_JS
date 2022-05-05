const slice = (original, init, limiter) => {

    let limit = 0;
    if(!limiter) {
        limit = original.length
    } else {
        limit = limiter
    }
    if (init < 0) {
        init = original.length + init
    }
    if (limit < 0) {
        limit = original.length + limit
    }

    if (typeof original === 'string') {
       
        let result = ''
        for (let temp = init; temp < limit; temp++) {
            result+=original[temp]
        }
        return result
    } else {
        let result = []
        for (let temp = init; temp < limit; temp++) {
            result.push(original[temp])
        }
        return result
    }
}
