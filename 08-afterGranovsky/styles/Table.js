function TableOfOrder (headSelector, whereToPlaceTableSelector) {
    this.$headSelector = $(headSelector)
    this.$trHeader = $(whereToPlaceTableSelector)

    this.createHeader= function (headers) {

        var $thElements = headers.map(function (header) {
            return $('<th>', {
                text: header
            })
        })
        this.$trHeader.append($thElements)
    }
}

TableOfOrder.prototype.getHeader = function () {
    var headers = this.$headSelector.serializeArray()
        .reduce(function (arr, key){
            arr.push(key.name);
            return arr;
        },[])
    console.log ("headers: ", headers);
    this.createHeader(headers);
}