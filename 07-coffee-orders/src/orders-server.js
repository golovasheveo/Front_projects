import $ from 'jquery';
function getResult(url, options) {
    return $.ajax(url, options).catch(error => {
        let message;
        if(error.readyState == 0){
            message = "Server unavailable, please repeat operation later";
        } else {
            switch (error.status) {
                case 404: message = "Order doesn't exists"; break;
                case 500: message = "Order with the given email already exists"; break;
                default: message = "Unknown error. Contact administrator";
            }
        }
        throw new Error(message);
    })
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