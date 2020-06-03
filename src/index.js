const findNumber = function (number) {
    //aqui escribiras tu codigo
    var esprimo = false
    if(number == 2){
        esprimo = true
    }else if( number == 1){
        esprimo = false
    }else if(number > 1 && number != 2){
        for(var i=2;i<number;i++){
            if(number % i == 0){
                esprimo = false
                break;
            }else{
                esprimo = true
            }
        }
        
    }

    return esprimo
}; 

module.exports = findNumber;
