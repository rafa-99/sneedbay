"use strict";

const {	app, BrowserWindow } = require('electron');
const path = require('path');
const server = require(path.join(__dirname,'/app'));

if (require('electron-squirrel-startup')) return app.quit();

function createWindow()
{
	const win = new BrowserWindow({
		icon: path.join(__dirname, '/public/static/images/sneed.png'),
		webPreferences: {
			devTools: false,
			nodeIntegration: true,
		}
	});

	// Window preferences on startup
	win.setMenu(null);
	win.loadURL('http://localhost:' + server.PORT);
}

app.whenReady().then(() => {
	createWindow();

	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0)
		{
			createWindow();
		}
	});
});

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin')
	{
		app.quit()
	}
});