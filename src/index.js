const findNumber = function (number) {
    let primeNumberList = [ 2 ];
    // Genramos todos los numeros primos hasta number
    // Nota: Si number es muy grande podemos calcular solo hasta sqrt(number)
    for(let potencialPrimeNumber = 3; potencialPrimeNumber <= number; potencialPrimeNumber++){
        let aux = true;
        // Si entramos en el condicional podemos ejecutar un brak ya que no tiene caso continuar iterando
        // para ello debemos usar algo diferente al forEach ya que este no acepta la sentencia break
        primeNumberList.forEach(primeNumber =>  {
            if(potencialPrimeNumber % primeNumber == 0) {
                aux = false;
                // break;
            }
        });
        if(aux) primeNumberList.push(potencialPrimeNumber);
    }

    // Revisamos si nuestro numero inicial esta en el arreglo primeNumberList
    if(primeNumberList.includes(number)) return true;
    return false;
};

module.exports = findNumber;
