function TableOfOrder (headSelector, whereToPlaceTableSelector) {
    this.$headSelector = $(headSelector)
    this.$trHeader = $(whereToPlaceTableSelector)
}

function createHeader(headers, tr) {

    var $thElements = headers.map(function (header) {
        return $('<th>', {
            text: header
        })
    })
    tr.append($thElements)
}

TableOfOrder.prototype.getHeader = function () {
    var headers = this.$headSelector.serializeArray()
        .reduce(function (arr, key){
            arr.push(key.name);
            return arr;
        },[])
    console.log ("headers: ", headers);
    createHeader(headers,this.$trHeader);
}