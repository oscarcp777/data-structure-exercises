
const getPosY = (matrix: Array<Array<number>>, x:number, y:number) => {
    let posY = y
    while (posY < matrix.length) {
        posY++
        let down =  matrix[posY] ? matrix[posY][x] : -1
        if(down !== 0){
            posY--
            break;
        }
    }
    return posY
}
const getPosX= (matrix: Array<Array<number>>, x:number, y:number) => {
    let posX = x
    while (posX < matrix.length) {
        posX++
        let left =  matrix[y][posX]
        if(left !== 0){
            posX--
            break;
        }
    }
    return posX
}
const alreadyCheck = (x:number, y:number, finded: Array<Array<number>>) => {
  return finded.some((triangle : Array<number> ) => {
       return ((y >= triangle[0] && x >= triangle[1]) && ( y <= triangle[2] && x <= triangle[3]))
   });
}
export const findAllRectanglesInMatrix = (matrix: Array<Array<number>>) => {

    const finded = []
    for (let y = 0; y < matrix.length; y++) {
        const row = matrix[y];
        for (let x = 0; x < row.length; x++) {
            let left = row[x];
            if(left === 0 && !alreadyCheck(x,y,finded)){
                const list = [y,x]
                const posY = getPosY(matrix, x, y)   
                x = getPosX(matrix, x, y)   
                list.push(posY)
                list.push(x)
                finded.push(list)
            }
        }
    }
    return finded
}