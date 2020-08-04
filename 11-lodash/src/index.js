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

displayOccurences("l lmn a lmn a lmn abc l");

const arr = [{id: 3570, gender: "female", name: "John", title: "Designer", salary: 34693 },
    {id: 3529, gender: "male", name: "John", title: "Manager", salary: 37937 },
    {id: 8093, gender: "female", name: "Igor", title: "Manager", salary: 39514 },
    {id: 4296, gender: "male", name: "Nikita", title: "Manager", salary: 30956 },
    {id: 3704, gender: "male", name: "Nikita", title: "Manager", salary: 39734 },
    {id: 7710, gender: "male", name: "John", title: "Manager", salary: 38346 },
    {id: 2249, gender: "female", name: "Igor", title: "Designer", salary: 42733 },
    {id: 8910, gender: "male", name: "John", title: "Designer", salary: 30283 },
    {id: 4619, gender: "male", name: "Victor", title: "Manager", salary: 38002 },
    {id: 9723, gender: "male", name: "Nikita", title: "Designer", salary: 21474 },
    {id: 4139, gender: "male", name: "Victor", title: "Developer", salary: 32924 },
    {id: 3863, gender: "female", name: "John", title: "Manager", salary: 16908 },
    {id: 4236, gender: "male", name: "Igor", title: "Designer", salary: 39186 },
    {id: 6657, gender: "female", name: "Igor", title: "Manager", salary: 42610 }];




// lmn -> 3
// a -> 2
// l -> 2
// abc -> 1
