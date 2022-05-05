const RNA = (str) => {
    let result = '';

    if(str =='') {
        return str
    }

    for(let temp=0; temp <= str.length; temp++) {

        switch (str[temp]) {

            case "G":
                result += "C";
                break
            case "C":
                result += "G";
                break
            case "T":
                result += "A";
                break
            case "A":
                result += "U";
                break
            
        }
    }
    return result
}

const DNA = (str) => {
    let result = '';

    if(str =='') {
        return str
    }

    for(let temp=0; temp <= str.length; temp++) {

        switch (str[temp]) {

            case "C":
                result += "G";
                break
            case "G":
                result += "C";
                break
            case "A":
                result += "T";
                break
            case "U":
                result += "A";
                break
            
        }
    }
    return result
}