import $ from 'jquery';
function getResult(url, options) {
    return $.ajax(url, options)
}
export default class OrdersServer {
    constructor(url) {
        this.url = url;
    }
    addOrder(order) {
        return getResult(this.url, {
            type: 'POST',
            data: JSON.stringify(order)
        })
    }
    removeOrder(email){
        return getResult(`${this.url}/${encodeURIComponent(email)}`, {
            type: 'DELETE'
        })
    }
    getAllOrders() {
        return getResult(this.url, {
            type: 'GET'
        })
    }
}