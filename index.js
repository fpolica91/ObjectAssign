let target = {a: 0, b: 0};
const source = { a: 1, b: [1, 2, 3]};

const returnedTarget = Object.assign(target, source);



target = JSON.stringify(target)
target =JSON.parse(target)
target.a = 5


target.b.splice(0, 2)

console.log(target);
// expected output: Object { a: 5, b: [3] }

console.log(source);
// expected output: Object { a: 1, b: [1, 2, 3] }