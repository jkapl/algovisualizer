const quickSort = (array, intermediateObj, iterations) => {
  console.log(intermediateObj)
  // console.log(iterations)
  // intermediateObj[iterations[iterations.length-1]] = array;
  iterations.push(iterations[iterations.length-1]+1);

  if (array.length <= 1) {
    return array;
  }

  let left = [];
  let right = [];
  let pivot = array[array.length - 1];
  console.log(`pivot: ${pivot}`)

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] <= pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  intermediateObj[iterations[iterations.length-1]] = [...left, pivot, ...right];
  return [...quickSort(left, intermediateObj, iterations), pivot, ...quickSort(right, intermediateObj, iterations)]
}

export default quickSort;