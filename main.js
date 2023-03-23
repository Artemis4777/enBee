const { app, BrowserWindow } = require("electron");
const path = require('path')

//call a window
const createWindow = () => {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
          }
	});

	win.loadFile("index.html");
    //mainWindow.webContents.openDevTools()
};

//open
app.whenReady().then(() => {
	createWindow();

    //open window on mac
	app.on("activate", () => {
		if (BrowserWindow.getAllWindows().length === 0) createWindow();
	});
});

//quit if all windows are closed if not on mac
app.on("window-all-closed", () => {
	if (process.platform !== "darwin") app.quit();
});
