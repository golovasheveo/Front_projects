function EmployeesHandler(){
    this.employees = []
}

EmployeesHandler.prototype.addEmployee = function(employee){
    employee.id = Number(employee.id)
    if(this.employees.findIndex(function(empl){
        return empl.id ===  employee.id
    }) !== -1){
        alert("Employee with current id " + employee.id + "already exists")
        return false
    }
    if(employee.id < 0){
        alert("You'd better add Employee with positive 'ID' ")
        return false
    }
    this.employees.push(employee)
    return true
}

EmployeesHandler.prototype.removeEmployee = function(id){
    let index = this.employees.findIndex(function (empl) {
        return empl.id === id
    })
    if(index < 0){
        return false
    }
    this.employees.splice(index, 1)
    return true
}

EmployeesHandler.prototype.getIds = function(){
    return this.employees.reduce(function(sum, curr){
        sum.push(curr.id)
        return sum
    },[])
}