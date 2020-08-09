import $ from 'jquery';
class Table {

    constructor(headSelector, whereToPlaceTableSelector, whereToPlaceRowsSelector, keyId, removeFn, dbstorage) {
        this.$headSelector = $(headSelector);
        this.$trHeader = $(whereToPlaceTableSelector);
        this.$trBody = $(whereToPlaceRowsSelector);
        this.$icon = $('#body-tr i');
        this.funcRem = removeFn;
        this.uniqId = keyId;

    }

    getHeader(fieldsDataObj) {
        if (!document.getElementById("tableElement")) {
            var $thElement = Object.keys(fieldsDataObj).map(function (value) {
                return $('<th>', {
                    id: "tableElement",
                    text: value
                })
            });
            this.$trHeader.append($thElement);
        }
    }

    addRows(dataStore) {
        console.log('Array for rows', dataStore)
        dataStore.forEach(function (row) {
            const $trElement = $('<tr>');
            this.$trBody.append($trElement);
            const $tdElement = Object.keys(row).map(function (key) {
                return $('<td>', {
                    text: row[key]
                })
            });
            $trElement.append($tdElement);
            const $removeIcon = $('<i>', {
                class: 'fas fa-blender'
            });
            const $tdRemove = $trElement.append($('<td>', {
                style: 'cursor:pointer'
            }).append($removeIcon));
            $removeIcon.on('click', function () {
                $trElement.remove();
                this.funcRem(row[this.uniqId], this.uniqId);
            }.bind(this));
        }.bind(this))
    }

    tableDeleteRows(){
        this.$trBody.children().remove();
    }
}
export {Table};