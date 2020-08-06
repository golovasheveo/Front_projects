//console.log('Hello world!')
// function sleep(timeout,callbackFn) {
//     var running = true;
//     setTimeout(callbackFn
//     , timeout);
//
// }
// sleep(2000, () => console.log('kuku after 2 seconds'));
const userData = {
    123 : 'Moshe',
    Moshe: 'Lod'

}
function getId(getUserFn, getCityFn) {
    setTimeout(() => {
        const id = 123;
        getUserFn(id, getCityFn);
    }, 1000)
}
function getUser(id, getCityFn) {
    setTimeout(() => {
        const user = userData[id] ;
        getCityFn(user);
    }, 1000)
}
function getCity(user) {
    setTimeout(() => {
        console.log(userData[user]);
    }, 1000)
}
//synchronous
// const id = getId();
// const user = getUser(id);
// const city = getCity(user);
// console.log(city);
//asynchronous
//getId(getUser, getCity);
function getId() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const id = 123;
            resolve(id);
        }, 1000)
    })
}
function getUser(id) {
    return new Promise((resolve, reject) => {
        if (id > 0) {
            setTimeout(() => {
                resolve(userData[id])
            }, 1000)
        }
        else {
            setTimeout(() => {
                reject('negative id');
            },1000);
        }
    })
}
function getCity(user) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(userData[user]);
        }, 1000);
    })
}

getUser(123).then((user) => {
    console.log(user)
}).catch(error => {
    console.log(error)
})

getId().then(id => getUser(id))
    .then(user => getCity(user))
    .then(city => console.log(city)).catch(error => console.log(error))


console.log('waiting for city ...');

const cityFn = async () => {
    try {
        const id = await getId();
        const user = await getUser(id);
        const city = await getCity(user);
        console.log(city);
    }catch (error) {
        console.log(error);
    }
}

cityFn().then();

async function asyncFn() {
    console.log('inside asyncFn')
    return 1000
}

asyncFn().then((num) => {console.log(num)})
console.log('oooo')
console.log('ooo1')
console.log('ooo2')