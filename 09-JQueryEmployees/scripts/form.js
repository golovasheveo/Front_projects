function FormDataGathering(selector) {
    this.$formSelector= $(selector);
}

FormDataGathering.prototype.takingDataToObj = function (addToStorage) {
    this.$formSelector.on('submit', function (event) {
        event.preventDefault();
        let dataObj = this.fieldSerialization(this.$formSelector);
        console.log('after', dataObj)
        addToStorage(dataObj);
        event.target.reset();
    }.bind(this))
}

FormDataGathering.prototype.fieldSerialization = function ($selector) {
    let dataObj = $selector.serializeArray()
        .reduce(function (obj, current) {
            obj[current.name] = current.value;
            return obj;
        },{})
    return dataObj;
}