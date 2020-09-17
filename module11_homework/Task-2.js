function funcPrimeNumberOrNot (number) {
    if(number <= 1000 && number != 0 && number != 1) {
        number % 2 != 0 && number % 3 != 0 || number == 3 || number == 2 ? console.log("Число простое") : console.log("Число непростое");
    } else if (number == 0 || number == 1) {
        console.log("0 или 1 не являются ни простыми, ни составными числами");
    }
    else {
        console.log("Данные неверны");
    }
}

funcPrimeNumberOrNot(0);