import _ from 'lodash'

const res = _.countBy(['ab','lmn','ab', 'bbc'], length);
console.log("Result",res);

function displayOccurences(text){
    const res = _.chain(text)
        .split(' ')
        .countBy()
        .toPairs()
        .sortBy(val => -val[1], '0')
        .forEach(val => console.log(`${val[0]} -----> ${val[1]}`))
        .value();
    console.log(res);
}

// Genea

displayOccurences("l lmn a lmn a lmn abc l");

const arr = [{id: 3570, gender: "female", name: "John", title: "Designer", salary: 34693 },
    {id: 3529, gender: "male", name: "John", title: "Manager", salary: 37937 },
    {id: 8093, gender: "female", name: "Igor", title: "Manager", salary: 2000 },
    {id: 4296, gender: "male", name: "Nikita", title: "Manager", salary: 30956 },
    {id: 3704, gender: "male", name: "Nikita", title: "Manager", salary: 39734 },
    {id: 7710, gender: "male", name: "John", title: "Manager", salary: 38346 },
    {id: 2249, gender: "female", name: "Igor", title: "Designer", salary: 42733 },
    {id: 8910, gender: "male", name: "John", title: "Designer", salary: 30283 },
    {id: 4619, gender: "male", name: "Victor", title: "Manager", salary: 38002 },
    {id: 9723, gender: "male", name: "Nikita", title: "Designer", salary: 2000 },
    {id: 4139, gender: "male", name: "Victor", title: "Developer", salary: 32924 },
    {id: 3863, gender: "female", name: "John", title: "Manager", salary: 2000 },
    {id: 4236, gender: "male", name: "Igor", title: "Designer", salary: 39186 },
    {id: 6657, gender: "female", name: "Igor", title: "Manager", salary: 2000 }];

// console.log(
//     _.chain(arr)
//         .groupBy("salary", function (n) {
//             return n < 2000 ? 'fail' : 'pass';
//         })
//         .map((value, key) => ({ salary: value, id: key}))
//         .value()
// );

let interval = 2000;

console.log(
    _.chain(arr)
        .sortBy("salary")
        .map (function (object) {
            return object.name+' is '+object.gender+' salary '+ object.salary;
        })
        .value()
)

console.log("chain: ",
    _.chain(arr)
        .groupBy(function (sal) {
            var minIntervalValue = Math.floor(sal.salary / interval) * interval;
            return minIntervalValue})
        .value()
)


console.log("nochain",_.groupBy(arr,function (sal) {
    var minIntervalValue = Math.floor(sal.salary / interval) * interval;
    return minIntervalValue;
}))

// salary/interval*interval

// const arrres = arr.reduce(function (arr, obj) {
//     const devM = 5000;
//     var index = Math.floor(obj.salary/devM);
//     arr[index] = obj;
//     return arr;
// }, {})
//
// console.log(arrres);


// lmn -> 3
// a -> 2
// l -> 2
// abc -> 1
