/**
 * 
 *     HACKERRANK
 * 
 * A string is said to be a special palindromic string if either of two conditions is met:
 * All of the characters are the same, e.g. aaa.
 * All characters except the middle one are the same, e.g. aadaa.
 * @param {*} n lenght string
 * @param {*} s string
 * mnonopoo = [m n o n o p o o non ono opo oo]
 * aaaa a a a a aa aa aa  aaa aaa aaaa
 * 4 + 3 + 2 + 1 
 */

function isSameChar(str) {
    return str.match(/^(.)\1*$/)
}

function isSameCharExceptMiddle(str) {
    let match = false;
    let size = str.length;
    if ((size > 2) && (size % 2 === 1)) {
        const middle = Math.floor(size / 2);
        const left = str.substring(0, middle);
        const right = str.substring(middle + 1, size);
        if (isSameChar(left) && isSameChar(right) && left === right) {
            match = true;
        }
    }
    return match;
}

function substrCount(n, s) {
    const vecComb = [];
    let cantChar = 2;
    for (let index = n - 1; index >= 0; index--) {
        for (let j = 0; j < index; j++) {
            const strComb = s.substring(j, j + cantChar);
            if (isSameChar(strComb) || isSameCharExceptMiddle(strComb)) {
                vecComb.push(strComb);
            }
        }
        cantChar++;
    }
    return vecComb.length + n;
}

function substrCount2(n, s) {
    const countByChar = [];
    const vecChar = Array.from(s);
    let counterPal = 0;
    let char = '';
    let count = 0;
    for (let index = 0; index < vecChar.length; index++) {
        if (char === vecChar[index]) {
            count++;
        } else {
            if (char !== '') {
                countByChar.push({char,count})
            }
            char = vecChar[index];
            count = 1;
        }
        if (index + 1 === vecChar.length) {
            countByChar.push({char,count})
        }
    }
    for (let index = 0; index < countByChar.length; index++) {
        const element = countByChar[index];
        counterPal += ((element.count * (element.count + 1)) / 2);
    }
    for (let index = 1; index < countByChar.length - 1; index++) {
        const element = countByChar[index];
        const previus = countByChar[index - 1];
        const next = countByChar[index + 1];
        if (element.count === 1 && (previus.char === next.char)) {
            counterPal += previus.count > next.count ? next.count : previus.count;
        }
    }
    return counterPal;
}
describe('Given a string, determine how many special palindromic substrings can be formed from it.', () => {
    it('check if is special palindromic O(n^2)', () => {
        expect(substrCount(4, 'aaaa')).toEqual(10);
        expect(substrCount(8, 'mnonopoo')).toEqual(12);
        expect(substrCount(5, 'asasd')).toEqual(7);
        expect(substrCount(7, 'abcbaba')).toEqual(10);
    });
    it('check if is special palindromic O(n)', () => {
        expect(substrCount2(4, 'aaaa')).toEqual(10);
        expect(substrCount2(8, 'aaaabbbb')).toEqual(20);
        expect(substrCount2(8, 'mnonopoo')).toEqual(12);
        expect(substrCount2(5, 'asasd')).toEqual(7);
        expect(substrCount2(7, 'abcbaba')).toEqual(10);
        expect(substrCount2(1017, 'aabcbbbbbcbbabbcbacccbaacbaabcaabccabccabbcbcccacccbbbbcabccbaacacbbbcbacaccbbbabccbaabbbbbbcbcbbacaacccacaaacaccabccbcccbcaababbaccccbacbaabbccbabaaaccccaaacbaaabcaabccbabccbaacbbcacccbbcbccbcaababcccbacacabacbabccbcacbaccabbcaaaacacabbacaccabbbcbaabbbacaaaaacbbcbbcbccbcaccacbbcacbcabaacccbcacccaabccbcaabaaabcbbaaaccbbaacbacaacabcbcabcabcaabcccaacbcaccaacaccababaaacbccbacbbcaacbcabcabaccacbbbaaabababbaacbbbabbbacbcaabcbbcbcaccacbacbbcaaacbbbbaccbaaaccbabbccabbbbccabaacabaababcccaaaaabaacacbbaacaacbbaccababcbababcabacaacaaababbbbcbcaaacaabacbbabbcbcacbbabcbaacaabaaccabbcbbccbaccbcabcaaabababaaccbcacabbccaaabcbacabcbbcacbacbbbaaacbccacbbcbcccbabaacaabbbbacaaaccaabacccaaacabbbbbcabacbabbaaabaaccaaaaacacbbcaaacaacacabcabbcbccbacaaacacbcacbaaaaabaaccccbacbabbabacbaccccaaababcbacabacabbbcbbcacabbbccccaaccaaacabbbacabbccacaabaabbbaaacccaaccccbcbabbbbcacbaaabcccbcbabacacbcbbbcbaabcbcaccbabbcabaaaacbcabcabbcacbcacccabcbacbcacaaacaaaabcaabacabbabacbbaaacbababbcbaaccbcbacaabbbabacccbbbccaaccacbcbbbcacbcbbbabbcca'))
            .toEqual(1750);
    });
});