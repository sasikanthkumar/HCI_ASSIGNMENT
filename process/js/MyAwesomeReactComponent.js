var React = require('react');
var js2xmlparser = require('js2xmlparser');
var RaisedButton = require('../../node_modules/material-ui/RaisedButton').default;
var TextField  =  require('../../node_modules/material-ui/TextField').default;
var RadioButton = require('../../node_modules/material-ui/RadioButton/RadioButton').default;
var RadioButtonGroup = require('../../node_modules/material-ui/RadioButton/RadioButtonGroup').default;
var AppBar = require('../../node_modules/material-ui/AppBar').default;
var SelectField  =  require('../../node_modules/material-ui/SelectField').default;
var MenuItem  =  require('../../node_modules/material-ui/MenuItem').default;
var IconButton = require('../../node_modules/material-ui/IconButton').default;
var Add = require('../../node_modules/material-ui/svg-icons/content/add').default;
var Clear = require('../../node_modules/material-ui/svg-icons/content/clear').default;
var PersonComponent = require('./PersonComponent');
var OrganizationComponent = require('./OrganizationComponent');
var ContactAddress = require('./ContactAddress');
var ContactNumber = require('./ContactNumber');
var Subheader  = require('../../node_modules/material-ui/Subheader').default;
var fs = eRequire('fs');
var myState = {contactPosition:'',personOrganizationComponent:{},contactInstructions:'',contactAddress: {},voiceContactNum:{}, tddTtyContactNum:{}, facContactNum:{}, emailAddress:{}, hoursOfService:{}};

const styles = {
  block: {
    maxWidth: 250,
  },
  saveBtnStyle:{
    marginTop:'16px',
    marginLeft:'0px',
    marginBottom:'16px',
  },
  clearBtnStyle:{
    marginTop:'16px',
    marginLeft:'24px',
    marginBottom:'16px',
  },
  iconColor:{
    color:'rgba(0, 0, 0, 0.298039)',
  },
  radioButton: {
    marginBottom: 16,
    display: 'flex',
    marginRight: 16,
  },
  grpStyle:{
    display:'inline-flex',
    marginLeft:'32px',
    marginTop: '32px',
  },
  radioBtnLabelStyle:{
    display: 'inline-table',
    width:'',
  },
  selectFieldStyle:{
    marginTop: '16px',
    width: '290px',
  },
  textAlignCenterStyle:{
    textAlign:'center',
  },
  contactInstructions:{
    width: '290px',
  },
  subHeaderStyle:{
    marginLeft: '-16px',
  },
  containerStyle:{
    width:'80%',
    backgroundColor:'#fff',

  },
  colMd10Style:{
    textAlign:'right',
    paddingRight:'0px',
  },
  colMd1Style:{
    paddingTop:'24px',
    paddingLeft:'0px',
  },
};

var MyAwesomeReactComponent = React.createClass({

  getInitialState: function() {
    return {
      value: 1,
      voiceContactNumber:[''],
      tddTtyContactNumber:[''],
      facContactNumber:[''],
      emailAddress:[''],
      hoursOfService:'',
      contactInstructions:'',
      contactPosition:'',
      contactAddress:{addressType:'', address:'', city:'', stateOrProvince:'', postalCode:'', country:''},
      personOrganization:{contactPerson:'', contactOrganization:''},
      numVoiceTelephones:[1],
      numTddTtyTelephones:[1],
      numFacTelephones:[1],
      numEmailAddress:[1],
    }
  },

  handleTddTtyAddBtn:function(i){
    console.log("index = ");
    console.log(i);
    var newNumTddTtyTelephones = this.state.numTddTtyTelephones;
    newNumTddTtyTelephones.push(i+1);
    console.log(newNumTddTtyTelephones);
    //var newNumVoiceTelephones = this.state.numVoiceTelephones;
    //newNumVoiceTelephones = newNumVoiceTelephones+1;

    var newTddTtyContactNumber = this.state.tddTtyContactNumber;
    newTddTtyContactNumber.push('');
    console.log(this.state.tddTtyContactNumber);
    console.log(newTddTtyContactNumber);
    this.setState({
      numTddTtyTelephones: newNumTddTtyTelephones,
      tddTtyContactNumber: newTddTtyContactNumber,
    });
  },

  handleFacAddBtn: function(i){
    var newNumFacTelephones = this.state.numFacTelephones;
    newNumFacTelephones.push(i+1);
    console.log(newNumFacTelephones);
    //var newNumVoiceTelephones = this.state.numVoiceTelephones;
    //newNumVoiceTelephones = newNumVoiceTelephones+1;

    var newFacContactNumber = this.state.facContactNumber;
    newFacContactNumber.push('');
    console.log(this.state.newFacContactNumber);
    console.log(newFacContactNumber);
    this.setState({
      numFacTelephones: newNumFacTelephones,
      facContactNumber: newFacContactNumber,
    });
  },

  handleEmailAddBtn: function(i){
    var newNumEmailAddress = this.state.numEmailAddress;
    newNumEmailAddress.push(i+1);
    console.log(newNumEmailAddress);
    //var newNumVoiceTelephones = this.state.numVoiceTelephones;
    //newNumVoiceTelephones = newNumVoiceTelephones+1;

    var newEmailAddress = this.state.emailAddress;
    newEmailAddress.push('');
    console.log(this.state.emailAddress);
    console.log(newEmailAddress);
    this.setState({
      numEmailAddress: newNumEmailAddress,
      emailAddress: newEmailAddress,
    });
  },
  handleVoiceAddBtn: function(i){
    console.log("index = ");
    console.log(i);
    var newNumVoiceTelephones = this.state.numVoiceTelephones;
    newNumVoiceTelephones.push(i+1);
    console.log(newNumVoiceTelephones);
    //var newNumVoiceTelephones = this.state.numVoiceTelephones;
    //newNumVoiceTelephones = newNumVoiceTelephones+1;

    var newVoiceContactNumber = this.state.voiceContactNumber;
    newVoiceContactNumber.push('');
    console.log(this.state.voiceContactNumber);
    console.log(newVoiceContactNumber);
    this.setState({
      numVoiceTelephones: newNumVoiceTelephones,
      voiceContactNumber: newVoiceContactNumber,
    });
  },

  handleEmailClearBtn: function(i){
    var newNumEmailAddress = this.state.numEmailAddress;
    newNumEmailAddress.pop();
    console.log(newNumEmailAddress);

    var newEmailAddress = this.state.emailAddress;
    newEmailAddress.splice(i-1,1);

    //console.log(evt);
    //var newNumVoiceTelephones = this.state.numVoiceTelephones;
    //newNumVoiceTelephones = newNumVoiceTelephones-1;
    this.setState({
      numEmailAddress:newNumEmailAddress,
      emailAddress: newEmailAddress,
    });
  },
  handleTddTtyClearBtn: function(i){
    console.log("index = ");
    console.log(i);
    var newNumTddTtyTelephones = this.state.numTddTtyTelephones;
    newNumTddTtyTelephones.pop();
    console.log(newNumTddTtyTelephones);

    var newTddTtyContactNumber = this.state.tddTtyContactNumber;
    newTddTtyContactNumber.splice(i-1,1);

    //console.log(evt);
    //var newNumVoiceTelephones = this.state.numVoiceTelephones;
    //newNumVoiceTelephones = newNumVoiceTelephones-1;
    this.setState({
      numTddTtyTelephones:newNumTddTtyTelephones,
      tddTtyContactNumber: newTddTtyContactNumber,
    });
  },

  handleFacClearBtn: function(i){
    var newNumFacTelephones = this.state.numFacTelephones;
    newNumFacTelephones.pop();
    console.log(newNumFacTelephones);

    var newFacContactNumber = this.state.facContactNumber;
    newFacContactNumber.splice(i-1,1);

    //console.log(evt);
    //var newNumVoiceTelephones = this.state.numVoiceTelephones;
    //newNumVoiceTelephones = newNumVoiceTelephones-1;
    this.setState({
      numFacTelephones:newNumFacTelephones,
      facContactNumber: newFacContactNumber,
    });
  },
  handleVoiceClearBtn: function(i){
    console.log("index = ");
    console.log(i);
    var newNumVoiceTelephones = this.state.numVoiceTelephones;
    newNumVoiceTelephones.pop();
    console.log(newNumVoiceTelephones);

    var newVoiceContactNumber = this.state.voiceContactNumber;
    newVoiceContactNumber.splice(i-1,1);

    //console.log(evt);
    //var newNumVoiceTelephones = this.state.numVoiceTelephones;
    //newNumVoiceTelephones = newNumVoiceTelephones-1;
    this.setState({
      numVoiceTelephones:newNumVoiceTelephones,
      voiceContactNumber: newVoiceContactNumber,
    });
  },
  handleFormSubmit:function(){
    console.log(js2xmlparser.parse("contactInformation", this.state));
    fs.appendFile(dataLocation, js2xmlparser.parse("contactInformation", this.state), 'utf8', function(err) {
      if (err) {
        console.log(err);
      }
    });//writeFile
    console.log(this.state);
    this.setState({
      value: 1,
      voiceContactNumber:[''],
      tddTtyContactNumber:[''],
      facContactNumber:[''],
      emailAddress:[''],
      hoursOfService:'',
      contactInstructions:'',
      contactPosition:'',
      contactAddress:{addressType:'', address:'', city:'', stateOrProvince:'', postalCode:'', country:''},
      personOrganization:{contactPerson:'', contactOrganization:''},
      numVoiceTelephones:[1],
      numTddTtyTelephones:[1],
      numFacTelephones:[1],
      numEmailAddress:[1],
    });
  },

  handleClearBtn: function(){
    this.setState({
      value: 1,
      voiceContactNumber:[''],
      tddTtyContactNumber:[''],
      facContactNumber:[''],
      emailAddress:[''],
      hoursOfService:'',
      contactInstructions:'',
      contactPosition:'',
      contactAddress:{addressType:'', address:'', city:'', stateOrProvince:'', postalCode:'', country:''},
      personOrganization:{contactPerson:'', contactOrganization:''},
      numVoiceTelephones: [1],
      numTddTtyTelephones:[1],
      numFacTelephones:[1],
      numEmailAddress:[1],
    });
  },

  handleChange: function(event, index, value) {
    this.setState({value, personOrganization:{contactPerson:'', contactOrganization:''}});
  },

  handleContactAddress: function(data, title){
    newAddress = this.state.contactAddress;
    newAddress[title] = data;
    this.setState({contactAddress: newAddress});
    //console.log(contactAddressState.addressType);
    //this.setState({test: contactAddressState.addressType});
    //console.log("State");
    //console.log(this.state.test);

    //myState.contactAddress = contactAddressState;
    //console.log(contactAddressState);
    //console.log("myState");
    //console.log(myState);

  },

  handleVoiceContactNum: function(n,e){
    console.log(n);
    console.log(e);
    var newVoiceContactNumber = this.state.voiceContactNumber;
    newVoiceContactNumber[n-1] = e.target.value;
    this.setState({voiceContactNumber: newVoiceContactNumber});
    //myState.voiceContactNum = contactNumberState;
    //console.log(contactNumberState);
    //console.log("myState");
    //console.log(myState);
  },
  handleTddTtyContactNum: function(n,e){
    //this.setState({tddTtyContactNumber: e.target.value});

    var newTddTtyContactNumber = this.state.tddTtyContactNumber;
    newTddTtyContactNumber[n-1] = e.target.value;
    this.setState({tddTtyContactNumber: newTddTtyContactNumber});

    //myState.tddTtyContactNum = contactNumberState;
    //console.log(contactNumberState);
    //console.log("myState");
    //console.log(myState);
  },
  handleFacContactNum: function(n,e){
    //this.setState({facContactNumber:e.target.value});
    var newFacContactNumber = this.state.facContactNumber;
    newFacContactNumber[n-1] = e.target.value;
    this.setState({facContactNumber: newFacContactNumber});
    //myState.facContactNum = contactNumberState;
    //console.log(contactNumberState);
    //console.log("myState");
    //console.log(myState);
  },
  handleEmailAddress: function(n,e){
    //this.setState({emailAddress:e.target.value});

    var newEmailAddress = this.state.emailAddress;
    newEmailAddress[n-1] = e.target.value;
    this.setState({emailAddress: newEmailAddress});
    //myState.emailAddress = contactNumberState;
    //console.log(contactNumberState);
    //console.log("myState");
    //console.log(myState);
  },
  handleHoursOfService: function(e){
    this.setState({hoursOfService:e.target.value});
    //myState.hoursOfService = contactNumberState;
    //console.log(contactNumberState);
    //console.log("myState");
    //console.log(myState);
  },
  handleContactInstructions: function(e){
    this.setState({contactInstructions: e.target.value});
    //myState.contactInstructions = e.target.value;
    //console.log("contact Instructions");
    //console.log(myState);
  },
  handleContactPosition: function(e){
    this.setState({contactPosition: e.target.value});
    //myState.contactPosition = e.target.value;
    //console.log("Contact Position");
    //console.log(myState);
  },
  componentDidUpdate: function() {
    //fs.writeFile(dataLocation, JSON.stringify(this.state), 'utf8', function(err) {
    //  if (err) {
    //    console.log(err);
    //  }
    //});//writeFile
  },
  handlePersonOrganizationComponent: function(data, title){
    newPersonOrganization = this.state.personOrganization;
    newPersonOrganization[title] = data;
    this.setState({personOrganization: newPersonOrganization});
    //myState.personOrganizationComponent = personOrganizationState;
    //console.log("Person Organization");
    //console.log(myState);
  },

  getVoiceComponent: function(number, length){
    if(number == length){
      var cont = this.state.voiceContactNumber[number-1];
      return (<div className = "col-md-6" key = {number}>
        <div className = "row">
          <div className = "col-md-10" style = {styles.colMd10Style}>
            <ContactNumber  num = {number} content = {cont} handleContactNumber={this.handleVoiceContactNum.bind(this, number)} hintText = "1234567890" contactType="Voice Telephone"/>
          </div>
          <div className = "col-md-1" style = {styles.colMd1Style}>
            <IconButton key = {number}  onClick={() => this.handleVoiceAddBtn(number)} tooltip="Add Voice Contact Number" iconStyle = {styles.iconColor} touch={true} tooltipPosition="bottom-right">
              <Add />
            </IconButton>
          </div>
        </div>
      </div>);
    }else{
      var cont = this.state.voiceContactNumber[number-1];
      return (<div className = "col-md-6" key = {number}>
        <div className = "row">
          <div className = "col-md-10" style = {styles.colMd10Style}>
            <ContactNumber num = {number} content = {cont} handleContactNumber={this.handleVoiceContactNum.bind(this, number)} hintText = "1234567890" contactType="Voice Telephone"/>
          </div>
          <div className = "col-md-1" style = {styles.colMd1Style}>
            <IconButton key = {number} onClick={() => this.handleVoiceClearBtn(number)}  tooltip="Clear" iconStyle = {styles.iconColor} touch={true} tooltipPosition="bottom-right">
              <Clear />
            </IconButton>
          </div>
        </div>
      </div>);
    }
  },

  getTddTtyComponent: function(number, length){
    if(number == length){
      var cont = this.state.tddTtyContactNumber[number-1];
      return (<div className = "col-md-6" key = {number}>
        <div className = "row">
          <div className = "col-md-10" style = {styles.colMd10Style}>
            <ContactNumber  num = {number} content = {cont} handleContactNumber={this.handleTddTtyContactNum.bind(this, number)} hintText = "1234567890" contactType="TDD/TTY Telephone"/>
          </div>
          <div className = "col-md-1" style = {styles.colMd1Style}>
            <IconButton key = {number}  onClick={() => this.handleTddTtyAddBtn(number)} tooltip="Add Tdd/Tty Contact Number" iconStyle = {styles.iconColor} touch={true} tooltipPosition="bottom-right">
              <Add />
            </IconButton>
          </div>
        </div>
      </div>);
    }else{
      var cont = this.state.tddTtyContactNumber[number-1];
      return (<div className = "col-md-6" key = {number}>
        <div className = "row">
          <div className = "col-md-10" style = {styles.colMd10Style}>
            <ContactNumber num = {number} content = {cont} handleContactNumber={this.handleTddTtyContactNum.bind(this, number)} hintText = "1234567890" contactType="TDD/TTY Telephone"/>
          </div>
          <div className = "col-md-1" style = {styles.colMd1Style}>
            <IconButton key = {number} onClick={() => this.handleTddTtyClearBtn(number)}  tooltip="Clear" iconStyle = {styles.iconColor} touch={true} tooltipPosition="bottom-right">
              <Clear />
            </IconButton>
          </div>
        </div>
      </div>);
    }
  },

  getEmailAddressComponent:function(number, length){
    if(number == length){
      var cont = this.state.emailAddress[number-1];
      return (<div className = "col-md-6" key = {number}>
        <div className = "row">
          <div className = "col-md-10" style = {styles.colMd10Style}>
            <ContactNumber  num = {number} content = {cont} handleContactNumber={this.handleEmailAddress.bind(this, number)} hintText = "info@gmail.com" contactType="Email Address"/>
          </div>
          <div className = "col-md-1" style = {styles.colMd1Style}>
            <IconButton key = {number}  onClick={() => this.handleEmailAddBtn(number)} tooltip="Add Email Address" iconStyle = {styles.iconColor} touch={true} tooltipPosition="bottom-right">
              <Add />
            </IconButton>
          </div>
        </div>
      </div>);
    }else{
      var cont = this.state.emailAddress[number-1];
      return (<div className = "col-md-6" key = {number}>
        <div className = "row">
          <div className = "col-md-10" style = {styles.colMd10Style}>
            <ContactNumber num = {number} content = {cont} handleContactNumber={this.handleEmailAddress.bind(this, number)} hintText = "info@gmail.com" contactType="Email Address"/>
          </div>
          <div className = "col-md-1" style = {styles.colMd1Style}>
            <IconButton key = {number} onClick={() => this.handleEmailClearBtn(number)}  tooltip="Clear" iconStyle = {styles.iconColor} touch={true} tooltipPosition="bottom-right">
              <Clear />
            </IconButton>
          </div>
        </div>
      </div>);
    }
  },

  getFacComponent:function(number, length){
    if(number == length){
      var cont = this.state.facContactNumber[number-1];
      return (<div className = "col-md-6" key = {number}>
        <div className = "row">
          <div className = "col-md-10" style = {styles.colMd10Style}>
            <ContactNumber  num = {number} content = {cont} handleContactNumber={this.handleFacContactNum.bind(this, number)} hintText = "1234567890" contactType="Fac Telephone"/>
          </div>
          <div className = "col-md-1" style = {styles.colMd1Style}>
            <IconButton key = {number}  onClick={() => this.handleFacAddBtn(number)} tooltip="Add Fac Contact Number" iconStyle = {styles.iconColor} touch={true} tooltipPosition="bottom-right">
              <Add />
            </IconButton>
          </div>
        </div>
      </div>);
    }else{
      var cont = this.state.facContactNumber[number-1];
      return (<div className = "col-md-6" key = {number}>
        <div className = "row">
          <div className = "col-md-10" style = {styles.colMd10Style}>
            <ContactNumber num = {number} content = {cont} handleContactNumber={this.handleFacContactNum.bind(this, number)} hintText = "1234567890" contactType="Fac Telephone"/>
          </div>
          <div className = "col-md-1" style = {styles.colMd1Style}>
            <IconButton key = {number} onClick={() => this.handleFacClearBtn(number)}  tooltip="Clear" iconStyle = {styles.iconColor} touch={true} tooltipPosition="bottom-right">
              <Clear />
            </IconButton>
          </div>
        </div>
      </div>);
    }
  },

  render: function() {

    let personOrganization = null;
    if (this.state.value == 1) {
      personOrganization = <PersonComponent content = {this.state.personOrganization} handlePersonOrganization = {this.handlePersonOrganizationComponent} />;
    } else {
      personOrganization = <OrganizationComponent content = {this.state.personOrganization} handlePersonOrganization = {this.handlePersonOrganizationComponent} />;
    }

    let voiceContactNumbers = this.state.numVoiceTelephones.map((number) =>
      this.getVoiceComponent(number, this.state.numVoiceTelephones.length)
    );

    let tddTtyContactNumbers = this.state.numTddTtyTelephones.map((number) =>
      this.getTddTtyComponent(number, this.state.numTddTtyTelephones.length)
    );

    let facContactNumbers = this.state.numFacTelephones.map((number) =>
      this.getFacComponent(number, this.state.numFacTelephones.length)
    );

    let emailAddressComponent = this.state.numEmailAddress.map((number) =>
      this.getEmailAddressComponent(number, this.state.numEmailAddress.length)
    );

    return(
      <div>
        <AppBar
          title="Contact Information"
          showMenuIconButton={false}/>
          <div className = "container card-1" style = {styles.containerStyle}>
          <div className = "row">
            <div className = "col-md-2" />
            <div className = "col-md-4">
              <SelectField
                style = {styles.selectFieldStyle}
                floatingLabelText="Association"
                value={this.state.value}
                onChange={this.handleChange}>
                  <MenuItem value={1} primaryText="Person" />
                  <MenuItem value={2} primaryText="Organization" />
              </SelectField>
            </div>
            <div className = "col-md-6" />
          </div>
          {personOrganization}

          <div className = "row">
            <div className = "col-md-2"/>
            <div className = "col-md-4">
              <TextField
                style = {styles.selectFieldStyle}
                hintText="HR"
                value={this.state.contactPosition}
                floatingLabelText="Contact Position"
                onChange = {this.handleContactPosition}
                floatingLabelFixed={true}/>
            </div>
            <div className = "col-md-6"/>
          </div>

          <ContactAddress content = {this.state.contactAddress} handleContactAddress = {this.handleContactAddress}/>

          <div className = "row">
            <div className = "col-md-1"/>
            <div className = "col-md-4">
              <Subheader style = {styles.subHeaderStyle}>Contact Information</Subheader>
            </div>

          </div>
          <div className = "row" style = {styles.textAlignCenterStyle}>


            {voiceContactNumbers}
            {tddTtyContactNumbers}
            {facContactNumbers}
            {emailAddressComponent}


            {/*
            <div className = "col-md-6">
              <ContactNumber  content = {this.state.tddTtyContactNumber} handleContactNumber={this.handleTddTtyContactNum} hintText = "1234567890" contactType="TDD/TTY Telephone"/>
            </div>
            */}


            {/*
            <div className = "col-md-6">
              <ContactNumber  content = {this.state.facContactNumber} handleContactNumber={this.handleFacContactNum} hintText = "1234567890" contactType="Facsimile Telephone"/>
            </div>
            */}
            {/*
            <div className = "col-md-6">
              <ContactNumber  content = {this.state.emailAddress} handleContactNumber={this.handleEmailAddress}  hintText = "contact_information@gmail.com" contactType="Email Address"/>
            </div>
            */}
            <div className = "col-md-6">
              <ContactNumber  content = {this.state.hoursOfService} handleContactNumber={this.handleHoursOfService} hintText = "10:00 AM - 9:00 PM" contactType="Hours Of Service"/>
            </div>
            <div className = "col-md-6">
              <ContactNumber  content = {this.state.contactInstructions} handleContactNumber={this.handleContactInstructions} hintText = "Early morning" contactType="Contact Instructions"/>
            </div>
          </div>
          <div className = "row" >
            <div className = "col-md-2"/>
            <div className = "col-md-1">
              <RaisedButton label="Save" style={styles.saveBtnStyle} onClick={this.handleFormSubmit}/>
            </div>
            <div className = "col-md-1">
              <RaisedButton label="Clear" primary={true} style={styles.clearBtnStyle} onClick = {this.handleClearBtn} />
            </div>
          </div>
          </div>
      </div>
    ) //return
  } //render
}); //Toolbar

module.exports = MyAwesomeReactComponent;
