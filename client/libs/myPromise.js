var callback = function() {}
function MyPromise(func) {
  const resolve = function(res) {
    console.log("get resolved", res)
    callback(res)
  }
  const reject = function(err) {
    callback(err);
  }
  function operation() {
    func(resolve, reject)
  }
  setTimeout(operation)
}

MyPromise.prototype.then = function(func) {
  callback = func
}

MyPromise.prototype.catch=function(err){
  console.log(err)
}
