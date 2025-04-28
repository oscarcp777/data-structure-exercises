const merge = (left: Array <number> , right: Array <number> ): Array <number> => {
    const results: Array<any> = []
    while (left.length && right.length) {
        results.push(left[0] <= right[0]
            ? left.shift()
            : right.shift())
    }
    return [...results,...left, ...right]
}
export const mergeSort = (list: Array <number> ): Array <number> => {
    if(list.length < 2){
        return list
    }
    const middle = Math.floor(list.length / 2)
    const left = list.slice(0, middle)
    const right = list.slice(middle)
    return merge(mergeSort(left), mergeSort(right));
}