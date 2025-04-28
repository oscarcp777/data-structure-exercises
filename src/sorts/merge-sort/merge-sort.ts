export const mergeSort = (values) => {
    if(values.length < 2){
        return values;
    }
    const middle = Math.floor(values.length/2);
    const left = values.slice(0,middle);
    const right = values.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}
const merge = (left, right) =>{
    const results = [];
    while (left.length && right.length) {
        results.push(left[0] <= right[0]
                    ? left.shift()
                    : right.shift())
    }
    return [...results, ...left, ...right];
}
