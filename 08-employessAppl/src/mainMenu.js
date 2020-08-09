import $ from 'jquery';
import {FormHandler} from "./form";
import {Table} from "./table";
import Storage from "./storage";

var $addForm = $('#openAddForm');
var $domTable = $('#openTable');
var $formAddEmployee = $('#formAddEmployee');
var $formTable = $('#body-tr');

var formHandler = new FormHandler('#formAddEmployee');

var table = new Table("#formAddEmployee","#head-tr","#body-tr", "employeeId", function (obj) {
    db.removeFromStorage();
});

var db = new Storage();

function functionLayout(obj) {
    db.addToStorage(obj);
    table.tableDeleteRows();
    table.addRows(db.storage);
}


class mainMenu {
    constructor() {
        this.$cardAddEmployee = $('#cardAddEmployee');
        this.$cardRandomEmployee = $('#cardRandomEmployee');
        this.tableEmployee = $('#tableEmployee');
        this.flag = 0;
    }
    openAddForm() {
        $addForm.on('click', function () {

            console.log("Click on add");
            this.$cardAddEmployee.toggleClass('hide');
            console.log("outside", this.flag);
            if(this.flag === 0){
                console.log("inside", this.flag);
                this.flag += 1;
                formHandler.takingDataToObj(functionLayout)
            }
            // function functionLayout(obj) {
            //     db.addToStorage(obj);
            // }
            // formHandler.takingDataToObj(obj => db.addToStorage(obj))
            //notworking
            // formHandler.takingDataToObj(db.addToStorage)


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