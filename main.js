//Main file for the creation of the electron window

//electron dev tools installer code
const {
  default: installExtension,
  REDUX_DEVTOOLS,
  REACT_DEVELOPER_TOOLS,
} = require("electron-devtools-installer");

//install electron-is-dev (check if electron is in dev mode or not) and require in here
const isDev = require("electron-is-dev");

const { app, BrowserWindow, session } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor: "white",
    webPreferences: {
      devTools: true,
    },
  });

  win.loadFile("index.html");
}
//requried for developer environment, comment this require fuction out before packaging in Electron
require("electron-reload")(__dirname, {
  // electron: path.join(__dirname, "node_modules", ".bin", "electron"),
  electron:
    "/Users/mhaq 1/Desktop/opensource/Kafmira/node_modules/.bin/electron",
});

//Property to update icon in MacOS dock
// if(process.platform === 'darwin'){
//   app.dock.setIcon('./logo/KafmiraLogoFin.png');
// }

app
  .whenReady()

  .then(() => {
    createWindow();
  });
