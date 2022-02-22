/*var a = 5
while(a < 10){
    console.log( 'riajul islam')
    a++
}
console.log('out of the loop')*/
//winner
var running = true
while(running){
    var rand = Math.floor(Math.random() * 10 + 1)
    if( rand == 9){
        console.log('is winner')
        running = false
    }
    else {
        console.log('you have lost')
    }
}
