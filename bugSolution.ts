function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number | string, b: number | string): number {
  const numA = typeof a === 'string' ? parseFloat(a) : a;
  const numB = typeof b === 'string' ? parseFloat(b) : b;
  if(isNaN(numA) || isNaN(numB)) {
    return 0; // Or throw an error
  }
  return numA + numB;
}

let result = addSafe("1", 2); // Returns 3
console.log(result);

result = addSafe("a", 2); //Returns 0 because 'a' cannot be converted to a number
console.log(result); 