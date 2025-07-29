/**
Code
Time Complexity : O(N)
Using a two pointer approach
 */
var searchRange = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let first = -1;
  let last = -1;

  while (left <= right) {
    if (nums[left] === target && first === -1) {
      first = left;
    }

    if (nums[right] === target && last === -1) {
      last = right;
    }
    if (first === -1) {
      left++;
    }
    if (last === -1) {
      right--;
    }

    if (first !== -1 && last !== -1) break;
  }

  return [first, last];
};

/**
Code
Time Complexity : O(logn)
Using binary search
 */
var searchRange = function (nums, target) {
  function findFirst() {
    let low = 0,
      high = nums.length - 1,
      first = -1;
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      if (nums[mid] === target) {
        first = mid;
        high = mid - 1;
      } else if (nums[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return first;
  }

  function findLast() {
    let low = 0,
      high = nums.length - 1,
      last = -1;
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      if (nums[mid] === target) {
        last = mid;
        low = mid + 1;
      } else if (nums[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return last;
  }

  return [findFirst(), findLast()];
};
