// let arr = [];

// let evenCount = [],
//     oddCount = [],
//     nullCount = [];

// for (let index = 0; index < arr.length; index++) {
//     if(typeof(arr[index]) == "number") {
//         arr[index] % 2 == 0 ? evenCount.push(arr[index]) : oddCount.push(arr[index]);
//     } else if(arr[index] == null) {
//         nullCount.push(arr[index]);
//     }
// }

// console.log(evenCount.length,oddCount.length,nullCount.length);

// Код не решает задачу полностью, есть несколько замечаний:
// 1. Нет проверки на значения NaN. Если в массиве будет присутствовать элемент NaN, он будет учтен как нечетное число, что неверно.
// 2. По заданию нули должны учитываться отдельно, сейчас они считаются как четные числа. Вместо нулей отдельно считаются значения null, которые по заданию должны игнорироваться при подсчёте
// Верный вариант решения ниже:

const arr = [0, 1, 2, 3, 4, 5, "45", null, "str", false, NaN]

let even = 0, 
    odd = 0,
    zero = 0;

	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
			if (arr[i] === 0) {
				zero += 1;
			} else if (arr[i] % 2 === 0) {
				even += 1;
			} else {
				odd += 1;
			}
		}
	}

console.log('четных элементов: ', even)
console.log('нечетных элементов: ', odd)
console.log('нулей: ', zero)
