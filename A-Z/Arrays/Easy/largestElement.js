function largestElem(arr) {
    let maximum = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (maximum < arr[i]) {
            maximum = arr[i];
        }
    }
    return maximum;
}

const arr2 = [8, 10, 5, 7, 9];
let max = largestElem(arr2);
console.log(max);