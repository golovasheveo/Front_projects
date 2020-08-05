const arr = [{id: 3570, gender: "female", name: "John", title: "Designer", salary: 34693 },
    {id: 3529, gender: "male", name: "John", title: "Manager", salary: 37937 },
    {id: 8093, gender: "female", name: "Igor", title: "Manager", salary: 39514 },
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


let range = 5000

console.log(
    _.chain(arr)
        .groupBy("salary")
        .map((value, key) => ({ salary: value, id: Math.floor(value.salary/1000) }))
        .value()
);

// const arrres = arr.reduce(function (arr, obj) {
//     const devM = 5000;
//     var index = Math.floor(obj.salary/);
//     arr[index] = obj;
//     return arr;
// }, {})

//console.log(arrres);