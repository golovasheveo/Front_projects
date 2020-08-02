//creating an object from a form
//performing an action from logic with the created abject
import $ from 'jquery'
class FormHandler {
    constructor(selector) {
        this.$formElement = $(selector)
    }
    addHandler(dataFn){
        this.$formElement.on('submit', function (event) {

            event.preventDefault();
            var dataObj = this.$formElement.serializeArray()
                .reduce(function (obj, current) {
                    obj[current.name] = current.value;
                    return obj;
                }, {})

            var message = dataFn(dataObj);
            if (message) {
                alert(message)
            } else {
                event.target.reset();// event.target - reference
            }
        }.bind(this));
    }
}

export {FormHandler}

/*
FormatHandler.prototype.addHandler = function (dataFn) {

    this.$formElement.on('submit', function (event) {

        event.preventDefault();
        var dataObj = this.$formElement.serializeArray()
        .reduce(function (obj, current) {
            obj[current.name] = current.value;
            return obj;
        }, {})

        var message = dataFn(dataObj);
        if (message) {
            alert(message)
        } else {
            event.target.reset();// event.target - reference
        }
    }.bind(this));
//
}
*/
