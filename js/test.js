function test(callback){
    console.log('are are');
    return callback()
}

function nottest(){
    console.log('blue');
}

test(nottest);