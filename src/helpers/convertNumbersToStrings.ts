export const convertNumbersToStrings = (numberArray: number[]) => {
  let stringArray = []
  for (let i = 0; i < numberArray.length; i++) {
    let string = numberArray[i].toString()
    stringArray.push(string)
  }
  return stringArray
}
