var isPalindrome = function (x) {
    if (x < 0)
        return false
    let copy = x
    let num = 0
    while (copy > 0) {
        num = num * 10 + copy % 10
        copy = Math.floor(copy / 10)
    }

    return num == x

};