const findNumber = function (number) {
    var isPrim = false;
    if (number == 2) {
        return true;
    }
    for (let index = 2; index < number; index++) {
        if (isPrim % index == 0) {
            return true
        }
    }
    return isPrim;
};

module.exports = findNumber;