export default function findMissingNumberInSequence(numbers) {
  let sum = 0;
  const n  = numbers.length;
  let sumOfNumber = n*(n+1)/2;
  for( let val of numbers){
    sum+=val;
  }
  return sumOfNumber-sum;
}


/**
 * Time Complexity : O(N) -> since only a loop is used to calculate sum of no from 1 to n
 * Space Complexity : O(1)
 */