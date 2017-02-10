var React = require('react');
var TextField  =  require('../../node_modules/material-ui/TextField').default;
var ContactAddress = require('./ContactAddress');

const styles = {

  selectFieldStyle:{
    marginTop: '0px',
    width: '290px',
  },
};


var PersonComponent = React.createClass({

  //getInitialState: function() {
  //  return {
  //    contactPerson:'',
  //    contactOrganization:'',
  //  }//returhandlen
  //}, //getInitialState

  handleContactPerson: function(e){
    //this.setState({contactPerson:e.target.value});
    this.props.handlePersonOrganization(e.target.value, "contactPerson");
  },
  handleContactOrganization: function(e){
    //this.setState({contactOrganization:e.target.value});
    this.props.handlePersonOrganization(e.target.value, "contactOrganization");
  },

//  componentDidUpdate: function() {
//    this.props.handlePersonComponent(this.state);
//  }, //componentDidUpdate


  render: function(){
    return(
      <div className = "row">
        <div className = "col-md-2"/>
        <div className = "col-md-4">
          <TextField
            style = {styles.selectFieldStyle}
            hintText="abc"
            floatingLabelText="Contact Person"
            floatingLabelFixed={true}
            value = {this.props.content.contactPerson}
            onChange = {this.handleContactPerson}/>
        </div>

        <div className = "col-md-4">
          <TextField
            style = {styles.selectFieldStyle}
            hintText="xyz"
            onChange = {this.handleContactOrganization}
            value = {this.props.content.contactOrganization}
            floatingLabelText="Contact Organization"
            floatingLabelFixed={true}/>
        </div>
        <div className = "col-md-2"/>
      </div>
    )
  }
});


module.exports = PersonComponent;
