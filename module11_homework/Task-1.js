let funcEvenOddNull = function(arr) {
    let evenCount = [],
    oddCount = [],
    nullCount = [];
for (let index = 0; index < arr.length; index++) {
    if(typeof(arr[index]) == "number") {
        arr[index] % 2 == 0 ? evenCount.push(arr[index]) : oddCount.push(arr[index]);
    } else if(arr[index] == null) {
        nullCount.push(arr[index]);
    }
}
console.log(evenCount.length,oddCount.length,nullCount.length);
};

