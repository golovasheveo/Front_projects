//controller with inner logics
var formOrder = new FormHandler('#form-order');
var coffeeOrders = new Orders();
var tableOrders = new Table('#tr-id', '#tbody-id',
    [ 'email', 'coffee','size', 'strength', 'flavor'], 'email', function(email) {
        coffeeOrders.removeOrder(email);
    })
formOrder.addHandler(addOrder );
function addOrder(order) {
    var res = coffeeOrders.addOrder(order);
    if(!res) {
        return 'order for ' + order.email + ' already exists';
    } else {
        tableOrders.addRow(order);
    }
}

