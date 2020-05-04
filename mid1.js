let arr = new Array();
let sum = 0;

for (let i = 0; i < 100; i++) {
	arr[i] = Math.floor(Math.random() * 99 + 1);
	sum += arr[i];
}

console.log((sum / 100).toFixed(1));
