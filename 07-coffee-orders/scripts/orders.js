//data processor communicating with server/ server imitator(fake data)
function Orders() {
    this.orders = [];
}

Orders.prototype.addOrder = function (order) {
    if (this.orders.findIndex(function (o) {
        return order.email === o.email;
    }) !== -1) {
        return false;
    }
    this.orders.push(order);
    return true;
}

Orders.prototype.removeOrder = function (email) {
    var index = this.orders.findIndex(function (o) {
        return email === o.size;
    });
    if(index<0){
        return false;
    }
    this.orders.splice(index,1);
    return  true;
}