import {FormHandler} from "./form";
import Storage from "./storage";
import {Table} from "./table";
import {mainMenu} from "./mainMenu";
import $ from 'jquery';

var db = new Storage();


var menu = new mainMenu(functionLayout);
menu.openAddForm();
menu.openRandomForm('#openRandomForm');
menu.openTable();


function functionLayout(obj) {
    db.addToStorage(obj);
    // table.addRows(obj);
}









// var $cardAddEmployee = $('#cardAddEmployee');
// var $cardRandomEmployee = $('#cardRandomEmployee');
// var $tableEmployee = $('#tableEmployee');

// table.getHeader(formAdd.fieldSerialization($('#formAddEmployee')));






// db.generateEmployees(10,3,1000,10000);




// function openAddForm(){
//     $cardAddEmployee.toggleClass('hide');
//     addEmployee.takingDataToObj(functionLayout);
// }



// function openRandomForm(){
//     $cardRandomEmployee.toggleClass('hide')
// }

// function openTable() {
//     tableEmployee.toggleClass('hide');
// }
