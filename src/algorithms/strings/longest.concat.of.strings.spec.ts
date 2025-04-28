const sortBySize = (listStr: string[]): string[] => {
    const orderedList =  listStr.slice();
    orderedList.sort((a:string, b: string ) => (
        (a.length > b.length) 
            ? -1 
            : (a.length < b.length) 
                ? 1 
                : 0)
    )
    return orderedList;
}



const getLongestString = (listStr: string[]): string => {
    const sorterList = sortBySize(listStr); // n.Log(n)
    let result: any = sorterList.shift();
    let maxMatch = 0;
    let longest = '';
    while (sorterList.length) {
        const matchs = sorterList.filter((item) => (result.includes(item)));// O(n)
        if(matchs.length > maxMatch) {
            maxMatch = matchs.length;
            longest = result;
        }
        result = sorterList.shift();
    }//O(n*n-1)
    return longest;
}
describe('should Find the longest string which can be constructed from concatenating other strings.', () => {
    it('find string in the list', () => {
      expect(getLongestString(['hello' , 'world', 'foo', 'bar', 'foobar', 'foofoo']))
      .toEqual('foobar');
      expect(getLongestString(['The','he','There','After','ThereAfter']))
      .toEqual('ThereAfter');
      expect(getLongestString(['The','he','re','Af','ter','ThereAfter']))
      .toEqual('ThereAfter');
    });
});