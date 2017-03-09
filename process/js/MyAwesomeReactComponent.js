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
var MyTabs = require('./MyTabs');
var Subheader  = require('../../node_modules/material-ui/Subheader').default;
var fs = eRequire('fs');
var myState = {contactPosition:'',personOrganizationComponent:{},contactInstructions:'',contactAddress: {},voiceContactNum:{}, tddTtyContactNum:{}, facContactNum:{}, emailAddress:{}, hoursOfService:{}};
var Tabs = require ('../../node_modules/material-ui/Tabs/Tabs').default;
var Tab =  require( '../../node_modules/material-ui/Tabs/Tab').default;
var TimePicker  =  require('../../node_modules/material-ui/TimePicker').default;
var Toggle  =  require('../../node_modules/material-ui/Toggle').default;

const styles = {
  block: {
    maxWidth: 250,
  },
  saveBtnStyle:{
    marginTop:'16px',
    marginLeft:'0px',
    marginBottom:'16px',
  },
  saveClearBtnsStyle:{
    marginLeft:'34px',
  },
  divLeftGap:{
    top:'12px',
  },
  toogleLabelStyle:{
    left: '40px',
  },
  div1LeftGap:{
    left: '250px',
  },
  addressTypeHeadingStyle:{
    fontSize:"12px",
    textAlign:"left",
    fontWeight:'700',
    color:'rgba(0, 0, 0, 0.298039)',
    lineHeight:'22px',
    marginLeft: '104px',
    marginBottom: '-4px',
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
  contactInstructionsStyle:{
    marginLeft:'-24px',
    paddingLeft:'60px',
  },
  hoursOfServiceStyle:{
    marginLeft:'23px',
  },
  selectFieldStyle:{
    marginTop: '16px',
    width: '290px',
  },
  associationStyle:{
    marginLeft:'30px',
  },
  textAlignCenterStyle:{
    textAlign:'center',
    marginLeft: '-30px',
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

  radioBtnLabelStyle:{
    color:'rgba(0, 0, 0, 0.541176)',
    fill:'rgba(0, 0, 0, 0.541176)',
  },

  contactInfoMd1Style:{
    marginLeft:'37px',
  },
  timePickerStyle:{
    width: '286px',
    marginLeft: '90px',
  },
  colMd10Style:{
    textAlign:'right',
    paddingRight:'0px',
  },
  colMd9Style:{
    textAlign:'right',
    paddingRight:'0px',
    marginLeft:'50px',
  },
  colMd1Style:{
    paddingTop:'24px',
    paddingLeft:'0px',
  },
  colMd1StyleAddress:{
    paddingTop:'224px',
    paddingLeft:'0px',
  },
  contactInformationTitle:{
    marginLeft:'-5px',
  },
  titleStyle:{
    textAlign:'left',
    marginLeft:'32px',
  },
  subHeaderStyle:{
    marginLeft: '-16px',
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
      contactAddress:[{addressType:'mailing', address:'', city:'', stateOrProvince:'', postalCode:'', country:''}],
      personOrganization:{contactPerson:'', contactOrganization:''},
      numVoiceTelephones:[1],
      numTddTtyTelephones:[1],
      numFacTelephones:[1],
      numEmailAddress:[1],
      numContactAddress:[1],
      numTabs:[1],
      addressSelected:1,
      timePickerDate:null,
      language: 'English',
      languageLabel: 'Change Language',
      appBarTitle: 'Contact Information',
      associationLabel: 'Association',
      personLabel: 'Person',
      organizationLabel: 'Organization',
      contactOrganizationLabel: 'Contact Organization' ,
      contactOrganizationHintLabel: 'xyz',
      contactPersonLabel: 'Contact Person',
      contactPersonHintLabel: 'abc',
      contactPositionLabel: 'Contact Position',
      contactPositionHintLabel: 'HR',
      tabAddressLabel: 'Address',
      addressTypeLabel: 'Address Type',
      mailingLabel: 'mailing',
      physicalLabel: 'physical',
      physicalAndMailingLabel: 'physical and mailing',
      addLabel: 'Add',
      addHintLabel: 'B-337 BITS Pilani Hyderabad Campus',
      cityLabel:'City',
      cityHintLabel: 'Hyderabad',
      stateOrProvinceLabel: 'State or Province',
      stateOrProvinceHintLabel: 'Telangana',
      postalCodeLabel: 'Postal Code',
      postalCodeHintLabel: '500078',
      countryLabel: 'Country',
      countryHintLabel: 'India',
      contactInformationLabel: 'Contact Information',
      voiceTelephoneLabel: 'Voice Telephone',
      voiceTelephoneHintLabel: '1234567890',
      tddTtyContactNumLabel: 'TDD/TTY Telephone',
      tddTtyContactNumHintLabel: '1234567890',
      facTelephoneLabel: 'Fac Telephone',
      facTelephoneHintLabel: '1234567890',
      emailAddressLabel: 'Email Address',
      emailAddressHintLabel: 'info@gmail.com',
      hoursOfServiceLabel: 'Hours Of Service',
      contactInstructionsLabel: 'Contact Instructions',
      contactInstructionsHintLabel: 'Early Morning',
      saveBtnLabel: 'SAVE',
      clearBtnLabel: 'CLEAR',
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
  handleContactAddressAddBtn: function(i){
    var newNumContactAddress = this.state.numContactAddress;
    newNumContactAddress.push(i+1);
    console.log(newNumContactAddress);
    //var newNumVoiceTelephones = this.state.numVoiceTelephones;
    //newNumVoiceTelephones = newNumVoiceTelephones+1;

    var newContactAddress = this.state.contactAddress;
    newContactAddress.push({addressType:'mailing', address:'', city:'', stateOrProvince:'', postalCode:'', country:''});
    console.log(this.state.contactAddress);
    console.log(newContactAddress);
    this.setState({
      numContactAddress: newNumContactAddress,
      contactAddress: newContactAddress,
    });
  },
  handleTabsAddBtnTest: function(){
    var newNumTabs = this.state.numTabs;
    var i = newNumTabs.length;
    newNumTabs.push(i+1);

    var newContactAddress = this.state.contactAddress;
    newContactAddress.push({addressType:'mailing', address:'', city:'', stateOrProvince:'', postalCode:'', country:''});

    this.setState({
      numTabs: newNumTabs,
      contactAddress: newContactAddress,
      addressSelected: i+1,
    });
  },

  handleTabOnClick: function(tabNumber){
    console.log("tabNumber = ");
    console.log(tabNumber);
    this.setState({
      addressSelected:tabNumber,
    });
  },
  handleTabClearOnClick: function(tabNumber){
    console.log("clearing tabNumber = ");
    console.log(tabNumber);

    var newNumTabs = this.state.numTabs;
    newNumTabs.pop();

    var newContactAddress = this.state.contactAddress;
    newContactAddress.splice(tabNumber-1,1);

    var newAddressSelected = this.state.addressSelected;
    if((tabNumber == 1) && (this.state.addressSelected == 1)){
      newAddressSelected = 1;
    }else if (tabNumber == 1) {
      newAddressSelected = this.state.addressSelected-1;
    }else if ((tabNumber >1) && (this.state.addressSelected == tabNumber)) {
      newAddressSelected = this.state.addressSelected-1;
    }else if ((tabNumber >1) && (this.state.addressSelected > tabNumber)) {
      newAddressSelected = this.state.addressSelected-1;
    }else if ((tabNumber >1)&& (this.state.addressSelected < tabNumber)) {
      newAddressSelected = this.state.addressSelected;
    }

    //console.log(evt);
    //var newNumVoiceTelephones = this.state.numVoiceTelephones;
    //newNumVoiceTelephones = newNumVoiceTelephones-1;
    this.setState({
      numTabs:newNumTabs,
      contactAddress: newContactAddress,
      addressSelected:newAddressSelected,
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

  handleContactAddressClearBtn: function(i){
    var newNumContactAddress = this.state.numContactAddress;
    newNumContactAddress.pop();
    console.log(newNumContactAddress);

    var newContactAddress = this.state.contactAddress;
    newContactAddress.splice(i-1,1);

    //console.log(evt);
    //var newNumVoiceTelephones = this.state.numVoiceTelephones;
    //newNumVoiceTelephones = newNumVoiceTelephones-1;
    this.setState({
      numContactAddress:newNumContactAddress,
      contactAddress: newContactAddress,
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
    var toSaveState = this.state;
    delete toSaveState.value;
    delete toSaveState.numVoiceTelephones;
    delete toSaveState.numTddTtyTelephones;
    delete toSaveState.numFacTelephones;
    delete toSaveState.numEmailAddress;
    delete toSaveState.numContactAddress;
    if(toSaveState.hoursOfService == ''){
      delete toSaveState.hoursOfService;
    }
    if(toSaveState.contactInstructions  == ''){
      delete toSaveState.contactInstructions;
    }
    if((this.state.value == 1) && (toSaveState.personOrganization.contactOrganization == '')){
      delete toSaveState.personOrganization.contactOrganization;
    }
    if((this.state.value == 2) && (toSaveState.personOrganization.contactPerson == '')){
      delete toSaveState.personOrganization.contactPerson;
    }
    if(this.state.contactPosition == ''){
      delete toSaveState.contactPosition;
    }
    console.log(js2xmlparser.parse("contactInformation", toSaveState));
    fs.appendFile(dataLocation, js2xmlparser.parse("contactInformation", toSaveState), 'utf8', function(err) {
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
      contactAddress:[{addressType:'mailing', address:'', city:'', stateOrProvince:'', postalCode:'', country:''}],
      personOrganization:{contactPerson:'', contactOrganization:''},
      numVoiceTelephones:[1],
      numTddTtyTelephones:[1],
      numFacTelephones:[1],
      numEmailAddress:[1],
      numContactAddress: [1],
      numTabs:[1],
      addressSelected:1,
      timePickerDate: null,
      language: 'English',
      languageLabel: 'Change Language',
      appBarTitle: 'Contact Information',
      associationLabel: 'Association',
      personLabel: 'Person',
      organizationLabel: 'Organization',
      contactOrganizationLabel: 'Contact Organization' ,
      contactOrganizationHintLabel: 'xyz',
      contactPersonLabel: 'Contact Person',
      contactPersonHintLabel: 'abc',
      contactPositionLabel: 'Contact Position',
      contactPositionHintLabel: 'HR',
      tabAddressLabel: 'Address',
      addressTypeLabel: 'Address Type',
      mailingLabel: 'mailing',
      physicalLabel: 'physical',
      physicalAndMailingLabel: 'physical and mailing',
      addLabel: 'Add',
      addHintLabel: 'B-337 BITS Pilani Hyderabad Campus',
      cityLabel:'City',
      cityHintLabel: 'Hyderabad',
      stateOrProvinceLabel: 'State or Province',
      stateOrProvinceHintLabel: 'Telangana',
      postalCodeLabel: 'Postal Code',
      postalCodeHintLabel: '500078',
      countryLabel: 'Country',
      countryHintLabel: 'India',
      contactInformationLabel: 'Contact Information',
      voiceTelephoneLabel: 'Voice Telephone',
      voiceTelephoneHintLabel: '1234567890',
      tddTtyContactNumLabel: 'TDD/TTY Telephone',
      tddTtyContactNumHintLabel: '1234567890',
      facTelephoneLabel: 'Fac Telephone',
      facTelephoneHintLabel: '1234567890',
      emailAddressLabel: 'Email Address',
      emailAddressHintLabel: 'info@gmail.com',
      hoursOfServiceLabel: 'Hours Of Service',
      contactInstructionsLabel: 'Contact Instructions',
      contactInstructionsHintLabel: 'Early Morning',
      saveBtnLabel: 'SAVE',
      clearBtnLabel: 'CLEAR',
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
      contactAddress:[{addressType:'mailing', address:'', city:'', stateOrProvince:'', postalCode:'', country:''}],
      personOrganization:{contactPerson:'', contactOrganization:''},
      numVoiceTelephones: [1],
      numTddTtyTelephones:[1],
      numFacTelephones:[1],
      numEmailAddress:[1],
      numContactAddress:[1],
      numTabs:[1],
      addressSelected:1,
      timePickerDate: null,
      language: 'English',
      languageLabel: 'Change Language',
      appBarTitle: 'Contact Information',
      associationLabel: 'Association',
      personLabel: 'Person',
      organizationLabel: 'Organization',
      contactOrganizationLabel: 'Contact Organization' ,
      contactOrganizationHintLabel: 'xyz',
      contactPersonLabel: 'Contact Person',
      contactPersonHintLabel: 'abc',
      contactPositionLabel: 'Contact Position',
      contactPositionHintLabel: 'HR',
      tabAddressLabel: 'Address',
      addressTypeLabel: 'Address Type',
      mailingLabel: 'mailing',
      physicalLabel: 'physical',
      physicalAndMailingLabel: 'physical and mailing',
      addLabel: 'Add',
      addHintLabel: 'B-337 BITS Pilani Hyderabad Campus',
      cityLabel:'City',
      cityHintLabel: 'Hyderabad',
      stateOrProvinceLabel: 'State or Province',
      stateOrProvinceHintLabel: 'Telangana',
      postalCodeLabel: 'Postal Code',
      postalCodeHintLabel: '500078',
      countryLabel: 'Country',
      countryHintLabel: 'India',
      contactInformationLabel: 'Contact Information',
      voiceTelephoneLabel: 'Voice Telephone',
      voiceTelephoneHintLabel: '1234567890',
      tddTtyContactNumLabel: 'TDD/TTY Telephone',
      tddTtyContactNumHintLabel: '1234567890',
      facTelephoneLabel: 'Fac Telephone',
      facTelephoneHintLabel: '1234567890',
      emailAddressLabel: 'Email Address',
      emailAddressHintLabel: 'info@gmail.com',
      hoursOfServiceLabel: 'Hours Of Service',
      contactInstructionsLabel: 'Contact Instructions',
      contactInstructionsHintLabel: 'Early Morning',
      saveBtnLabel: 'SAVE',
      clearBtnLabel: 'CLEAR',
    });
  },

  handleChange: function(event, value) {
    console.log(value);
    this.setState({value, personOrganization:{contactPerson:'', contactOrganization:''}});
  },

  handleContactAddress: function(data, title, i){
    newAddress = this.state.contactAddress;
    newAddress[i-1][title] = data;
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
  handleLanguageToogle:function(e, isInputChecked){
    if (isInputChecked) {
      this.setState({
        language: 'हिंदी',
        languageLabel: 'चेंज लैंग्वेज',
        appBarTitle: 'कांटेक्ट इनफार्मेशन',
        associationLabel: 'एसोसिएशन',
        personLabel: 'पर्सन',
        organizationLabel: 'आर्गेनाइजेशन',
        contactOrganizationLabel: 'कांटेक्ट आर्गेनाइजेशन',
         contactOrganizationHintLabel: 'क्सिज़',
        contactPersonLabel: 'कांटेक्ट पर्सन',
        contactPersonHintLabel: 'अबकि',
        contactPositionLabel: 'कांटेक्ट पोजीशन',
        contactPositionHintLabel: 'हर',
        tabAddressLabel: 'एड्रेस',
        addressTypeLabel: 'एड्रेस टाइप',
        mailingLabel: 'मेलिंग',
        physicalLabel: 'फिजिकल',
        physicalAndMailingLabel: 'फिजिकल एंड मेलिंग',
        addLabel: 'ऐड',
        addHintLabel: 'बी-337 बिट्स पिलानी हैदराबाद कैंपस',
        cityLabel:'सिटी',
        cityHintLabel: 'हैदराबाद',
        stateOrProvinceLabel: 'स्टेट और प्रोविंस',
        stateOrProvinceHintLabel: 'तेलंगाना',
        postalCodeLabel: 'पोस्टल कोड',
        postalCodeHintLabel: '500078',
        countryLabel: 'कंट्री',
        countryHintLabel: 'इंडिया',
        contactInformationLabel: 'कांटेक्ट इनफार्मेशन',
        voiceTelephoneLabel: 'वौइस् टेलीफोन',
        voiceTelephoneHintLabel: '1234567890',
        tddTtyContactNumLabel: 'तड़ड़/टी  टेलीफोन',
        tddTtyContactNumHintLabel: '1234567890',
        facTelephoneLabel: 'फाच टेलीफोन',
        facTelephoneHintLabel: '1234567890',
        emailAddressLabel: 'ईमेल एड्रेस',
        emailAddressHintLabel: 'info@gmail.com',
        hoursOfServiceLabel: 'हॉर्स ऑफ़ सर्विस',
        contactInstructionsLabel: 'कांटेक्ट इंस्ट्रुक्शन्स',
        contactInstructionsHintLabel: 'अर्ली मॉर्निंग',
        saveBtnLabel: 'सेव',
        clearBtnLabel: 'क्लियर',
      });
    }else {
      this.setState({
        language: 'English',
        languageLabel: 'Change Language',
        appBarTitle: 'Contact Information',
        associationLabel: 'Association',
        personLabel: 'Person',
        organizationLabel: 'Organization',
        contactOrganizationLabel: 'Contact Organization' ,
        contactOrganizationHintLabel: 'xyz',
        contactPersonLabel: 'Contact Person',
        contactPersonHintLabel: 'abc',
        contactPositionLabel: 'Contact Position',
        contactPositionHintLabel: 'HR',
        tabAddressLabel: 'Address',
        addressTypeLabel: 'Address Type',
        mailingLabel: 'mailing',
        physicalLabel: 'physical',
        physicalAndMailingLabel: 'physical and mailing',
        addLabel: 'Add',
        addHintLabel: 'B-337 BITS Pilani Hyderabad Campus',
        cityLabel:'City',
        cityHintLabel: 'Hyderabad',
        stateOrProvinceLabel: 'State or Province',
        stateOrProvinceHintLabel: 'Telangana',
        postalCodeLabel: 'Postal Code',
        postalCodeHintLabel: '500078',
        countryLabel: 'Country',
        countryHintLabel: 'India',
        contactInformationLabel: 'Contact Information',
        voiceTelephoneLabel: 'Voice Telephone',
        voiceTelephoneHintLabel: '1234567890',
        tddTtyContactNumLabel: 'TDD/TTY Telephone',
        tddTtyContactNumHintLabel: '1234567890',
        facTelephoneLabel: 'Fac Telephone',
        facTelephoneHintLabel: '1234567890',
        emailAddressLabel: 'Email Address',
        emailAddressHintLabel: 'info@gmail.com',
        hoursOfServiceLabel: 'Hours Of Service',
        contactInstructionsLabel: 'Contact Instructions',
        contactInstructionsHintLabel: 'Early Morning',
        saveBtnLabel: 'SAVE',
        clearBtnLabel: 'CLEAR',
      });
    }
  },
  handleChangeTimePicker12: function(e, date){
    console.log(date);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    console.log(strTime);
    this.setState({hoursOfService: strTime, timePickerDate: date});
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
            <ContactNumber  num = {number} content = {cont} handleContactNumber={this.handleVoiceContactNum.bind(this, number)} hintText = {this.state.voiceTelephoneHintLabel} contactType={this.state.voiceTelephoneLabel}/>
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
            <ContactNumber num = {number} content = {cont} handleContactNumber={this.handleVoiceContactNum.bind(this, number)} hintText = {this.state.voiceTelephoneHintLabel} contactType={this.state.voiceTelephoneLabel}/>
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
            <ContactNumber  num = {number} content = {cont} handleContactNumber={this.handleTddTtyContactNum.bind(this, number)} hintText = {this.state.tddTtyContactNumHintLabel} contactType={this.state.tddTtyContactNumLabel}/>
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
            <ContactNumber num = {number} content = {cont} handleContactNumber={this.handleTddTtyContactNum.bind(this, number)}  hintText = {this.state.tddTtyContactNumHintLabel} contactType={this.state.tddTtyContactNumLabel}/>
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
            <ContactNumber  num = {number} content = {cont} handleContactNumber={this.handleEmailAddress.bind(this, number)}  hintText = {this.state.emailAddressHintLabel} contactType={this.state.emailAddressLabel}/>
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
            <ContactNumber num = {number} content = {cont} handleContactNumber={this.handleEmailAddress.bind(this, number)}  hintText = {this.state.emailAddressHintLabel} contactType={this.state.emailAddressLabel}/>
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

  getAddressComponentMyTabs: function(number){
    var cont = this.state.contactAddress[number-1];
    return(
      <div className = "row" key = {number}>
        <div className = "col-md-9" style = {styles.colMd9Style}>
          <ContactAddress
                  num = {number}
                  content = {cont}
                  handleContactAddress = {this.handleContactAddress}
                  addressTypeLabel = {this.state.addressTypeLabel}
                  mailingLabel = {this.state.mailingLabel}
                  physicalLabel = {this.state.physicalLabel}
                  physicalAndMailingLabel = {this.state.physicalAndMailingLabel}
                  addLabel = {this.state.addLabel}
                  addHintLabel = {this.state.addHintLabel}
                  cityLabel = {this.state.cityLabel}
                  cityHintLabel = {this.state.cityHintLabel}
                  stateOrProvinceLabel = {this.state.stateOrProvinceLabel}
                  stateOrProvinceHintLabel = {this.state.stateOrProvinceHintLabel}
                  postalCodeLabel = {this.state.postalCodeLabel}
                  postalCodeHintLabel = {this.state.postalCodeHintLabel}
                  countryLabel = {this.state.countryLabel}
                  countryHintLabel = {this.state.countryHintLabel}
          />
        </div>
        <div className = "col-md-1" style = {styles.colMd1StyleAddress}>
        </div>
      </div>
    );
  },

  getAddressComponent:function(number, length){
    if(number == length){
      var cont = this.state.contactAddress[number-1];
      return(
        <Tab label = {"Address - "+number} key = {number}>
        <div className = "row" key = {number}>
          <div className = "col-md-9" style = {styles.colMd9Style}>
            <ContactAddress num = {number} content = {cont} handleContactAddress = {this.handleContactAddress}/>
          </div>
          <div className = "col-md-1" style = {styles.colMd1StyleAddress}>
            <IconButton key = {number} onClick={() => this.handleContactAddressAddBtn(number)} tooltip="Add Address" iconStyle = {styles.iconColor} touch={true} tooltipPosition="bottom-right">
              <Add />
            </IconButton>
          </div>
        </div>
        </Tab>
      );
    }else{
      var cont = this.state.contactAddress[number-1];
      return(
        <Tab label = {"Address - "+number} key = {number}>
        <div className = "row" key = {number}>
          <div className = "col-md-9" style = {styles.colMd9Style}>
            <ContactAddress num = {number} content = {cont} handleContactAddress = {this.handleContactAddress}/>
          </div>
          <div className = "col-md-1" style = {styles.colMd1StyleAddress}>
            <IconButton key = {number} onClick={() => this.handleContactAddressClearBtn(number)} tooltip="Clear" iconStyle = {styles.iconColor} touch={true} tooltipPosition="bottom-right">
              <Clear />
            </IconButton>
          </div>
        </div>
        </Tab>
      );
    }
  },

  getFacComponent:function(number, length){
    if(number == length){
      var cont = this.state.facContactNumber[number-1];
      return (<div className = "col-md-6" key = {number}>
        <div className = "row">
          <div className = "col-md-10" style = {styles.colMd10Style}>
            <ContactNumber  num = {number} content = {cont} handleContactNumber={this.handleFacContactNum.bind(this, number)} hintText = {this.state.facTelephoneHintLabel} contactType={this.state.facTelephoneLabel}/>
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
            <ContactNumber num = {number} content = {cont} handleContactNumber={this.handleFacContactNum.bind(this, number)} hintText = {this.state.facTelephoneHintLabel} contactType={this.state.facTelephoneLabel}/>
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
      personOrganization = <PersonComponent       contactOrganizationLabel = {this.state.contactOrganizationLabel} contactOrganizationHintLabel = {this.state.contactOrganizationHintLabel} contactPersonLabel = {this.state.contactPersonLabel} contactPersonHintLabel = {this.state.contactPersonHintLabel} content = {this.state.personOrganization} handlePersonOrganization = {this.handlePersonOrganizationComponent} />;
    } else {
      personOrganization = <OrganizationComponent contactOrganizationLabel = {this.state.contactOrganizationLabel} contactOrganizationHintLabel = {this.state.contactOrganizationHintLabel} contactPersonLabel = {this.state.contactPersonLabel} contactPersonHintLabel = {this.state.contactPersonHintLabel} content = {this.state.personOrganization} handlePersonOrganization = {this.handlePersonOrganizationComponent} />;
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

    let contactAddressComponents = this.state.numContactAddress.map((number)=>
      this.getAddressComponent(number, this.state.numContactAddress.length)
    );

    let contactAddressMyTabs = this.getAddressComponentMyTabs(this.state.addressSelected);

    return(
      <div>
        <AppBar
          title={this.state.appBarTitle}
          showMenuIconButton={false}/>
          <div className = "container card-1" style = {styles.containerStyle}>

          <div className = "row">
            <div className = "col-md-1" />
            <div className = "col-md-4" style = {styles.titleStyle}>
              <Subheader style = {styles.subHeaderStyle}>{this.state.associationLabel}</Subheader></div>
            <div className = "col-md-4" style = {styles.div1LeftGap}>
              <Subheader style = {styles.subHeaderStyle}>{this.state.languageLabel} :</Subheader>
            </div>
            <div className = "col-md-2" style = {styles.divLeftGap}>
              <Toggle
                label={this.state.language}
                onToggle = {this.handleLanguageToogle}
                labelStyle = {styles.toogleLabelStyle}
              />
            </div>
          </div>
          <div className = "row">
            <div className = "col-md-1" style = {styles.associationStyle} />
            <div className = "col-md-4">
              {/*
              <SelectField
                style = {styles.selectFieldStyle}
                floatingLabelText="Association"
                value={this.state.value}
                onChange={this.handleChange}>
                  <MenuItem value={1} primaryText="Person" />
                  <MenuItem value={2} primaryText="Organization" />
              </SelectField>
              */}

              <RadioButtonGroup
                  name="associationRadioGroup"
                  defaultSelected={1}
                  style = {styles.selectFieldStyle}
                  onChange={this.handleChange}
                  >
                <RadioButton
                  value={1}
                  labelStyle = {styles.radioBtnLabelStyle}
                  iconStyle = {styles.radioBtnLabelStyle}
                  label={this.state.personLabel}
                />

                <RadioButton
                  value={2}
                  label={this.state.organizationLabel}
                  labelStyle = {styles.radioBtnLabelStyle}
                  iconStyle = {styles.radioBtnLabelStyle}
                />
                </RadioButtonGroup>

            </div>
            <div className = "col-md-6" />
          </div>
          {personOrganization}

          <div className = "row">
            <div className = "col-md-1" style={styles.associationStyle}/>
            <div className = "col-md-4">
              <TextField
                style = {styles.selectFieldStyle}
                hintText={this.state.contactPositionHintLabel}
                value={this.state.contactPosition}
                floatingLabelText={this.state.contactPositionLabel}
                onChange = {this.handleContactPosition}
                floatingLabelFixed={true}/>
            </div>
            <div className = "col-md-6"/>
          </div>

          {/*
          <ContactAddress content = {this.state.contactAddress} handleContactAddress = {this.handleContactAddress}/>
          */}
          {/*
          <Tabs>
          {contactAddressComponents}
          </Tabs>
          */}

          <MyTabs tabAddressLabel = {this.state.tabAddressLabel} addressSelected = {this.state.addressSelected} numTabs = {this.state.numTabs} handleTabsAddBtn = {this.handleTabsAddBtnTest} handleTabOnClick = {this.handleTabOnClick} handleTabClearOnClick = {this.handleTabClearOnClick}/>
          {contactAddressMyTabs}
          <div className = "row">
            <div className = "col-md-1" style = {styles.contactInfoMd1Style}/>
            <div className = "col-md-4" style = {styles.contactInformationTitle}>
              <Subheader style = {styles.subHeaderStyle}>{this.state.contactInformationLabel}</Subheader>
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
            <div className = "col-md-6" style = {styles.hoursOfServiceStyle}>
              {/*
              <ContactNumber  content = {this.state.hoursOfService} handleContactNumber={this.handleHoursOfService} hintText = "10:00 AM - 9:00 PM" contactType="Hours Of Service"/>
              */}
              <p style = {styles.addressTypeHeadingStyle}>{this.state.hoursOfServiceLabel}</p>
              <TimePicker hintText={"10:00 AM"} style= {styles.timePickerStyle} onChange={this.handleChangeTimePicker12} value = {this.state.timePickerDate}/>
            </div>
            <div className = "col-md-6" style = {styles.contactInstructionsStyle}>
              <ContactNumber  content = {this.state.contactInstructions} handleContactNumber={this.handleContactInstructions} hintText = {this.state.contactInstructionsHintLabel} contactType={this.state.contactInstructionsLabel}/>
            </div>
          </div>
          <div className = "row" >
            <div className = "col-md-1" style = {styles.saveClearBtnsStyle}/>
            <div className = "col-md-1">
              <RaisedButton label={this.state.saveBtnLabel} primary = {true} style={styles.saveBtnStyle} onClick={this.handleFormSubmit} />
            </div>
            <div className = "col-md-1">
              <RaisedButton label={this.state.clearBtnLabel} secondary={true} style={styles.clearBtnStyle} onClick = {this.handleClearBtn} />
            </div>
            <div className = "col-md-1">

            </div>
          </div>
          </div>
      </div>
    ) //return
  } //render
}); //Toolbar

module.exports = MyAwesomeReactComponent;
