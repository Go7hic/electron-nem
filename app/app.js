var remote = require('remote');
const ipc = require('electron').ipcRenderer;
var browserWindow = remote.getCurrentWindow();
var webView;
var isMini = false;

var playControl = {};

ipc.on('playControl', (e, msg)=>
{
    webview.send('playControl', msg);
});

ipc.on('windowControl', (e, msg)=>
{
  if(msg == 'showMain')
  {
    browserWindow.show();
    if(isMini)
    {
      toggleMiniMode();
    }
  }
});

function toggleMiniMode()
{
  if(isMini)
  {
    browserWindow.setSize(982, 600);
    browserWindow.setAlwaysOnTop(false);
browserWindow.setMinimumSize(982, 600);
  }else
  {

    browserWindow.setSize(350, 100);
browserWindow.setMaximumSize(350, 100);
    browserWindow.setAlwaysOnTop(true);
  }

document.getElementById("title-text").style.width = isMini ? "900px" : "278px";

  document.getElementById("btn-minimize").style.display =  isMini ?  "inherit" : "none";
  webview.send('windowControl', 'toggleMiniMode');


  isMini = !isMini;

}
