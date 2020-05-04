let persons1 = new Array();

for (let i = 0; i < 3; i++) {
	persons1[i] = {
		name: '홍길동',
		age: i + 16,
	};
}

let persons2 = persons1;
persons1[0].age = 20;

console.log(persons1);
console.log(persons2);
