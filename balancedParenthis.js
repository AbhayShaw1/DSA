//Code 
export default function isBalancedBrackets(str) {
  const mappings = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  const stack  = [];

  for (let c of str) {
    if (mappings[c]) {
      const topElement = stack.length ? stack.pop() : "#";

      if (topElement !== mappings[c]) {
        return false;
      }
    } else {
      stack.push(c);
    }
  }

  return stack.length === 0;
}

/**
 * Time Complexity : 0(n)
 * Space Complexity : O(n) in worst case all the opening brackets are stored in stack
 */