const findNumber = function (number) {
    //aqui escribiras tu codigo
    const primes=[];
    for(let i=2;i<=number;i++){
        primes.push(i);
    }
    let i=2;
    while(i<=parseInt(Math.sqrt(number))){
        if(primes.includes(i)){
        for(let j=i*2;j<=number;j+=i){
            if(primes.includes(j)){
            primes.splice(primes.findIndex(element=>element==j),1);
        }
        }
    }
    i++;
    }
    return primes.includes(number);
}; 

module.exports = findNumber;