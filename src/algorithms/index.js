// const iterations = {};
// let count = 0;
const quickSort = (array, intermediateObj, iterations) => {
  // console.log(intermediateObj)
  // intermediateObj[iterations[iterations.length-1]] = array;
  // iterations.push(iterations[iterations.length-1]+1);
  if (array.length <= 1) {
    return array;
  }
  let left = [];
  let right = [];
  let pivot = array[array.length - 1];
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] <= pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  // intermediateObj[iterations[iterations.length-1]] = [...left, pivot, ...right];
  return [...quickSort(left, intermediateObj, iterations), pivot, ...quickSort(right, intermediateObj, iterations)]
}

export const quickSortInPlace = (iterations, count, array, low, high) => {
  iterations[count++] = JSON.stringify(array);
  let pivotIndex;
  if (!low) low = 0;
  if (!high) high = array.length - 1;
  const partition = (a, low, high) => {
    let i = low - 1;
    let pivot = a[high];
    for (let j = low; j < high; j++) {
      if (a[j] <= pivot) {
        i += 1
        let temp = a[i];
        a[i] = a[j]
        a[j] = temp;
      }
    }
    let temp = a[i+1]
    a[i+1] = a[high]
    a[high] = temp;
    return i + 1;
  }
  if (low < high) {
    pivotIndex = partition(array, low, high)
    quickSortInPlace(iterations, count, array, low, pivotIndex -1);
    quickSortInPlace(iterations, count, array, pivotIndex + 1, high);
    // quickSortInPlace(array, low, pivotIndex -1, iterations, count)
    // quickSortInPlace(array, pivotIndex+1, high, iterations, count)    
  }
  return array;
}
