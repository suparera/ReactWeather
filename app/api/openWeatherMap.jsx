var axios = require('axios');

// apikey = f58ec4507882bb851bb8bebcdffc0420
// url = http://api.openweathermap.org/data/2.5/weather?units=metric&appid=f58ec4507882bb851bb8bebcdffc0420&q=Samutprakarn
const OPEN_WEATHER_MAP_URL='http://api.openweathermap.org/data/2.5/weather?units=metric&appid=f58ec4507882bb851bb8bebcdffc0420';

module.exports = {
  getTemp:function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res){
      if(res.data.cod && res.data.message){
        throw new Error('Failed1');
      } else {
        // OK Case
        // depend on response format of JSON
        return res.data.main.temp;
      }
    },function(res){ // error case
      debugger;
      console.log('failed 2 status = ', res);
      throw new Error('Failed2');
    });
  }
}
