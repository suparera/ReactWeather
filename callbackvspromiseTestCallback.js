function getTempCallback(location, callback){
  // need user to if-else error for sending callback.
  callback(undefined, 78);
  callback('ERR: City not found');
}

getTempCallback('Miami', function(err, temp){
  // Dev must check error to judge how to handle.
  if(err){
    console.log('error', err);
  } else {
    console.log('success', temp);
  }
});

/**
Promise(resolve, reject) add resolve and reject as function reference
Warranty that only 1 statement (resolve or reject ) is called
*/
function getTempPromise(location){
  return new Promise(function(resolve, reject){
    resolve(98);
    reject('city not found');
  })
}

getTempPromise('BKK').then(
  function(temp){
    console.log('promise: temp = ', temp);
  }, function(err){
    console.log('error: cause ', err);
  }
);
