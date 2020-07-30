function DataStorage() {
    this.dataStorage = [];
}

DataStorage.prototype.addToStorage = function (dataOfOrder) {
    this.dataStorage.push(dataOfOrder);
    console.log("Data storage: ",this.dataStorage)
}