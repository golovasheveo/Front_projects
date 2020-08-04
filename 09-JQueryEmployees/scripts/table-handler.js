function TableHandler(tableSelector, headings, showButtonSelector, removeFunc) {
    this.$table = $(tableSelector)
    this.$tableWrapper = $("#employeesTableWrapper")
    this.rmFunc = removeFunc
    this.titles = headings
    this.$showButton = $(showButtonSelector)

    // initializing table headings
    let row = $('<tr>')
    this.$table.find('thead').append(row)
    headings.forEach(function(heading){
        let th = $('<th>',{text: heading, scope:'col'} )
        row.append(th)
    } )
    row.append('<th></th>')

    this.$showButton.on('click', function(){
        this.$tableWrapper.toggleClass("full-width")
        this.$showButton.toggleClass('active')
    }.bind(this))
}

TableHandler.prototype.writeRow = function(employee){
    this.$table
        .find("tbody")
        .append(getTemplate(employee, this.titles, this.rmFunc))
}

function getTemplate(employee, titles, $rmFunction){
    let tableRow = $('<tr>')
    titles.forEach(key => {
        tableRow.append($('<td>', {text: employee[key.toLowerCase()]}))
    })
    let deleteButton = $("<td>")
    deleteButton.append($('<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-archive" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n' +
        '  <path fill-rule="evenodd" d="M2 5v7.5c0 .864.642 1.5 1.357 1.5h9.286c.715 0 1.357-.636 1.357-1.5V5h1v7.5c0 1.345-1.021 2.5-2.357 2.5H3.357C2.021 15 1 13.845 1 12.5V5h1z"/>\n' +
        '  <path fill-rule="evenodd" d="M5.5 7.5A.5.5 0 0 1 6 7h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5zM15 2H1v2h14V2zM1 1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H1z"/>\n' +
        '</svg>'))
    tableRow.append(deleteButton)
    deleteButton.on('click', (e) => {
        if(confirm("you are going to remove order #" + employee.id)){
            if ($rmFunction(employee.id)){
                tableRow.remove()
            }
        }
    })
    return  tableRow
}