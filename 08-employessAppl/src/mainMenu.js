import $ from 'jquery';
import {FormHandler} from "./form";
import {Table} from "./table";
import Storage from "./storage";

var db = new Storage();

var $addForm = $('#openAddForm');
var $domTable = $('#openTable');
var $formAddEmployee = $('#formAddEmployee');

// var formHandler = new FormHandler('#formAddEmployee');
var table = new Table("#formAddEmployee", "#head-tr", "#body-tr", "employeeId", function (obj) {
    db.removeFromStorage();
});
var $formTable = $("#body-tr");


const functionLayout = obj => {
    db.addToStorage(obj);

    table.addRows(db.storage);
};

class mainMenu {
    constructor() {
        this.$cardAddEmployee = $('#cardAddEmployee');
        this.$cardRandomEmployee = $('#cardRandomEmployee');
        this.tableEmployee = $('#tableEmployee');
    }


    openAddForm() {
        $addForm.on('click', function () {
            console.log("Click on add");
            this.$cardAddEmployee.toggleClass('hide');
            // formHandler.takingDataToObj(functionLayout)
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

            // console.log("number of childrens", $formTable.children("tr"));
            //
        }.bind(this))
    }
}

export {mainMenu}