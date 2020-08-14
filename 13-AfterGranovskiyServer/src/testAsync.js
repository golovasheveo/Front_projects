async function AFn() {
    console.log('1');
    console.log('2');
    const res = await function () {
           var server = 0;
            setTimeout( function () {
                console.log('INSIDE')
                return server = 5;
            } ,2000)
        return server;
    }
    console.log(res)
    console.log('3');
    console.log('4')
}

console.log('MAIN1')
console.log('MAIN2')
AFn();
console.log('MAIN3')
console.log('MAIN4')