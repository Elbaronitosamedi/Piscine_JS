const reverse = (original) => {
    if (typeof original === 'string') {
       
        let result = ''
        for (let temp = (original.length -1); temp >= 0; temp--) {
            result+=original[temp]
        }

        return result
    } else {
        let result = []
        for (let temp = original.length; temp >= 0; temp--) {
            result.push(original[temp])
        }
        result.shift()
        return result
    }
}