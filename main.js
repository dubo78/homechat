const { app, BrowserWindow } = require('electron');

function createWindow () {
  const win = new BrowserWindow({
    width: 800, // 에러 창을 같이 보려면 크기를 넓히는 게 좋아
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });
  win.loadFile('index.html');
  win.webContents.openDevTools(); // 이 줄을 추가!
}

app.whenReady().then(createWindow);
