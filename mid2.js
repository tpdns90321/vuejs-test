let arr = new Array();

for (let i = 0; i < 100; i++) {
	arr[i] = Math.floor(Math.random() * 99 + 1);
}

arr.sort((a,b) => b - a);
for (let i = 0; i < 100; i++) {
	console.log(arr[i]);
}
