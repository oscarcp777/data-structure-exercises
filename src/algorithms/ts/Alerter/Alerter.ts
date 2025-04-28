
const getAverage = ( 
  index: number,
  inputs: Array <number> ,
  windows: number,
  allowedIncrease: number) =>{
  let average = 0
  let i = index;
  let values = [];
  while (i < windows + index && i < inputs.length && windows + index <= inputs.length) {
    values.push(inputs[i])
    average += inputs[i];
    i++
  }
  i = index;
  let max = 0
  average = average/windows
  while (i < windows + index && i < inputs.length && windows + index <= inputs.length) {
    if (inputs[i] > average * allowedIncrease) {
      max = inputs[i] 
    }
    i++
  }
  return {
    value: inputs[index],
    average,
    values,
    max
  }
}
const checkAverages = (
  averages: Array <any> ,
    windows: number,
    index: number) => {
    let result = false;
    let counter = 0
    let i = index - windows + 1;
    const max = averages[index].max;
    while (i < averages.length) {
      const average = averages[i];
      if (max !== 0 && max === average.max) {
        counter++
      }
      i++
    }
    if (counter === windows) {
      result = true
    }
    return result;
  }
export const alerter = (
  inputs: Array <number> ,
  windows: number,
  allowedIncrease: number) => {
  const averages : Array<any> = []
  let result = false
  for (let index = 0; index < inputs.length; index++) {
    const average = getAverage(index, inputs, windows, allowedIncrease)
    if(average.average !== 0){
      averages.push(average);
    }
    if(averages.length >= windows && averages.length > index && checkAverages(averages,windows, index)){
      result = true
      break;
    }
  }
  console.log(averages)
  return result;
}