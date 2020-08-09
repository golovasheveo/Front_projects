import {FormHandler} from "./form";
import Storage from "./storage";
import {Table} from "./table";
import {mainMenu} from "./mainMenu";

import $ from 'jquery';


var formHandler = new FormHandler('#formAddEmployee');
formHandler.takingDataToObj(functionLayout)


var menu = new mainMenu();
menu.openAddForm();
menu.openRandomForm('#openRandomForm');
menu.openTable();














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
