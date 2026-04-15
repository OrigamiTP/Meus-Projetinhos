//#region BubbleSort Example

function bubbleSort(arr) {
  let n = arr.length;
  let swapped;
  
  for (let i = 0; i < n; i++) {
    swapped = false;
    
    // Optimization: Inner loop ignores already sorted elements at the end
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements using ES6 destructuring
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    
    // If no elements were swapped, the array is already sorted
    if (!swapped) break;
  }
  return arr;
}

const numbers = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(numbers)); // [11, 12, 22, 25, 34, 64, 90]
// 

//#endregion
//#region BubbleSort Exercise

function BubbleSort(arr){
  let n = arr.length
  let swapped

  for(let i = 0; i < n - 1; i++){
    swapped = false

    for(let j = 0; j < n - i - 1; j++){
      if(arr[j] > arr[j + 1]){
        [arr[j],arr[j + 1]] = [arr[j + 1], arr[j]]
        swapped = true
      }
      if(!swapped) break
    }
  }
  return arr
}
const array = [20, 67, 23, 91, 46, 19, 84]
console.log(BubbleSort(array))

//#endregion