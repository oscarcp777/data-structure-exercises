const checkPermutations = (firstStr: string, secondStr: string,): boolean => {

    if(firstStr.length !== secondStr.length) return false;
    
    const vecFirst = Array.from(firstStr);
    const vecSecond = Array.from(secondStr);
    vecFirst.sort();
    vecSecond.sort();
    return vecFirst.join('') === vecSecond.join('');
}
describe('Checking if two strings are permutations of each other', () => {
    it('check isUniqueWithMap characters in string', () => {
      expect(checkPermutations('123456','654321')).toBeTruthy();
      expect(checkPermutations('abcdertyui','iuytredcba')).toBeTruthy();
      expect(checkPermutations('I am going','to repeat strings')).toBeFalsy();
    });

  });