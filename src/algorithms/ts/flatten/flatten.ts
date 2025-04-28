 export const flatten = (array) => {
    return array.reduce((accumulator, current) => {
            return Array.isArray(current) 
                ? accumulator.concat(flatten(current))
                : accumulator.concat(current)
    }, []); 
}
export  const flattenIter = (array) => {
    const flatArray = [];
    while(array.length){
        const current = array.shift();
        if(Array.isArray(current)){
            array = current.concat(array);
        }else{
            flatArray.push(current);
        }
    }
    return flatArray;
}