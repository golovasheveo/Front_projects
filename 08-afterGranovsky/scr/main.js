var herZnaSho = new FormConstructor('#form-order');

var container = new DataStorage()

function addOrderToContainer(order) {
    container.addToStorage(order)
}

herZnaSho.funcziaVnutriFormConstructor(addOrderToContainer);