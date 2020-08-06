import {FormHandler} from "./form";
import Storage from "./storage";
import {Table} from "./table";
import {mainMenu} from "./mainMenu";

import $ from 'jquery';

var $cardAddEmployee = $('#cardAddEmployee');
var $cardRandomEmployee = $('#cardRandomEmployee');
var  tableEmployee = $('#tableEmployee');
var db = new Storage();
var table = new Table("#formAddEmployee","#head-tr","#body-tr", "employeeId", function (obj) {
    db.removeFromStorage();
});
var addEmployee = new FormHandler('#formAddEmployee');
var menu = new mainMenu(addEmployee);

menu.openAddForm('#openAddForm');
menu.openRandomForm('#openRandomForm');
menu.openTable('#openTable');


// table.getHeader(formAdd.fieldSerialization($('#formAddEmployee')));






db.generateEmployees(10,3,1000,10000);




// function openAddForm(){
//     $cardAddEmployee.toggleClass('hide');
//     addEmployee.takingDataToObj(functionLayout);
// }

function functionLayout(obj) {
    db.addToStorage(obj);
    table.addRows(obj);
}

// function openRandomForm(){
//     $cardRandomEmployee.toggleClass('hide')
// }

// function openTable() {
//     tableEmployee.toggleClass('hide');
// }
