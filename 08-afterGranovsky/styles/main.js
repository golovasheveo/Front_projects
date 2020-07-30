var formPerson = new FormConstructor('#form-order');

var container = new DataStorage();

formPerson.funcziaVnutriFormConstructor(addOrdertoContainer) ;

function addOrdertoContainer(order) {
    container.addToStorage(order);
}

var dummy = {name: "12", secondname: "12", salary: "55"};
var table = new TableOfOrder("#form-order", "#head-tr");
table.getHeader();


