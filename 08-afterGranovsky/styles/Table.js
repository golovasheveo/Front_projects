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
    this.$trHeader.append($thElements).append($('<th>', {text: 'trash'}))
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

    var $removeIcon = $('<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n' +
    '  <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>\n' +
    '</svg>');

    this.$trBody.append($trElement);
    $trElement.append($tdElement)

    var $tdRemove = $('<td>').append($removeIcon);

   $trElement.append($tdRemove);

    $tdRemove.on('click', function() {
            $trElement.remove();
            console.log('Row removed')
        }.bind(this))
}





