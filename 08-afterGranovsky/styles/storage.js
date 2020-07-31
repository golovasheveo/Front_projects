function DataStorage() {
    this.dataStorage = [];
}

DataStorage.prototype.addToStorage = function (dataOfOrder) {
    this.dataStorage.push(dataOfOrder);
    console.log("data from storage", this.dataStorage);
}

DataStorage.prototype.removeFromStorage = function (uniqID, keyId) {
    var IndexOfElement =
    dataStorage.findIndex(function (currentObject) {
        return (currentObject [keyId] === uniqID);
    })

    dataStorage.splice(IndexOfElement,1);
}