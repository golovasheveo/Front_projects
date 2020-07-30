function TableOfOrder (dataObj) {
    var dataObj = dataObj;
}

TableOfOrder.prototype.getHeader = function () {
        console.log('dsgfasdgsdfgfdsg')
        var header = dataObj.reduce(function (arr, header) {
            arr[header.name] = header.value;
            return arr;
        },[])
        console.log('tableParsedHeader', header);
    }


    //             {name: "Petya",
    //             second-name: "Petrov",
    //             salary: "55"}