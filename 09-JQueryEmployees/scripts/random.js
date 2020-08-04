const randomManNames = ["Igor", "Nikita", "John", "Victor"]
const randomWomanNames = ["Igor", "Nikita", "John", "Victor"]
const genders = ['male', 'female']
const titles = ['Manager', 'Developer', 'Designer']
const emailPostfixes =['@gmail.com', '@yahoo.com']


function getRandomNumber(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

function validateRandomFields(validationData){
    // validate amount of employees
    if(!validateField(validationData.amount, 0, 100)){
        alert("Wrong number of employees")
        return false
    }

    if(!validateField(validationData.digits, 1, 5)){
        alert("Wrong number of digits for ID")
        return false
    }
    if(+validationData.minSalary >  +validationData.maxSalary){
        alert("Maximal value is less than minimal value")
        return false
    }
    return true
}

function generateEmployees(generationData, getIds, createEmployee, writeToTable){
    let ids = getIds()
    for(var i = 0; i < generationData.amount; i++){
        let employee = {}

        if(!(employee.id = getRandomId(generationData.digits, ids))) {
            break;
        }
        employee.gender = getRandomFromArray(genders)
        employee.name = employee.gender == 'male' ? getRandomFromArray(randomManNames) : getRandomFromArray(randomWomanNames);
        employee.title = getRandomFromArray(titles)
        employee.salary = getRandomNumber(generationData.minSalary, generationData.maxSalary)
        employee.email = generateRandomEmail(employee.name)
        createEmployee(employee)
        writeToTable(employee)
        console.log(employee);
    }
    if (i!=0){
        alert(i + " Employees vas successfully generated")
    }
}

function getRandomFromArray(array){
    return array[getRandomNumber(0, array.length-1)];
}

function generateRandomEmail(name) {
    return name.toLowerCase() + getRandomFromArray(emailPostfixes);
}

function getRandomId(digits, existingIds){
    let min = Number('1' + '0'.repeat(digits-1))
    let max = Number('1' + '0'.repeat(digits)) - 1
    for(let i = min; i < max; i++){
        let generatedId = getRandomNumber(min, max)
        if(!existingIds.includes(generatedId)){
            existingIds.push(generatedId)
            return generatedId
        }
    }
    alert("No more free IDs in current range")
    return false
}

function validateField(value, min, max) {
    return value >= min && value <= max
}