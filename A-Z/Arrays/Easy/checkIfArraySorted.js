// function checkSorted(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j]<arr[i]) return false;
//         }
//     }
//     return true;
// }

// const arr = [5,4,6,7,8];
// const ans = checkSorted(arr);
// console.log(ans)

/**
 * Time Complexity : O (N^2) 
 * Space Complexity : O(1) 
 */


//Code
function checkSorted(arr){
    for(let i=1;i<arr.length;i++){
            if(arr[i]<arr[i-1]) return false;
    }
    return true;
}

const arr = [1,2,3,4,5];
const ans = checkSorted(arr);
console.log(ans)


/**
 * Time Complexity : O(N)
 * 
 */