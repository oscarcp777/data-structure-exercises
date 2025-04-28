
/**
 *   HACKERRANK
 * 
 * Two strings,  and , will be anagrams of one another if they 
 * share all of the same characters and each character has the 
 * same frequency in both strings. Keep a count array for each 
 * string that stores the number of occurrences of each of character. 
 * @param {*} a 
 * @param {*} b 
 */
function counterChar(map,vec,type) {
    vec.forEach(char => {
        if(map[char]){
            map[char][type]++;
        }else {
            map[char] = {
                vecA: type === 'vecA' ? 1 : 0,
                vecB: type === 'vecB' ? 1 : 0
            };
        }
    });
}
function getDelta(map) {
    let counter = 0;
    Object.keys(map).forEach((key)=>{
        counter += Math.abs(map[key].vecA - map[key].vecB);
    });
    return counter;
}
function makinsAnagram(a,b){
    const map = {};
    counterChar(map,Array.from(a),'vecA');
    counterChar(map,Array.from(b),'vecB');
    return getDelta(map);
}
describe('making Anagrams It must return an integer representing the minimum total characters that must be deleted to make the strings anagrams.', () => {
    it('should behave return the number of characters for delete', () => {
        expect(makinsAnagram('accbd','ccabd')).toEqual(0);
        expect(makinsAnagram('abc','cde')).toEqual(4);
        expect(makinsAnagram('showman','woman')).toEqual(2);
        expect(makinsAnagram('fcrxzwscanmligyxyvym','jxwtrhvujlmrpdoqbisbwhmgpmeoke')).toEqual(30);
    });
});