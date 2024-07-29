// first solution
export const isSameSquared = (first: number[], second: number[]) => {
  if (first.length !== second.length) {
    return false;
  }
  for (let i = 0; i < first.length; i++) {
    console.log(second);

    let correctIndex = second.indexOf(first[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    second.splice(correctIndex, 1);
  }
  return true;
};
