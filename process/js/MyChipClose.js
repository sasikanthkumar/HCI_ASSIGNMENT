var React = require('react');
var IconButton = require('../../node_modules/material-ui/IconButton').default;
var FlatButton = require('../../node_modules/material-ui/FlatButton').default;
var Clear = require('../../node_modules/material-ui/svg-icons/content/clear').default;

const styles = {
  iconBtnStyle:{
    minWidth:'48px',
  },
  divDisplayStyle:{
    display:'flex',
  },
  btnStyle:{
    minWidth:'115px',
    color:'#757575',
  },
  labelStyle:{
    textTransform:'none',
  },
  labelStyleSelected:{
    textTransform:'none',
    borderBottom: '2px solid #757575',
    paddingBottom: '7px',
  },
}

var MyChipClose = React.createClass({
  render: function(){
    if(this.props.addressNum == this.props.addressSelected){
      return(
        <div style = {styles.divDisplayStyle}>
          <FlatButton label={this.props.chipLabel} style = {styles.btnStyle} labelStyle = {styles.labelStyleSelected} onClick={() => this.props.chipOnClick(this.props.addressNum)}/>
          <FlatButton icon={<Clear color={'#b3b3b3'}/>} style = {styles.iconBtnStyle}   onClick={() => this.props.chipClearOnClick(this.props.addressNum)} />
        </div>
      );
    }else {
      return(
        <div style = {styles.divDisplayStyle}>
          <FlatButton label={this.props.chipLabel} style = {styles.btnStyle} labelStyle = {styles.labelStyle} onClick={() => this.props.chipOnClick(this.props.addressNum)}/>
          <FlatButton icon={<Clear color={'#b3b3b3'}/>} style = {styles.iconBtnStyle} onClick={() => this.props.chipClearOnClick(this.props.addressNum)}/>
        </div>
      );
    }
  }
});

module.exports = MyChipClose;
