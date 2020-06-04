const findNumber = function (number) {
    if(number == 1){
        return false;
    } else if (number == 2 || number == 3){
        return true;
    } else {
        return  Number.isInteger(Math.abs((number+1)/6)) || Number.isInteger(Math.abs((number-1)/6));
    }
}; 

module.exports = findNumber;
