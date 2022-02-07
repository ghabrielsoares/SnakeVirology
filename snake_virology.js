const { app, BrowserWindow } = require('electron')

app.whenReady().then(() => {

    //Criando uma nova janela
    const MinhaJanela = new BrowserWindow({
        width: 1920,
        height: 1080,
        webPreferences: {
            nodeIntegration: true,
        }
    });

    //Carregando a página html
    MinhaJanela.loadFile('lg.html');


    


})