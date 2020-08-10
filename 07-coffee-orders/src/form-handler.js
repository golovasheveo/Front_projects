//creating  an object from a form
//performing an action from inner logics with the created object
import $ from 'jquery';
import Spinner from "./spinner";
class FormHandler {
    constructor(selector) {
        this.$formElement = $(selector);
    }
    addHandler(dataFn) {
        this.$formElement.on('submit',async event => {
            event.preventDefault(); //canceling submit by default
            const dataObj = this.$formElement.serializeArray()
                .reduce( (obj, current) => {
                    obj[current.name] = current.value;
                    return obj;
                }, {})
            const message = await dataFn(dataObj);
            if (message) {
                alert(message);
            } else {
                event.target.reset(); //event.target - reference to HTML element triggering the event
            }
        });
    }
}
export {FormHandler}

