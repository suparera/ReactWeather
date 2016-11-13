var React = require('react');

// var WeatherMessage = React.createClass({
//   render:function(){
//     var location = this.props.location;
//     var temp = this.props.temp;
//     return(
//       <div>
//         <h1>Weather in {location} is {temp} &#8451;</h1>
//       </div>
//     );
//   }
// });

var WeatherMessage = ({temp,location}) =>{
  return(
    <div>
      <h1>Weather in {location} is {temp} &#8451;</h1>
    </div>
  );
}

module.exports = WeatherMessage;
