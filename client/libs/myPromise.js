var callback1 = function() {}
var callback2 = function() {}
var callback3 = function() {}
function MyPromise(func) {
    const resolve = function(res) {
      console.log("get resolved", res)
      callback1(res)
    }
    const reject = function(err) {
      callback2(err)
    }
    function operation() {
      try{func(resolve, reject)}catch(err){
        callback3(err)
      }
    }
    setTimeout(operation)
}

MyPromise.prototype.then = function(func1, func2) {
  callback1 = func1
  callback2 = func2
}

MyPromise.prototype.catch = function(func) {
  callback3 = func
}
