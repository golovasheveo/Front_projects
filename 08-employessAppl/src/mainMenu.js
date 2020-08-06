import $ from 'jquery';
import {FormHandler} from "./form";
import {Table} from "./table";

var $addForm = $('#openAddForm');
var $domTable = $('#openTable');
var $formAddEmployee = $('#formAddEmployee');

var formHandler = new FormHandler('#formAddEmployee');
var table = new Table("#formAddEmployee","#head-tr","#body-tr", "employeeId", function (obj) {
    db.removeFromStorage();
});


class mainMenu {
    constructor(formFunction) {
        this.$cardAddEmployee = $('#cardAddEmployee');
        this.$cardRandomEmployee = $('#cardRandomEmployee');
        this.tableEmployee = $('#tableEmployee');
        this.formFn = formFunction;
    }


    openAddForm() {
        $addForm.on('click', function () {
            console.log("Click on add");
            this.$cardAddEmployee.toggleClass('hide');
            formHandler.takingDataToObj(this.formFn)
        }.bind(this))
    }

    openRandomForm(formSelector) {
        $(formSelector).on('click', function () {
            console.log("Click on random");
            this.$cardRandomEmployee.toggleClass('hide')
        }.bind(this))
    }

    openTable() {
        $domTable.on('click', function () {
            console.log("Click on table");
            this.tableEmployee.toggleClass('hide');
            table.getHeader(formHandler.fieldSerialization($formAddEmployee))
        }.bind(this))
    }
}

export {mainMenu}