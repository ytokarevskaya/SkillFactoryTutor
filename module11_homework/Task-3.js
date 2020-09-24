function funcSumOfFunctions (number) {
    sum = (number => number + number);
    return console.log(sum(number));
}

// Решение неверное, скорее всего, не совсем верно поняли задание. Нужно создать функцию, которая возвращает другую функцию, причем каждая из этих функций (и внутренняя и внешняя) принимают в качестве аргумента числа, это могут быть 2 разных числа. Вторая функция возвращает сумму этих чисел. Правильный вариант решения ниже:

function getSumFunction(a) {
  return function(b) {
  	return a+b;
  }
}

const sumFunction = getSumFunction(2);

const sum = sumFunction(3);

console.log(sum); // 5
