function chatFeed(){ // void
    while (true){
        console.log('hello');
    }
}

chatFeed();
console.log('chat disconnected');

function chatFeed1():never{
    while (true){
        console.log('hello');
    }
}

chatFeed1();
// below unreachable code
// console.log('chat disconnected 1');
