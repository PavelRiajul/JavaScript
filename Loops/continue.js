/*for(var i = 0; i < 10; i++)
if(i == 4 || i == 8 || i == 5){
    continue
}else{
    console.log(i)
}*/
for(var i = 0; i < 10; i++) {
    if(i === 5) {
        console.log(i + ' is skipped');
        
    }
    console.log('i is now at: ' + i);
}