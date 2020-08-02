//controller with inner logics
var formOrder = new FormatHandler('#form-order');
var coffeeOrders = new Orders();
var tableOrders = new Table('#tr-head', '#body-tr',
    [ 'email', 'coffee','size', 'strength', 'flavor'], 'size', function(email) {
        return coffeeOrders.removeOrder(email);
    });
formOrder.addHandler(addOrder);

function addOrder(order) {
    var res = coffeeOrders.addOrder(order);
    if(!res) {
        return 'order for ' + order.email + ' already exists';
    } else {
        tableOrders.addRow(order);
    }
}