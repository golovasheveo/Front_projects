//fake data processor
const timeout = 3000 //3 sec timeout
function getPromise(value) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(value)
        }, timeout)
    })
}
export default class Orders {
    constructor() {
        this.orders = [];
        //console.log('orders')
    }
    addOrder(order) {
        if (this.orders.findIndex(function (o) {
            return order.email === o.email;
        }) !== -1) {
            return getPromise(false);
        }
        this.orders.push(order);
        return getPromise(true);
    }
    removeOrder(email) {
        const index = this.orders.findIndex(o => email === o.email);
        if (index < 0) {
            return getPromise(false);
        }
        this.orders.splice(index, 1);
        return getPromise(true);
    }
}



