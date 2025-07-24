//Code
export default function pairSum(numbers, target) {

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] == target)
                return [i, j];
        }
    }
    return [-1, -1];
}
/**
 * Time Complexity : O(N^2) 
 * Space Complexity : O(1)
 */