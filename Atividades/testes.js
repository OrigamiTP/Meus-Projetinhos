/*JOY*/
/*for(let i = -1; i <= 1; i++){
    if(null == i){
        console.log("true")
    }
    else{
        console.log("false")
    }
}
if (null <= 0){
    console.log("true")
}*/
/*Bubble Sort*/
/**
 * Sorts an array using the Bubble Sort algorithm.
 * param {number[]} arr - The array to be sorted.
 * returns {number[]} The sorted array.
 */
function bubbleSort(arr) {
  let n = arr.length;
  let swapped;
  //swapped is the variable who defines when the work is finished.

  do {
    swapped == false
    for (let i = 0; i < n - 1; i++) {
      // Compare adjacent elements
      if (arr[i] > arr[i + 1]) {
        // Swap elements using destructuring assignment
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
      swapped == true
    }
    // After each pass, the largest element is at the end,
    // so we can reduce the range of the next pass.
    n--; 
  } while (swapped);
  
  return arr;
}

const data = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(data)); 
