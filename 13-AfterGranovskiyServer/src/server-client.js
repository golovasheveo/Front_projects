import $ from 'jquery';

function talkToServer(url, settings) {
    return $.ajax(url, settings);
}

export default class ClientServer {

    constructor(url) {
        this.url = url
    }


    addToDB(obj) {
        return talkToServer(this.url, {
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(obj)
        })
    }

    removeFromDB(id){
        return talkToServer(`${this.url}/${encodeURIComponent(id)}`, {
            type: 'DELETE'
        })
    }

    // udate, deleteall, getall

    updateInDB(object) {
        console.log('Server - object',object)
        console.log('Server - link',`${this.url}/${encodeURIComponent(object.id)}`)

        return talkToServer(`${this.url}/${encodeURIComponent(object.id)}`, {
            type: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify(object)
        })
    }

    getAllToCompare(){

        let arr = '';
        let currentArr = '';

        console.log('arr', arr);

        setInterval(
            currentArr =
            talkToServer(this.url, {
            type: 'GET'
        }), 5000);

        if (arr===currentArr) {
            arr=currentArr;
            alert("Server Updated")
        }

    }



}