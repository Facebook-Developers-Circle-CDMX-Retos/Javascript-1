const findNumber = function (number) {
    //aqui escribiras tu codigo
    var esprimo = false
    var count=0
        for(var i=1;i<=number;i++){
            if(number % i === 0) count++
        }

    return count == 2 ? true:false
};  

module.exports = findNumber;
