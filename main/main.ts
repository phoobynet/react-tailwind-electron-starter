import { app, BrowserWindow, screen } from 'electron'
import contextMenu from 'electron-context-menu'
import * as path from 'path'

const isDevelopment = process.env.NODE_ENV === 'development'
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = 'true'
const disposeContextMenu = contextMenu({ showInspectElement: true })

async function createWindow(): Promise<void> {
  let win: BrowserWindow

  if (isDevelopment) {
    const primaryDisplay = screen.getPrimaryDisplay()

    // in development mode the window will appear on the right hand side of the screen
    win = new BrowserWindow({
      width: primaryDisplay.workAreaSize.width / 2,
      height: primaryDisplay.workAreaSize.height,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
      },
      y: 23,
      x: primaryDisplay.workAreaSize.width / 2,
    })
    await win.loadURL('http://localhost:5173')
    win.webContents.openDevTools({
      mode: 'bottom',
    })
  } else {
    win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
      },
    })
    await win.loadURL(`file://${path.join(__dirname, '../dist/index.html')}`)
  }
}

app.whenReady().then(async () => {
  await createWindow()
})

app.on('activate', async () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    await createWindow()
  }
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    disposeContextMenu()
    app.quit()
  }
})
