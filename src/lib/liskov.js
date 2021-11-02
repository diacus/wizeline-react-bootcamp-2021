function successor(n) {
  return n + 1;
}

const add = (a) => (b) => a + b;
const data = [1,2,3];

const results = [
  {
    case: 'add3',
    data: data.map(add(3)),
  },
  {
    case: 'add100',
    data: data.map(add(100)),
  },
  {
    case: 'successor',
    data: data.map(successor),
  },
  {
    case: 'arrow',
    data: data.map((n) => n * n),
  },
];

console.log('data:', data);
console.table(results);
