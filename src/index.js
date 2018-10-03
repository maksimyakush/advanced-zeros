module.exports = function getZerosCount(number, base) {
  let numbersArr = [];
  let powersOfNumbersArr = [];
  let numbersCounter = 2;
  let isTrue = true;
  while (isTrue) {
    let powersCounter = 0;
    while (base % numbersCounter == 0) {
      base = base / numbersCounter;
      powersCounter++;
      if (base == 1) isTrue = !isTrue;
    }
    [numbersArr, powersOfNumbersArr] = [[...numbersArr, numbersCounter], [...powersOfNumbersArr, powersCounter]];
    ++numbersCounter;
  }
  let position = numbersArr.length - 1;
  for (let i = 0; i < numbersArr.length - 1; i++) {
    if (Math.pow(numbersArr[i], powersOfNumbersArr[i]) > Math.pow(numbersArr[position], powersOfNumbersArr[position] + 1)) position = i;
  }
  let j = 1;
  let result = 0;
  while (number / Math.pow(numbersArr[position], j) > 1) {
    result = result + Math.floor(number / Math.pow(numbersArr[position], j));
    ++j;
  }
  return result / powersOfNumbersArr[position];
};
