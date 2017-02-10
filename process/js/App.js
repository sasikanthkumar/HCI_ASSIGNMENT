var React = require('react');
var ReactDOM = require('react-dom');
var MuiThemeProvider = require('../../node_modules/material-ui/styles/MuiThemeProvider').default;
var MyAwesomeReactComponent  =  require('./MyAwesomeReactComponent');
var injectTapEventPlugin  =  require('../../node_modules/react-tap-event-plugin');
injectTapEventPlugin();

var Test = React.createClass({
  render: function() {
    return(
      <MuiThemeProvider>
        <MyAwesomeReactComponent />
      </MuiThemeProvider>
    ) //return
  } //render
}); //Toolbar

ReactDOM.render(
  <Test />,
  document.getElementById('petAppointments')
);
