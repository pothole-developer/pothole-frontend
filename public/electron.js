const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });

    console.log(`${path.join(__dirname, 'build/index.html')}`);
    console.log(process.env.mode);

    if (process.env.mode === 'dev') {
        mainWindow.loadURL('http://localhost:3000')
    } else {
        mainWindow.loadURL(
            url.format({
              pathname: path.join(__dirname, '../build/index.html'),
              protocol: 'file:',
              slashes: true
            })
        );
    }

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});
