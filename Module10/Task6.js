let arr = [],
    newArr = new Set(arr);
arr.length <= newArr.size ? console.log(false) : 
newArr.size == 1 ? console.log(true + "; Все элементы в массиве одинаковые") : console.log(true + "; Не все элементы в массиве одинаковые");
