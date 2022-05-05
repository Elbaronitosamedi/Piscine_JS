const sums = (num) => {

    const lapartiedure =(num) => {
        let Arr2= [];
        let arrindex = 0
        for (let i = 1; i< Math.pow(10,num);i++) {
            let n = Array.from(i.toString())
            n = n.map((i) => Number(i))
            let check= true
    
            for(let t=1; t<= n.length; t++) {
                if(n[t-1] > n[t] || n[t] == 1 || n[0] == 1 || n.reduce(reducer) >= num) {
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
    
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let result =[];
    let indexresult =0;
    let Arr2= lapartiedure(num)


    for(let t=num; t>0; t--){

        let Arr = Array(t).fill(1) 
        if (Arr.reduce(reducer) == num) {
            result[indexresult] = Arr
            indexresult++
        } 
            
        for(let n =0; n<= Arr2.length; n++) {
            Arr = Arr.concat(Arr2[n])

            if (Arr.reduce(reducer) == num) {
                result[indexresult] = Arr
                indexresult++
            } 
        }
            
    }
        
             
    return result

}


console.log(sums(7))

