import $ from 'jquery';

function getResult(url, options) {
    return $.ajax(url, options).catch(error => {
        let message
        if (error.readyState == 0) {
            message = "Server unavalible. Repeat later "
        }
        else {
            switch (error.statusCode) {
                case 404: message = 'selected order not exist'; break;
                case 500: message = 'order exist'; break;
                default: message='unknown error'
            }
        }
    })
}

function getUrl(obj,source){
    // const url = 'https://api.imagga.com/v2/tags?image_url=';
    // const image_url = 'https://ichef.bbci.co.uk/news/1024/cpsprodpb/151AB/production/_111434468_gettyimages-1143489763.jpg';
    // const lang = 'ru';
    // return `${url}${image_url}&language=${lang}`;
    const url = `https://api.imagga.com/v2/${source}?image_url=`;
    const image_url = obj.link;
    const lang = obj.language;
    return `${url}${image_url}&language=${lang}`;
}

export default class ClientServer {
    getProbability(inputObject) {
        return $.ajax(getUrl(inputObject,"tags"), {
            type: 'GET',
            headers: {
                Authorization: 'Basic YWNjXzRkZDNkNzkxOTk5ZTI1ZTo1MDRlYWRkMWU3NGU5NGY1Zjk3YTA4ZmI5NTY4YzhkOQ=='
            }
        }).then(obj => {
            console.log ("result tags",obj);
            return obj;
        })
    }
    getColors(inputObject) {
            return $.ajax(getUrl(inputObject, "colors"), {
                type: 'GET',
                headers: {
                    Authorization: 'Basic YWNjXzRkZDNkNzkxOTk5ZTI1ZTo1MDRlYWRkMWU3NGU5NGY1Zjk3YTA4ZmI5NTY4YzhkOQ=='
                }
            }).then(obj => {
                console.log ("result colors",obj);
                return obj;
            })
        }
}