function TableOfOrder(headSelector, whereToPlaceTableSelector,whereToPlaceRowsSelector) {
    this.$headSelector = $(headSelector)
    this.$trHeader = $(whereToPlaceTableSelector)
    this.$trBody = $(whereToPlaceRowsSelector)
    this.ar = [];
}

TableOfOrder.prototype.createHeader = function (headers) {
    var $thElements = headers.map(function (header) {
        return $('<th>', {
            text: header
        })
    })
    this.$trHeader.append($thElements)
}

TableOfOrder.prototype.getHeader = function () {
    var headers = this.$headSelector.serializeArray()
        .reduce(function (arr, key) {
            arr.push(key.name);
            return arr;
        }, [])
    console.log ("headers: ", headers);
    this.createHeader(headers);
}

TableOfOrder.prototype.addRows = function (objectToAddingRows) {

    var $trElement = $('<tr>');
    this.$trBody.append($trElement);

    // get keys from array and map names

    var $tdElement = Object.keys(objectToAddingRows).map(function (key) {
        return $('<td>', {
            text: objectToAddingRows[key]
        })
    })
    this.$trBody.append($tdElement);
}





