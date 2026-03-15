const { app, BrowserWindow } = require('electron');

function createWindow () {
  const win = new BrowserWindow({
    width: 320,
    height: 480,
    resizable: false,      // 창 크기 조절 금지
    useContentSize: true,   // 제목 표시줄 제외, 콘텐츠 영역 기준 크기
    autoHideMenuBar: true,  // 메뉴바 숨김 (Windows)
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.loadFile('index.html');
  
  // 개발자 도구를 끄고 싶다면 아래 줄을 주석 처리(//) 하세요.
  // win.webContents.openDevTools(); 
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
