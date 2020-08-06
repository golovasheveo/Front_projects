import $ from 'jquery';

class Table {
    constructor(headSelector, whereToPlaceTableSelector, whereToPlaceRowsSelector, keyId, removeFn) {
        this.$headSelector = $(headSelector);
        this.$trHeader = $(whereToPlaceTableSelector);
        this.$trBody = $(whereToPlaceRowsSelector);
        this.$icon = $('#body-tr i');
        this.funcRem = removeFn;
        this.uniqId = keyId;
    }

    getHeader(fieldsDataObj) {
        console.log(fieldsDataObj);
        var $trElement = $('<tr>');
        this.$trBody.append($trElement);
        var $thElement = Object.keys(fieldsDataObj).map(function (value) {
            return $('<th>', {
                text: value
            })
        });
        $trElement.append($thElement);
    }

    addRows(objectToAddingRows) {

        var $trElement = $('<tr>');
        this.$trBody.append($trElement);
        var $tdElement = Object.keys(objectToAddingRows).map(function (key) {
            return $('<td>', {
                text: objectToAddingRows[key]
            })
        })

        $trElement.append($tdElement);

        var $removeIcon = $('<i>', {
            class: 'fas fa-blender'
        });

        var $tdRemove = $trElement.append($('<td>', {
            style: 'cursor:pointer'
        }).append($removeIcon));

        $removeIcon.on('click', function () {
            $trElement.remove();
            this.funcRem(objectToAddingRows[this.uniqId], this.uniqId);

        }.bind(this));

    }

}

export {Table};
