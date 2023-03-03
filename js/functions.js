//Проверка длины строки
function isValidLength(string, maxLength) {
  return string.length <= maxLength;
}

isValidLength('проверяемая строка', 20);


//Проверка на палиндром
function isPalindrome(string) {

  const noSpaceString = string.replaceAll(' ', '');
  const reverseString = noSpaceString.split('').reverse().join('');

  return reverseString.toLowerCase() === noSpaceString.toLowerCase();
}

isPalindrome('Лёша на полке клопа нашёл ');


//Извлечение цифр из строки
function getNumber(string) {

  if (typeof string === 'number'){
    return string;
  }

  const noSpaceString = string.replaceAll(' ', '');
  let totalNumber = '';

  for (let i = 0; i < noSpaceString.length; i++) {
    if (!isNaN(noSpaceString[i])) {
      totalNumber += noSpaceString[i];
    }
  }

  return parseInt(totalNumber, 10);
}

getNumber('2023 год');


//Дополнение строки
function padStartString(string, minLength, symbol) {
  const padLength = minLength - string.length;

  if (string.length >= minLength) {
    return string;
  }

  return symbol.slice(0, padLength % symbol.length) + symbol.repeat(padLength / symbol.length) + string;
}

padStartString('1', 2, '0');
