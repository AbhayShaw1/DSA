//Code
var sortColors = function(nums) {
  return   nums.sort((a,b)=>a-b);
};

/**
 * Time Complexity : O(nlogn)
 */


//Code2
var sortColors = function(nums) {
     let a = 0, b = 0, c = 0;

  for (let ele of nums) {
    if (ele === 0) a++;
    else if (ele === 1) b++;
    else c++;
  }

  for (let i = 0; i < a; i++) {
    nums[i] = 0;
  }
  for (let i = a; i < a + b; i++) {
    nums[i] = 1;
  }
  for (let i = a + b; i < nums.length; i++) {
    nums[i] = 2;
  }
};
/**
 * Time Complexity : O(N)
 */
