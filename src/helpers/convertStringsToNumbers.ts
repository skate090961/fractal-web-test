export const convertStringsToNumbers = (stringArray: string[]) => {
  let numberArray = []
  for (let i = 0; i < stringArray.length; i++) {
    var number = parseInt(stringArray[i], 10)
    if (!isNaN(number)) {
      numberArray.push(number)
    }
  }
  return numberArray
}
