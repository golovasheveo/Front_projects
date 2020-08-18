const deferred = function() {
    this.allFunc = [];
    this.lastResult;
}
deferred.prototype.then = function (newFunc) {
    this.allFunc.push(newFunc);
}
deferred.prototype.resolve = function (arg) {
    this.lastResult = arg;
    for(let i = 0; i < this.allFunc.length; i++) {
        const item = this.allFunc[i];
        const res = item(this.lastResult);
        if (res instanceof deferred) {
            const lastFuncs = this.allFunc.slice(i+1);
            res.allFunc = lastFuncs;
            break;
        } else {
            this.lastResult = res;
        }
    }
}

const d = new deferred();


d.then(function(res){ console.log("1 ", res); return "a"; });
d.then(function(res){ console.log("2 ", res); return "b"; });
d.then(function(res){ console.log("3 ", res); return "c"; });
d.resolve('hello');

