const { app, BrowserWindow } = require('electron');

let win; // 창 객체를 전역 변수로 관리

function createWindow () {
  win = new BrowserWindow({
    width: 320,
    height: 480,
    resizable: false,
    useContentSize: true,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.loadFile('index.html');

  // 창이 닫힐 때 객체 해제
  win.on('closed', () => {
    win = null;
  });
}

app.whenReady().then(createWindow);

// 모든 창이 닫히면 앱을 완전히 종료 (macOS 포함)
app.on('window-all-closed', () => {
  app.quit(); 
});

// 맥에서 독 아이콘을 클릭했을 때 창이 없으면 다시 생성 (보험용)
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
