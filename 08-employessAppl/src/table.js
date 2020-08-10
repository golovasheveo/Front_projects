import $ from 'jquery';
function createHeaders($trHeadElement, headers, removeFn) {
    //getting <th> elements
    const $thElements = headers.map(header =>
       $('<th>', {
            text: header
        })
    )

    //appending <th> elements to <tr> element
    $trHeadElement.append($thElements)
    if (removeFn) {
        $trHeadElement.append($('<th>')) //reserve header for removing icon
    }
}

//table maintaining
class Table {
    constructor(trHeadSelector, tbodySelector, headersKeys, removeData) {
        //create headers
        //initialize $tbodyElement
        //initialize headers
        //initialize keyId
        //initialize removeFn
        const $trHeadElement = $(trHeadSelector);
        createHeaders($trHeadElement, Object.values(headersKeys),
            removeData.removeFn);
        this.$tbodyElement = $(tbodySelector);
        this.keys = Object.keys(headersKeys);
        this.keyId = removeData.id;
        this.removeFn = removeData.removeFn;
        this.removeMessage = removeData.message;
    }
    addRow(object) {
        const $trElement = $('<tr>');
        this.$tbodyElement.append($trElement);
//creating <td> elements from object
        const $tdElements = this.keys.map(key =>
             $('<td>', {
                text: object[key]
            })
        )
        //connecting <td> elements with <tr> element

        $trElement.append($tdElements);
        if (this.removeFn) {
            const $removeIcon = $('<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n' +
                '  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>\n' +
                '  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>\n' +
                '</svg>');
            const $tdRemove = $('<td>').append($removeIcon);
            $trElement.append($tdRemove);
            $tdRemove.on('click', async () => {
                if(confirm(`you are going remove ${this.removeMessage} ${object[this.keyId]}`) ){
                    if(await this.removeFn(object[this.keyId])){
                        $trElement.remove();
                    };

                }

            })
        }
}
}
export {Table};
