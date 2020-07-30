function DataStorage() {
    this.dataStorage = [];
}

DataStorage.prototype.addToStorage = function (dataOfOrder) {
    this.dataStorage.push(dataOfOrder);
    console.log("data from storage" ,this.dataStorage);
}