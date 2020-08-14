import $ from 'jquery'
import {FormHandler} from "./form-handler";
import ClientServer from "./server-client";
import Table from "./table";

const URL = 'http://localhost:3000/mainDB'
const form = new FormHandler('#form-order');
const server = new ClientServer(URL);

const $formHeader =  $('#form-order');

server.getAllToCompare();


// var table = new Table("#form-order","#head-tr","#body-tr", "id", function (obj) {
//     server.removeFromDB();
// });
// table.getHeader(form.fieldSerialization($formHeader));

function serializeFields(action){
    switch (action) {
        case 'add': form.addHandler(LayoutComponentAdd); break;
        case 'update': form.addHandler(LayoutComponentUpdate); break;
        // default: alert("NOUP!")
    }
}

function LayoutComponentAdd(order) {
        server.addToDB(order);
        // tableOrders.addRow(order);
        // return '';
}

function LayoutComponentUpdate(order) {
        server.updateInDB(order);
    // tableOrders.addRow(order);
    // return '';
}

window.serializeFields = serializeFields;