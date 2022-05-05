const lapartiedure =(num) => {
    let Arr2= [];
    let arrindex = 0
    for (let i = 2; i< Math.pow(10,num);i++) {
        let n = Array.from(i.toString())
        n = n.map((i) => Number(i))
        let check= true

        for(let t=1; t<= n.length; t++) {
            if(n[t-1] > n[t] || n[t] == 1 || n[0] == 1) {
                check =false
            }
        }
        if(check) {
            Arr2[arrindex] = n
            arrindex++
        }
    }
    return Arr2
}

console.log(lapartiedure(4))