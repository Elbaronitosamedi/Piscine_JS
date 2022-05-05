const get =(src,path) => {
    let result

    let res = path.split(".")
    for (let temp = 0; temp < res.length; temp++) {
        if (temp == 0) {
            result = src[res[temp]]
        } else {
            result = result[res[temp]]
        }

        if (result == undefined) {
            return result
        }

    }

    return result
}
