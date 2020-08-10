import $ from 'jquery';
import {Table} from "./table";
import storage from "./storage";

class FormHandler {
    constructor(selector) {
        this.$formSelector= $(selector);
    }

    takingDataToObj (layoutFn) {
        this.$formSelector.on('submit', function (event) {
            console.log('waiting', this)
            event.preventDefault();
            let dataObj = this.fieldSerialization(this.$formSelector);
            layoutFn(dataObj);
            event.target.reset();
        }.bind(this))
    }

    fieldSerialization ($selector) {
        let dataObj = $selector.serializeArray()
            .reduce(function (obj, current) {
                obj[current.name] = current.value;
                return obj;
            },{})
        return dataObj;
    }
}

export {FormHandler}