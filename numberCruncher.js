function numberCruncher(numbers) {
  var newArr = [];
  for(let i = 0; i < numbers.length; i++) {
    if(i !== 0 && i !== numbers.length - 1) {
      newArr.push(numbers[i - 1] + numbers[i] + numbers[i+1]);
    }

    if(i === 0) {
      newArr.push(0 + numbers[i] + numbers[i+1]);
    }

    if(i === numbers.length - 1) {
      newArr.push(numbers[i - 1] + numbers[i] + 0);
    }
  }
  
  var total = 0;
  
  for(let j = 0; j < newArr.length; j++) {
    if(newArr[j] % 2 !== 0) {
      total += newArr[j];
    }
  }

  return total;
}

console.log(numberCruncher([2 , 5 , 1 , 3])); // 16
console.log(numberCruncher([2, 3, 1, 4, 1, 5, 0, 3])); // 8
console.log(numberCruncher([3, 6, 8, 9, 1, 2, 3])); // 54
