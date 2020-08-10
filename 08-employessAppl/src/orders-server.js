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
            contentType: 'application/json',
            data: JSON.stringify(order)
        })
    }
    removeOrder(email){
        return getResult(`${this.url}/${encodeURIComponent(email)}`, {
            type: 'DELETE'
        })
    }
    getAllOrders() {
        // return getResult(`${this.url}?size=medium&coffee=espresso`, {
        return getResult(this.url, {
            type: 'GET'
        })
    }
    getOrder(email) {
        return getResult(`${this.url}/${encodeURIComponent(email)}`, {
            type: 'GET'
        })
    }
}