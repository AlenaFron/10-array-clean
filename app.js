function reject(array, removeFn) {
  // Мы оставляем только те элементы, для которых removeFn вернула false
  return array.filter(element => !removeFn(element));
}

// Пример использования:
const numbers = [3, 6, 9, 2];
const isGreaterThanFive = (n) => n > 5;

const result = reject(numbers, isGreaterThanFive);

console.log(result); // [3, 2]