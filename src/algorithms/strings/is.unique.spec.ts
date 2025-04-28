/**
 * is Unique with Map or array[128] booleans once for every character ascii
 * both with access O(1)
 * Time Complexity: Average O(n)
 * Extra Space: O(n)
 * @param str 
 */
const isUniqueWithMap = (str: string): boolean => {
  const map: any = {};
  let isUnique = true;
  for (let char of str) {
    if(!map[char]){
        map[char] = char;
    }else{
      isUnique = false;
      break;
    }
  }
  return isUnique;
}
/**
 * is Unique with Sort
 * Time Complexity:  O(n.Log(n))
 * Extra Space: O(n)
 * @param str 
 */
const isUniqueWitSort = (str: string): boolean => {
  const vecStr = Array.from(str);
  vecStr.sort();
  let isUnique = true;
  let beforeStr: string = '';
  for (let char of vecStr) {
    if (beforeStr !== char) {
      beforeStr = char;
    } else {
      isUnique = false;
      break;
    }
  }
  return isUnique;
}
describe('Implement an algorithm to determine if a string has all unique characters.', () => {
  it('check isUniqueWithMap characters in string', () => {
    expect(isUniqueWithMap('abcdefghijklmnopqrstuvwxyz1234567890')).toBeTruthy();
    expect(isUniqueWithMap('abcd')).toBeTruthy();
    expect(isUniqueWithMap('I am going to repeat strings')).toBeFalsy();
  });
  it('check isUniqueWithMap characters in string', () => {
    expect(isUniqueWitSort('abcdefghijklmnopqrstuvwxyz1234567890')).toBeTruthy();
    expect(isUniqueWitSort('abcd')).toBeTruthy();
    expect(isUniqueWitSort('I am going to repeat strings')).toBeFalsy();
  });
});
