function sum(...nums: number[]) {
  let total = 0;
  for (const num of nums) {
    total += num
  }
  return total
}

console.log(sum(20, 30))
console.log(sum(20, 30, 40))
console.log(sum(20, 30, 40, 60))