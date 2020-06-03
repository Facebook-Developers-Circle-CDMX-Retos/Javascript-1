const findNumber = function (number) {
    //aqui escribiras tu codigo
    if (number===2) return true
    if (number===1 || number%2 ===0 ) return false;
    count = 3;
    while (count<number){ if (number%count ===0) return false; count+=2 }
    return true
}; 

module.exports = findNumber;
