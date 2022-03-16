var arr = [2, 34, 10, 24, 89]
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
}