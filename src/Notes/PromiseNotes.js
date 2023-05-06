let promise = new Promise(function (resolve, reject) {
  resolve("Promise resolved");
});

promise.then(function success(data){
    console.log(data)
}).catch(function failed(error){
   console.log(error)
}).finally(function final(){
    console.log("Go away")
})
