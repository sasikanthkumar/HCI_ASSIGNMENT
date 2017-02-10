var React = require('react');
var TextField  =  require('../../node_modules/material-ui/TextField').default;
var ContactAddress = require('./ContactAddress');

const styles = {
  selectFieldStyle:{
    marginTop: '0px',
    width: '290px',
  },
};

var OrganizationComponent = React.createClass({

  handleContactPerson: function(e){
    //this.setState({contactPerson:e.target.value});
    this.props.handlePersonOrganization(e.target.value, "contactPerson");
  },
  handleContactOrganization: function(e){
    //this.setState({contactOrganization:e.target.value});
    this.props.handlePersonOrganization(e.target.value, "contactOrganization");
  },

  render: function(){
    return(
      <div className = "row">
        <div className = "col-md-2"/>
        <div className = "col-md-4">
          <TextField
            style = {styles.selectFieldStyle}
            hintText="xyz"
            floatingLabelText="Contact Organization"
            floatingLabelFixed={true}
            onChange = {this.handleContactOrganization}
            value = {this.props.content.contactOrganization}/>
        </div>
        <div className = "col-md-4">
          <TextField
            style = {styles.selectFieldStyle}
            hintText="abc"
            onChange = {this.handleContactPerson}
            value = {this.props.content.contactPerson}
            floatingLabelText="Contact Person"
            floatingLabelFixed={true}/>
        </div>
        <div className = "col-md-2"/>
      </div>
    )
  }
});

module.exports = OrganizationComponent;
