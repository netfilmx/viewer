const {app, BrowserWindow} = require('electron')

// WINDOW
let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    frame: false,
    webPreferences: {
      nodeIntegration: true
    }
  })

  mainWindow.show()
  mainWindow.loadFile('index.html')
  mainWindow.setMenuBarVisibility(false)
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

// APP
app.on('ready', createWindow)
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit() // On macOS it is common for applications and their menu bar to stay active until the user quits explicitly with Cmd + Q
})
app.on('activate', function () {
  if (mainWindow === null) createWindow() // On macOS it's common to re-create a window in the app when the dock icon is clicked and there are no other windows open.
})
