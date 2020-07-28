//creating an object from a form
//performing an action  from inner logic with the created object

function FormHandler(selector) {
    this.$formElement = $(selector);
}

FormHandler.prototype.addHandler = function (dataFn) {
    this.$formElement.on('submit', function(event) {
        event.preventDefault(); //canceling submit by default
        var dataObj = this.$formElement.serializeArray()
            // this.$formElement.serializeArray()
            // .forEach(function (obj) {
            //     console.log(obj)
            // })
            .reduce(function (obj,current) {
                obj[current.name] = current.value;
                return obj;
            },{})
        var message = dataFn(dataObj);
        if (message) {
            alert(message)
        } else
            event.target.reset(); //event.target - reference to HTML element triggering the event;
    }.bind(this));
}