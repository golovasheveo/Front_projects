function DataStorage() {
    this.storage = [];
}

DataStorage.prototype.addToStorage = function (objToAdd) {
    this.storage.push(objToAdd);

}

DataStorage.prototype.removeFromStorage = function (uniqValue, keyID) {

    var indexOfElementToRemove = this.storage.findIndex(function (currentObjInDataStorage) {
        return uniqValue === currentObjInDataStorage[keyID]

    })
    this.storage.splice(indexOfElementToRemove,1);
}