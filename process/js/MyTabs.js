var React = require('react');
var MyChipClose = require('./MyChipClose');
var MyChip = require('./MyChip');
var Add = require('../../node_modules/material-ui/svg-icons/content/add').default;
var FlatButton = require('../../node_modules/material-ui/FlatButton').default;
var IconButton = require('../../node_modules/material-ui/IconButton').default;


const styles = {
  wrapper: {
    display: 'flex',
    overflowX:'auto',
    marginLeft: '24px',
    marginBottom: '20px',
    marginTop: '20px',
  },
  iconBtnStyle:{
    minWidth:'48px',
    bottom: '5px',
    padding:'0px',
  },
}

var MyTabs = React.createClass({

  getChipClose: function(number, length, addSelected){
      if(length == 1){
        return(<MyChip addressNum = {number} key = {number} chipLabel = {this.props.tabAddressLabel + " - " + number} addressSelected = {addSelected} chipOnClick = {this.props.handleTabOnClick}/>);
      }else{
        return(<MyChipClose addressNum = {number} key = {number} chipLabel = {this.props.tabAddressLabel + " - " + number} addressSelected = {addSelected} chipOnClick = {this.props.handleTabOnClick} chipClearOnClick = {this.props.handleTabClearOnClick}/>);
      }
  },

  render: function(){

    let chipsList = this.props.numTabs.map((number) =>
      this.getChipClose(number, this.props.numTabs.length, this.props.addressSelected)
    );

    return(
      <div className = "row">
        <div className = "col-md-1"/>
        <div className = "col-md-10">
          <div style={styles.wrapper}>
            {chipsList}
            <IconButton tooltip="Add Address" tooltipPosition="center" style = {styles.iconBtnStyle} onClick = {this.props.handleTabsAddBtn}>
              <Add color={'#757575'}/>
            </IconButton>

          </div>
        </div>
      </div>
    );
  }
});

module.exports = MyTabs;
