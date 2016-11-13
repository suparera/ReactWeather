var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  render:function(){
    var {location, temp, isLoading} = this.state;

    function renderMessage(){
      if(isLoading){
        return <h3>Fetching Weather ...</h3>;
      } else if(temp && location){
        return <WeatherMessage temp={temp} location={location} />;
      }
    }

    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch} />
        {/*
        <WeatherMessage location={location} temp={temp} />
        */}
        {renderMessage()}
      </div>

    );
  },
  getInitialState:function(){
    return {
      isLoading:false
    };
  },

  handleSearch:function(location){
    var that = this;
    // must create that because this cannot use down , as inner class in java
    debugger;
    this.setState({isLoading:true});

    openWeatherMap.getTemp(location).then(
      function(temp){

        that.setState({
          temp:temp,
          location,location,
          isLoading:false
        })
      }, function(errorMessage){
        //that.setState({isLoading:false});
        alert(errorMessage);
      }
    )
    this.setState({
      location:location,
      temp:35
    })
  }

});

module.exports = Weather
