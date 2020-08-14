//creating  an object from a form
//performing an action from inner logics with the created object
import $ from 'jquery';
class FormHandler {
    constructor(selector) {
        this.$formElement = $(selector);
    }
    addHandler(dataFn){
        // this.$formElement.on('submit', function(event) { + bind
        this.$formElement.on('submit', async event => { //HERE CHANGE
            event.preventDefault(); //canceling submit by default
            const dataObj = this.$formElement.serializeArray()
                .reduce(function (obj, current) {
                    obj[current.name] = current.value;
                    return obj;
                }, {})
            console.log('dataObj', dataObj)
            const message = await dataFn(dataObj); //in index.js add 36 str for take nullable str, because here need empty message CAHNGE!!!!!!!!!!
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

// //creating  an object from a form
// //performing an action from inner logics with the created object
// import $ from 'jquery';
//
// class FormHandler {
//     constructor(selector) {
//         this.$formSelector= $(selector);
//     }
//
//     takingDataToObj (layoutFn) {
//         this.$formSelector.on('submit', function (event) {
//             console.log('waiting', this)
//             event.preventDefault();
//
//             let dataObj = this.fieldSerialization(this.$formSelector);
//             layoutFn(dataObj);
//             event.target.reset();
//         }.bind(this))
//     }
//
//     fieldSerialization ($selector) {
//         let dataObj = $selector.serializeArray()
//             .reduce(function (obj, current) {
//                 obj[current.name] = current.value;
//                 return obj;
//             },{})
//         return dataObj;
//     }
// }
// export {FormHandler}
//
