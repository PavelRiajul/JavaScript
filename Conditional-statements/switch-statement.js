var date = new Date()
//0-sunday, 1-monday, 2-tuesday
var today = date.getDay()

switch(today) {
    case 0:
        console.log('today is sunday')
        break
        case 1:
        console.log('today is monday')
        break
        case 2:
            console.log('today is friday')
        break
                
}
