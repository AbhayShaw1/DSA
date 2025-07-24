//Bruteforce Approach
//Code
export default function findDuplicates(numbers) {
 for(let i = 0 ;i<numbers.length;i++){
  for(let j=i+1;j<numbers.length;j++){
    if(numbers[i]==numbers[j]) return true;
  }
 }
 return false;
}

/** 
 * TIME COMPLEXITY : O(n^2) -> since use of nested loops
 * SPACE COMPLEXITY : O(1) ->  no additional space was used
 * 
 */


/**
 * Better Approach
 * Uses sorting the elements so that repeating elements becomes consecutive to each other
 

 */

//Code
export default function findDuplicates(numbers) {
  numbers.sort((a, b) => a - b);
  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] === numbers[i + 1]) return true;
  }
  return false;
}



/** 
 * TIME COMPLEXITY : O(nlogn) -> since uses sorting algorithm
 * SPACE COMPLEXITY : O(1) ->  no additional space was used apart from the use of in-place sorting 
 * 
 */





//Optimized approach since sorting a larger array would take time
/*
Used Set to check if element already present if not then it gets added to the Set
Reduces the overhead of sorting the array
*/

// Code
export default function findDuplicates(numbers) {
  const seen = new Set()
  for(let i=0;i<numbers.length;i++){
    if(seen.has(numbers[i])){
      return true;
    }
    seen.add(numbers[i]);
  }
  return false;
}

/** 
 * TIME COMPLEXITY : O(n) -> since algorithm iterates through array once
 * SPACE COMPLEXITY : O(n) -> for the Set DS.
 * 
 */