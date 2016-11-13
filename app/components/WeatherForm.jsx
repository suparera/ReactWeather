var React = require('react');

var WeatherForm = React.createClass({
  render:function(){
    return(
      <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="location"/>
          <button>Find Weather</button>
          <br/>
      </form>
    );
  },
  onFormSubmit:function(e){
    e.preventDefault();
    var location = this.refs.location.value;
    if(location.length > 0){
      //clear input field
      this.refs.location.value = '';
      // call onSearch props function that send from Weather component
      this.props.onSearch(location);
    }
  }
});

module.exports = WeatherForm;
