function funcIntervalNumbers (number,number2) {
    number -= 1;
    funcPlusOne = () => console.log(number += 1);
    const intervalId = setInterval(funcPlusOne,1000);
    setTimeout(clearInterval,(number2-number)*1000,intervalId);
}

funcIntervalNumbers(4,9);

// Решение верное, но не совсем оптимальное, т.к. у вас не всегда будет возможность вычислить, сколько времени займет выполнение интервала. Лучше создать переменную-счетчик, на которую вы будете ориентироваться и будете завершать интервал только после того, как было выведено последнее число. Например так:


function logNumbers(begin, end) {
  let current = begin;

  let timerId = setInterval(function() {
    console.log(current);
    if (current == end) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
}

logNumbers(5, 15);
