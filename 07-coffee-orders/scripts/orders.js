//data-processor (communicating with server / server imitator)
function Orders() {
    this.orders = [];
}
Orders.prototype.addOrder = function (order) {
    if(this.orders.findIndex(function (o) {
        return order.email === o.email;
    }) != -1){
        return false;
    }
    this.orders.push(order);
    return true;
}