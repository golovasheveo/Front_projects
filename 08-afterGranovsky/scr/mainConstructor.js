function FormConstructor(selector) {
    this.$nameOfVariable = $(selector);
    }


FormConstructor.prototype.getFromForm =
    function (addOrderToContainer) {
    this.$nameOfVariable.on('submit', function(event) {
        event.preventDefault();
        var dataAfterSerial = this.$nameOfVariable.serializeArray()
        .reduce(function(obj, current, index){
            obj[current.name] = current.value;
            return obj;
        },{})
        addOrderToContainer(dataAfterSerial)
        console.log(dataAfterSerial);
    }.bind(this));
}