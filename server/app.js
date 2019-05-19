
import fs  from 'fs';
import express from 'express';

const Server = () => {
  const app = express();

  function start(){
    cargarDirectorios();
    
    app.get('/', function (req, res) {
      res.send('Hello World!');
    });
  
    app.listen(3000, function () {
      console.log('Example app listening on port 3000!');
    });
  }

  function cargarDirectorios(){
    let dirServices = './services';
    const dirss = fs.readdirSync(dirServices);
    for (let i = 0; i < dirss.length; i++) {
        let path = dirss[i];
        let pathTabla = `${dirServices}/${path}`;
        let pathApi = `${pathTabla}/api.js`;
        if (fs.lstatSync(pathTabla).isDirectory() && fs.existsSync(pathApi)) {
            //console.log("este es el path", pathApi);
            let api = require('.' + pathApi);
            console.log("esto es api", api[path]);
            //let api =import {path} from pathApi
            api[path](app, `/${path}`);
        }
    }
  }

  function close(){
    this.app.close();
  }

  return {
    start: start()
  }
  
};

export {Server};

