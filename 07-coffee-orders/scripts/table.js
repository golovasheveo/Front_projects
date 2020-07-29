// table maintains

function createHeaders($trHeadElement, headers) {
    var $thElements = headers.map(function(header) {
            return $('<th>', {
                text: header
            })
        }
    )
    //appending <th> elements to <tr>
    $thElements.forEach(function ($thElement) {
        $trHeadElement.append($thElement);
    })
}

function Table(trHeadSelector, tbodySelector, headers) {
    //create headers
    //initialize tbodySelector
    //initialize hreaders

    var $trHeadElement = $(trHeadSelector);
    createHeaders($trHeadElement, headers);

    this.$tbodyElement = $(tbodySelector);
    this.keys = headers;
}