var FormPerson = new FormConstructor('#form-order');

var container = new DataStorage()

function addOrderToContainer(order) {
    container.addToStorage(order)
}

FormPerson.getFromForm(addOrderToContainer);