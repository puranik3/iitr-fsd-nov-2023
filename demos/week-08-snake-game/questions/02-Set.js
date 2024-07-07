const fruits = new Set();

fruits.add('Apples');
fruits.add('Bananas');
fruits.add('Apples');

console.log(fruits.values());
console.log(fruits.size); // 2 and not 3