//creating  an object from a form
//performing an action from inner logics with the created object
import $ from 'jquery';
class FormHandler {
    constructor(selector) {
        this.$formElement = $(selector);
    }

    addHandler(dataFn){
        // this.$formElement.on('submit', function(event) { + bind
            this.$formElement.on('submit',event => {
            event.preventDefault(); //canceling submit by default
            const dataObj = this.$formElement.serializeArray()
                .reduce(function (obj, current) {
                    obj[current.name] = current.value;
                    return obj;
                }, {})
            console.log('dataObj', dataObj)
            const message = dataFn(dataObj);
            if(message) {
                alert(message);
            }else {
                event.target.reset(); //event.target - reference to HTML element triggering the event
            }
        //    bind not needed if using lambda => (because lambda annonsing within outside function and using same "this"
        });
    }
}

export {FormHandler}


//OLD VERSION --------------------------

//Class:
// function FormHandler(selector) {
//     this.$formElement = $(selector);
// }

// Method:
// FormHandler.prototype.addHandler = function (dataFn) {
// this.$formElement.on('submit', function(event) {
//     event.preventDefault(); //canceling submit by default
//     const dataObj = this.$formElement.serializeArray()
//         .reduce(function (obj, current) {
//            obj[current.name] = current.value;
//            return obj;
//         }, {})
//     console.log('dataObj', dataObj)
//     const message = dataFn(dataObj);
//     if(message) {
//         alert(message);
//     }else {
//         event.target.reset(); //event.target - reference to HTML element triggering the event
//     }
// }.bind(this));
// }