import $ from 'jquery';
function getResult(url, options) {
    return $.ajax(url, options)
}
export default class OrdersServer {
    constructor(url) {
        this.url = url;
    }
    addData(order) {
        return getResult(this.url, {
            type: 'POST',
            data: JSON.stringify(order)
        })
    }
    removeData(email){
        return getResult(`${this.url}/${encodeURIComponent(email)}`, {
            type: 'DELETE'
        })
    }
    getAllData() {
        return getResult(this.url, {
            type: 'GET'
        })
    }
}