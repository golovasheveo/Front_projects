//controller with inner logics
var formOrder = new FormHandler('#form-order');
var coffeeOrders = new Orders();
var tableOrders = new Table('#tr-id', '#tbody-id', ['coffee', 'email', 'size', 'strength', 'flavour']);

formOrder.addHandler(function(order) {
    var res = coffeeOrders.addOrder(order);
    return res ? '' : 'order for ' + order.email + ' already exists';
});

