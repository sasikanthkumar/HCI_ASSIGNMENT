var React = require('react');
var Subheader  = require('../../node_modules/material-ui/Subheader').default;
var TextField  =  require('../../node_modules/material-ui/TextField').default;

const styles = {

  selectFieldStyle:{
    marginTop: '0px',
    width: '290px',
  },
  subHeaderStyle:{
    marginLeft: '-16px',
  },
  titleStyle:{
    textAlign:'left',
    marginLeft:'66px',
  },
};

var ContactAddress = React.createClass({
  //getInitialState: function() {
  //  return {
  //    addressType: '',
  //    address: '',
  //    city: '',
  //    stateOrProvince: '',
  //    postalCode: '',
  //    country:'',
  //  }//returhandlen
  //}, //getInitialState

//  componentDidUpdate: function() {
    //this.props.handleContactAddress(this.state);
//  }, //componentDidUpdate


  handleAddressType: function(e){
    this.props.handleContactAddress(e.target.value, "addressType", this.props.num);
    //this.setState({ addressType: e.target.value });
  },
  handleAddress: function(e){
      this.props.handleContactAddress(e.target.value, "address", this.props.num);
    //this.setState({address: e.target.value});
  },
  handleCity: function(e){
      this.props.handleContactAddress(e.target.value, "city", this.props.num);
    //this.setState({city:e.target.value });
  },
  handleStateOrProvince: function(e){
      this.props.handleContactAddress(e.target.value, "stateOrProvince", this.props.num);
    //this.setState({stateOrProvince:e.target.value});
  },
  handlePostalCode: function(e){
      this.props.handleContactAddress(e.target.value, "postalCode", this.props.num);
    //this.setState({postalCode:e.target.value});
  },
  handleCountry: function(e){
    this.props.handleContactAddress(e.target.value, "country", this.props.num);
    //this.setState({country:e.target.value});
  },

  render: function(){
    return(
    <div>
      <div className = "row">
        <div className = "col-md-4" style = {styles.titleStyle}>
          <Subheader style = {styles.subHeaderStyle}>Address</Subheader></div>
        <div className = "col-md-2" />
      </div>
      <div className = "row">
        <div className = "col-md-1" />
        <div className = "col-md-4">
          <TextField
            style = {styles.selectFieldStyle}
            hintText="'mailing', 'physical', 'mailing and physical'"
            floatingLabelText="Address Type"
            onChange = {this.handleAddressType}
            value = {this.props.content.addressType}
            floatingLabelFixed={true}/>
        </div>
        <div className = "col-md-1" />
        <div className = "col-md-4">
          <TextField
            style = {styles.selectFieldStyle}
            hintText="B-337 BITS Pilani Hyderbad Campus"
            floatingLabelText="Add"
            onChange = {this.handleAddress}
            value = {this.props.content.address}
            floatingLabelFixed={true}
            />
        </div>
        <div className = "col-md-1"/>
      </div>
      <div className = "row">
        <div className = "col-md-1"/>
        <div className = "col-md-4">
          <TextField
            style = {styles.selectFieldStyle}
            hintText="Hyderabad"
            floatingLabelText="City"
            value = {this.props.content.city}
            onChange={this.handleCity}
            floatingLabelFixed={true}/>
        </div>
        <div className = "col-md-1"/>
        <div className = "col-md-4">
          <TextField
            style = {styles.selectFieldStyle}
            hintText="Telangana"
            floatingLabelText="State or Province"
            value = {this.props.content.stateOrProvince}
            onChange = {this.handleStateOrProvince}
            floatingLabelFixed={true}/>
        </div>
        <div className = "col-md-1" />
      </div>
      <div className = "row">
        <div className = "col-md-1" />
        <div className = "col-md-4">
          <TextField
            style = {styles.selectFieldStyle}
            hintText="500078"
            floatingLabelText="Postal Code"
            value = {this.props.content.postalCode}
            onChange = {this.handlePostalCode}
            floatingLabelFixed={true} />
        </div>
        <div className = "col-md-1"/>
        <div className = "col-md-4">
          <TextField
            style = {styles.selectFieldStyle}
            hintText="India"
            onChange = {this.handleCountry}
            value = {this.props.content.country}
            floatingLabelText="Country"
            floatingLabelFixed={true}/>
        </div>
        <div className = "col-md-1" />
      </div>
    </div>
    );
  }
});


module.exports = ContactAddress;
