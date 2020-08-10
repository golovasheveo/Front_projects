import {FormHandler} from "./form";

export default class Storage {
    constructor(){
        this.storage = [];
    }

    addToStorage (objToAdd) {
        this.storage.push(objToAdd);
        console.log('storage state after adding:', this.storage)

    }

    removeFromStorage (uniqValue, keyID) {

        var indexOfElementToRemove = this.storage.findIndex(function (currentObjInDataStorage) {
            return uniqValue === currentObjInDataStorage[keyID]

        })
        this.storage.splice(indexOfElementToRemove,1);
    }

    generateRandomAdapter (obj) {
        console.log('Object from main form is: ', obj);
        this.generateEmployees(obj['number'], obj['id'], obj['min-salary'], obj['max-salary']);

    }

    generateEmployees (qty, countid, minSalary, maxSalary) {

        console.log("Employees parametrs", qty, countid, minSalary, maxSalary );
        const namesObj = {
            male: ["Igor", "Nikita", "John", "Victor"],
            female: ["Vera", "Sasha", "Ira", "Valia"]
        }
        const sexArray = ["male", "female"]
        const titles = ['Manager', 'Developer', 'Designer', 'Tiler']
        var result = []
        for (var i = 0; i < qty; i++) {
            const genSex = getRandomFromArray(sexArray);
            const genName = getRandomFromArray(namesObj[genSex])
            const genId = getRandomInt(1, 10 ** countid - 1)
            var employees = {
                id: genId,
                mail: name.toLowerCase() + genId + "@jetbrains.com",
                sex: genSex,
                name: genName,
                salary: getRandomInt(minSalary, maxSalary),
                title: getRandomFromArray(titles),
            }

            console.log("Generated employes on random", employees);
            this.addToStorage(employees);
            //            result.push(employees);
        }
        console.log("Result", result);
        return result;
    }
}


function getRandomFromArray(array) {
    return array[getRandomInt(0,array.length-1)];
}

function getRandomInt(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + parseInt(min);
}

function groupBySalary() {
    var result = _.groupBy(arr,function (sal) {
        var minIntervalValue = Math.floor(sal.salary / interval) * interval;
        return minIntervalValue;
    })
    return result
}

export {Storage}
