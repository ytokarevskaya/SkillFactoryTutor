function funcPrimeNumberOrNot (number) {
    if(number <= 1000) {
        number % 2 != 0 && number % 3 != 0 || number >= -3 && number <= 3 ? console.log("Число простое") : console.log("Число непростое");
    } else {
        console.log("Данные неверны");
    }
}