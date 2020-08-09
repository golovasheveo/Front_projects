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
}

export {Table};


// dataStore.forEach(function (row) {
//     var $trElement = $('<tr>');
//     this.$trBody.append($trElement);
//     var $tdElement = Object.keys(row).map(function (key) {
//         return $('<td>', {
//             text: row[key]
//         })
//     })
//
//     $trElement.append($tdElement);
//
//     var $removeIcon = $('<i>', {
//         class: 'fas fa-blender'
//     });
//
//     var $tdRemove = $trElement.append($('<td>', {
//         style: 'cursor:pointer'
//     }).append($removeIcon));
//
//     $removeIcon.on('click', function () {
//         $trElement.remove();
//         this.funcRem(row[this.uniqId], this.uniqId);
//
//     }.bind(this));
// }).bind(this);
// //


//     for (var i = 0; i < dataStore.length; i++) {
//     var $trElement = $('<tr>');
//     this.$trBody.append($trElement);
//     var $tdElement = Object.keys(dataStore[i]).map(function (key) {
//         return $('<td>', {
//             text: dataStore[i][key]
//         })
//     })
//
//     $trElement.append($tdElement);
//
//     var $removeIcon = $('<i>', {
//         class: 'fas fa-blender'
//     });
//
//     var $tdRemove = $trElement.append($('<td>', {
//         style: 'cursor:pointer'
//     }).append($removeIcon));
//
//     $removeIcon.on('click', function () {
//         $trElement.remove();
//         this.funcRem(dataStore[i][this.uniqId], this.uniqId);
//
//     }.bind(this));
// }