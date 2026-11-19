const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('feastNative', {
  isDesktop: true,
  launchSteam: (appId) => ipcRenderer.invoke('feast:launch-steam', appId)
});
