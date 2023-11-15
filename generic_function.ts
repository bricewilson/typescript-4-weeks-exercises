function getLastElement<T>(arr: Array<T>): T {
  
  let lastIndex = arr.length - 1;

  return arr[lastIndex];
}

let numArray = [2, 4, 6, 8, 10];

console.log(getLastElement<number>(numArray));

let strArray = ['apple', 'orange', 'banana'];

console.log(getLastElement(strArray));