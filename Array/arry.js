/*var arr = [2, 34, 10, 24, 89]
var find = 34
var isFound =false
for (var a = 0; a < arr.length; a++){
    if (arr[a] == find){
        console.log('data found' +a)
        isFound =true
        break;
    }
}
if (!isFound){
    console.log('data not found')
}*/
var number = [12,34,54,23,67]
var sum = 0
for (var i = 0; i < number.length; i++){
sum += number[i]
    console.log(sum + '+' + number[i] + '=' + (sum + number[i]))
}


