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

    generateEmployees (qty, countid, minSalary, maxSalary) {

        const namesObj = {
            male: ["Igor", "Nikita", "John", "Victor"],
            female: ["Vera", "Sasha", "Ira", "Valia"]
        }

        const sexArray = ["male", "female"]

        const titles = ['Manager', 'Developer', 'Designer', 'Tiler']

        var result = []
        for (var i = 0; i < countid; i++) {
            const genSex = getRandomFromArray(sexArray);
            const genName = getRandomFromArray(namesObj[genSex])
            const genId = getRandomInt(1, 10 ** countid - 1)
            var employees = {
                id: genId,
                salary: getRandomInt(minSalary, maxSalary),
                title: getRandomFromArray(titles),
                sex: genSex,
                name: genName,
                email: name.toLowerCase() + genId + "@jetbrains.com"
            }
            console.log("Generate employes", employees);
            result.push(employees);
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
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function groupBySalary() {
    var result = _.groupBy(arr,function (sal) {
        var minIntervalValue = Math.floor(sal.salary / interval) * interval;
        return minIntervalValue;
    })
    return result
}

export {Storage}
