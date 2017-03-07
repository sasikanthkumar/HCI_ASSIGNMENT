var React = require('react');
var Subheader  = require('../../node_modules/material-ui/Subheader').default;
var TextField  =  require('../../node_modules/material-ui/TextField').default;
var RadioButton = require('../../node_modules/material-ui/RadioButton/RadioButton').default;
var RadioButtonGroup = require('../../node_modules/material-ui/RadioButton/RadioButtonGroup').default;


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
  radioBtnLabelStyle:{
    color:'rgba(0, 0, 0, 0.541176)',
    fill:'rgba(0, 0, 0, 0.541176)',
  },
  addressTypeHeadingStyle:{
    fontSize:"12px",
    textAlign:"left",
    fontWeight:'700',
    color:'rgba(0, 0, 0, 0.298039)',
    lineHeight:'22px',
  },
  addressTypeRadioGrpStyle:{
    textAlign:"left",
    display:'flex',
  },
  addressTypeRadioBtnStyle:{
    width:'auto',
    marginRight:'20px',
    color:'rgba(0, 0, 0, 0.541176)',
    fill:'rgba(0, 0, 0, 0.541176)',
  },
  addressTypeLastRadioBtnStyle:{
    width:'100%',
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


  handleAddressType: function(e, value){
    this.props.handleContactAddress(value, "addressType", this.props.num);
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
        <div className = "col-md-8" >
          {/*
          <TextField
            style = {styles.selectFieldStyle}
            hintText="'mailing', 'physical', 'mailing and physical'"
            floatingLabelText="Address Type"
            onChange = {this.handleAddressType}
            value = {this.props.content.addressType}
            floatingLabelFixed={true}/>
          */}
          <p style = {styles.addressTypeHeadingStyle}>Address Type</p>
          <RadioButtonGroup
            name="addressTypeRadioGrp"
            defaultSelected={this.props.content.addressType}
            style = {styles.addressTypeRadioGrpStyle}
            onChange = {this.handleAddressType}>
            <RadioButton
              value="mailing"
              label="mailing"
              labelStyle = {styles.radioBtnLabelStyle}
              iconStyle = {styles.radioBtnLabelStyle}
              inputStyle = {styles.radioBtnLabelStyle}
              style = {styles.addressTypeRadioBtnStyle}
            />
            <RadioButton
              value="physical"
              label="physical"
              labelStyle = {styles.radioBtnLabelStyle}
              iconStyle = {styles.radioBtnLabelStyle}
              inputStyle = {styles.radioBtnLabelStyle}
              style = {styles.addressTypeRadioBtnStyle}
            />
            <RadioButton
              value="physical and mailing"
              label="physical and mailing"
              labelStyle = {styles.radioBtnLabelStyle}
              iconStyle = {styles.radioBtnLabelStyle}
              inputStyle = {styles.radioBtnLabelStyle}
              style = {styles.addressTypeLastRadioBtnStyle}
            />
          </RadioButtonGroup>
        </div>

        <div className = "col-md-1"/>
      </div>
      <div className = "row">
        <div className = "col-md-1"/>
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
        <div className = "col-md-4">
          <TextField
            style = {styles.selectFieldStyle}
            hintText="Hyderabad"
            floatingLabelText="City"
            value = {this.props.content.city}
            onChange={this.handleCity}
            floatingLabelFixed={true}/>
        </div>
        <div className = "col-md-1" />
      </div>
      <div className = "row">
        <div className = "col-md-1" />
        <div className = "col-md-4">
          <TextField
            style = {styles.selectFieldStyle}
            hintText="Telangana"
            floatingLabelText="State or Province"
            value = {this.props.content.stateOrProvince}
            onChange = {this.handleStateOrProvince}
            floatingLabelFixed={true}/>
        </div>
        <div className = "col-md-1"/>
        <div className = "col-md-4">
          <TextField
            style = {styles.selectFieldStyle}
            hintText="500078"
            floatingLabelText="Postal Code"
            value = {this.props.content.postalCode}
            onChange = {this.handlePostalCode}
            floatingLabelFixed={true} />
        </div>
        <div className = "col-md-1" />
      </div>
      <div className = "row">
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
