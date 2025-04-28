export const quickSort = (values) => {
    if(values.length < 2){
        return values;
    }
    const pivot = values[values.length-1];
    const left = [];
    const right = [];
    for (let i = 0; i < values.length - 1; i++) {
        values[i] < pivot
         ? left.push(values[i])
         : right.push(values[i]);
        
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

