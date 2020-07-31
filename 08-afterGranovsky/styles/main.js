var formPerson = new FormConstructor('#form-order');

var container = new DataStorage();

var table = new TableOfOrder("#form-order", "#head-tr", "#body-tr");
table.getHeader();

// Hello slack

formPerson.funcziaVnutriFormConstructor(addOrdertoContainer) ;

function addOrdertoContainer(order) {
    container.addToStorage(order);
    console.log("inside order", order)
    table.addRows(order)
}

