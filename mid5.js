let arr = new Array();

for (let i = 0; i < 100; i++) {
	arr[i] = Math.floor(Math.random() * 99 + 1);
}

let sum = 0;
arr.forEach((target) => { sum = target % 2 == 0 ? sum + target : sum; });
console.log(sum);
