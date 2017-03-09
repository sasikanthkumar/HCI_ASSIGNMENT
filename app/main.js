var electron = require('electron');
var BrowserWindow = electron.BrowserWindow;
var app = electron.app;
var ipc = electron.ipcMain;
var globalShortcut = electron.globalShortcut;

app.on('ready', function() {
  var appWindow, infoWindow;
  console.log("ready");
  appWindow = new BrowserWindow({
    width: 1500,
    height: 800,
    show: false
  }); //appWindow

  globalShortcut.register('F1', () => {
    console.log("Command or control Y clicked");
    infoWindow.show();
  });

  appWindow.loadURL('file://' + __dirname + '/index.html');

  infoWindow = new BrowserWindow({
    width: 400,
    height: 300,
    transparent: false,
    show: false,
    frame: true,
  }); //infoWindow

  infoWindow.loadURL('file://' + __dirname + '/info.html');

  appWindow.once('ready-to-show', function() {
    appWindow.show();
  }); //ready-to-show

  ipc.on('openInfoWindow', function(event, arg){
    event.returnValue='';
    infoWindow.show();
  }); //closeInfoWindow

  ipc.on('closeInfoWindow', function(event, arg){
    event.returnValue='';
    infoWindow.hide();
  }); //closeInfoWindow

}); //app is ready
