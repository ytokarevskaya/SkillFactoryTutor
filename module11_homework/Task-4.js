function funcIntervalNumbers (number,number2) {
    number -= 1;
    funcPlusOne = () => console.log(number += 1);
    const intervalId = setInterval(funcPlusOne,1000);
    setTimeout(clearInterval,(number2-number)*1000,intervalId);
}

funcIntervalNumbers(4,9);