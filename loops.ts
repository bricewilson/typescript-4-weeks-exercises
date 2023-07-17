let nums: number[] = [3, 8, 2, 19, 45, 2];

let sum: number = 0;
for (const current_number of nums) {
  if (current_number % 2 == 0) {
    sum += current_number;
  }
}

console.log(sum);