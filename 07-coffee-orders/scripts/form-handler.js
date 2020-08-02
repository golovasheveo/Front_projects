//creating an object from a form
//performing an action from logic with the created abject
function FormatHandler(selector) {
    this.$formElement = $(selector)
}

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