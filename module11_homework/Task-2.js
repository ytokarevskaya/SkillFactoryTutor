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

// Задание выполнено не верно, т.к. простые числа - это те числа, которые делятся без остатка только на 1 и на сами себя. Вы же проверяете деление без остатка только на 2 и на 3. В таком случае, например, 25 распознаётся как простое число, хотя на самом деле оно - составное, т.к. делится без остатка на 5. Верный вариант решения написала ниже:


function definePrime (num) {
	let isPrime, result;
	isPrime = true;

	if (num > 1 && num <= 1000) {
		for (let i = 2; i < num; i++) {
			if(num % i === 0) {
				isPrime = false;
			}
		}
		result = isPrime ? `Число ${num} - простое число` : `Число ${num} - составное число`;
	} else if (num > 1000){
		result = 'Данные неверны';
	}
	return result;
}