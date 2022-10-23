"use strict";

const {	app, BrowserWindow } = require('electron');
const server = require('./app');

function createWindow()
{
	const win = new BrowserWindow({
		webPreferences: {
			nodeIntegration: true,
		}
	});

	// Window preferences on startup
	win.maximize();
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