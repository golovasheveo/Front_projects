import $ from 'jquery';

class FormHandler {
    constructor(selector) {
        this.$formSelector= $(selector);
    }

    takingDataToObj (addToStorage) {
        this.$formSelector.on('submit', function (event) {
            event.preventDefault();
            let dataObj = this.fieldSerialization(this.$formSelector);
            console.log('after', dataObj)
            addToStorage(dataObj);
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