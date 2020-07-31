function FormConstructor(selector) {
    this.$nameOfVariable = $(selector);
}

// (5) [{…}, {…}, {…}, {…}, {…}]
// 0: {name: "name", value: "12"}
// 1: {name: "second-name", value: "12"}
// 2: {name: "salary", value: "555"}
// length: 3

FormConstructor.prototype.funcziaVnutriFormConstructor =
    function (addOrdertoContainer) {
        this.$nameOfVariable.on('submit', function (event) {
            event.preventDefault();
            var dataAfterSerial = this.$nameOfVariable.serializeArray()
                .reduce(function (obj, current, index) {
                    obj[current.name] = current.value;
                    return obj;
                }, {})
            addOrdertoContainer(dataAfterSerial);
            console.log(dataAfterSerial);
            event.target.reset();
//             {name: "12", second-name: "12", salary: "55"}
//             name: "12"
//             salary: "55"
//             second-name: "12"
        }.bind(this));
    }
