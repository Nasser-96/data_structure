// first solution
export const isSameSquared = (first: number[], second: number[]) => {
  if (first.length !== second.length) {
    return false;
  }
  for (let i = 0; i < first.length; i++) {
    let correctIndex = second.indexOf(first[i] ** 2); // indexOf consider as a loop because it is iterating inside the array to find the index
    if (correctIndex === -1) {
      return false;
    }
    second.splice(correctIndex, 1);
  }
  return true;
};

// First Note here is the two loops are better than nested loops 

// second solution
export function isSameSquaredSecond(first: number[], second: number[]){
  if (first.length !== second.length) {
    return false;
  }
  const frequencyCounter1:{[key:number]:number} = {}
  const frequencyCounter2:{[key:number]:number} = {}

  for(const val of first){
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for(const val of second){
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }
  for(const key in frequencyCounter1){
    if(!((parseInt(key) ** 2) in frequencyCounter2)) {
      return false
    }
    if(frequencyCounter2[parseInt(key) ** 2] !== frequencyCounter1[key]){
      return false
    }
  }
  return true
}