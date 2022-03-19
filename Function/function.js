var arr1 = [1,2,3]
var arr2 = [5,7,9]
var arr3 = [9,6,4]
function sumArray(arr) {
    var sum = 0
    for (var i= 0; i <arr.length; i++){
        sum += arr[i]
    }
    console.log(sum)
}

sumArray(arr1)
sumArray(arr2)
sumArray(arr3)