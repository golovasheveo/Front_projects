// var person = {}
// var person1 = {
//     id: 123,
//     name: "Moshe",
//     adsress: {
//         street: "Sokolov",
//         city: "Beersheba",
//     }
// };
// person.id = person1.id;
// person.name = person1.name;
// var address = {
//     street: "Sokolov",
//     city: "Beersheba",
//     // toString: function () {
//     //     return 'address'
//     // }
// }
// var ADDRESS = 'person';
//
// person.adsress = address;
//
// console.log('person', person);
// console.log('person1', person1);
// // person quiled
// console.log(JSON.stringify(person) === JSON.stringify(person1));
//
// person.id = 124;
// // updating object
// console.log(JSON.stringify(person) === JSON.stringify(person1));
//
// //all keys of the object person
//
// Object.keys(person).forEach(function (key) {
//     console.log("key: ",key);
// })
//
// Object.values(person).forEach(function (value)  {
//     console.log("value: ",value);
// })
//
//
// function wordsOccurrences(text) {
//     var res = array.split("");
//     return res;
// }

function wordsOccurrences(text) {
    var count = 0;
    var strings = text.trim().split(/\b\W+\b/);

    return strings.reduce(function(acc, el) {
        acc[el] = (acc[el] || 0) + 1;
        return acc;
    }, {});
}
text = "tt abc lmn abc, ab lmn: tt lmn"
console.log(wordsOccurrences(text))

// lmn = 3, abc = 2, tt =2, ab = 1

// add solution from Granovskiy

var text = 'tt  abc lmn abc, ab lmn: tt lmn';

function wordsOccurrences(text) {

    var words = text.toLowerCase().trim().split(/\W+/);
    var occurrences = words.reduce(function (res, word) {
        res[word] = res[word] ? res[word] + 1 : 1;
        return res;
    }, {});

    var entries = Object.entries(occurrences);
    entries.sort(function (e1, e2) {
        var res = e2[1] - e1[1];
        if (!res) {
            res = e1[0] > e2[0] ? 1 : -1;
        }
        return res;
    })

    entries.forEach(function (e) {
        console.log(e[0], '->', e[1])
    })
}

wordsOccurrences(text);