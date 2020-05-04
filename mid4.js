function sum(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}

	return sum;
}

function test_sum(callback) {
	let arr = new Array();
	for (let i = 0; i < 5; i++) {
		arr[i] = Math.ceil(Math.random() * 10);
	}

	console.log(arr);
	console.log(callback(arr));
}

test_sum(sum);
test_sum(sum);
test_sum(sum);
test_sum(sum);
test_sum(sum);

