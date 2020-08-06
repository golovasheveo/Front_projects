
// let buttonDriver = new ButtonHandler()
let generationForm = new FormHandler("#generateEmployeesForm", "#generateFormToggle")
let addingForm = new FormHandler("#addEmployeeForm", "#addFormToggle")
let officeEmployees = new EmployeesHandler()

let tableHeading = ['Id', 'Name', 'Title', 'Gender', 'Email',  'Salary']

let workersTable = new TableHandler(
    "#employeesTable", tableHeading,
    '#showResultsTable', (e) => officeEmployees.removeEmployee(e))


generationForm.addHandler(function (generationData) {
    if(validateRandomFields(generationData)){
        generateEmployees(generationData,
                    () => officeEmployees.getIds(),
                           (e) => officeEmployees.addEmployee(e),
                           (e) => workersTable.writeRow(e)
        )
    }

})

addingForm.addHandler(function(employee){
    let res = officeEmployees.addEmployee(employee)
    if(res){
        workersTable.writeRow(employee)
    }
})