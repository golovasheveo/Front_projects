var person = {}
var person1 = {
    id: 123,
    name: "Moshe",
    adsress: {
        street: 'Sokolov',
        city: 'Beersheva'
    }
};

person.id = person1.id;
var address = {
    street: "Sokolov",
    city: "BeerSheba"
}

var ADDRESS = 'person';
person[address] = address;

console.log('person', person);
console.log('person1', person1);