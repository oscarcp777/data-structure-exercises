export const quickSort = (items: Array<number>): Array<number> => {
    if(items.length < 2){
        return items
    }
    const pivot = items[items.length-1]
    const left: Array<number> = []
    const right: Array<number> = []
    for (let index = 0; index < items.length -1 ; index++) {
        items[index] < pivot
        ? left.push(items[index])
        : right.push(items[index])
        
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}