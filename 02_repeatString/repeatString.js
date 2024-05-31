
const number = Math.floor(Math.random() * 100);
const repeatString = function(message, times) {
    if (times < 0 ){
        return ( 'ERROR')
    }
    let result = '';
    for (let i = 0; i < times; i++) {
        result += message;
               
    }
    return( result);
}


repeatString ('', 10)


// Do not edit below this line
module.exports = repeatString;
