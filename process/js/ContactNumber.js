var React = require('react');
var TextField  =  require('../../node_modules/material-ui/TextField').default;


const styles = {
  selectFieldStyle:{
    marginTop: '0px',
    width: '290px',
  },
};

var ContactNumber = React.createClass({

  render: function(){
    return (
      <div>
        <TextField
         style = {styles.selectFieldStyle}
          hintText={this.props.hintText}
          floatingLabelText={this.props.contactType}
          floatingLabelFixed={true}
          onChange = {this.props.handleContactNumber}
          value = {this.props.content}
        /><br/>
      </div>
    )
  }
});

module.exports = ContactNumber;
