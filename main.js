const { app, BrowserWindow } = require("electron");
const path = require("path");
if (require("electron-squirrel-startup")) app.quit();

//call a window
const createWindow = () => {
	const win = new BrowserWindow({
		width: 1400,
		height: 800,
		webPreferences: {
			preload: path.join(__dirname, "preload.js"),
		},
	});

	win.loadURL("https://pw.fidelitypayment.com/");
	//win.loadFile("index.html");
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
