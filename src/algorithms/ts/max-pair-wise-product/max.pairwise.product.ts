`
Maximum Pairwise Product Problem

Find the maximum product of two distinct num-bers in a sequence of non-negative integers.

Input: A sequence of non-negativeintegers.
Output: The maximum value that can be obtained by multiplying 
        two different elements from the sequence.


        5    6   2   7   4
        ------------------
    5  |   |30 | 10| 35| 20|
        ------------------ 
    6  |30 |   | 12| 42| 24|
        ------------------
    2  |10 |12 |   | 14|  8|
        ------------------
    7  |35 |42 | 14|   | 28|
        ------------------
    4  |20 |24 |  8| 28|   |
        ------------------

Given a sequence of non-negative integers a 1 , . . . , a n , 
compute max a i,j 1≤i,j≤n
Note that i and j should be different, though it may be the case that a i = a j.
Input format. The first line contains an integer n. The next line contains
n non-negative integers a 1 , . . . , a n (separated by spaces).
Output format. The maximum pairwise product.

Constraints. 2 ≤ n ≤ 2 · 10 5 ; 0 ≤ a 1 , . . . , a n ≤ 2 · 10 5 .

Sample 1.
Input:  3
        1 2 3
Output:
        6
Sample 2.
Input:  10
        7 5 14 2 8 8 10 1 2 3
Output:140

`
export const getMaximumPairwiseProduct = (list) => {
    let max = Number.NEGATIVE_INFINITY;
    let maxTwo = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < list.length; i++) {
        if(max<=list[i]){
            maxTwo = max;
            max = list[i];
        }else{
            if(maxTwo <=list[i] ){
                maxTwo = list[i];
            }
        }
    }
    return max*maxTwo;
}



