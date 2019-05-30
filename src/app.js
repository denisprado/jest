ct express = require('express')

pController() {
constructor() {
    this.express = express();

    this.middlewares();
        this.routes();
 


    middlewares() {
        this.exp ress.use(express.json())
    }

    routes(){
        this.express.use(require('./routes'))
    }
}

module.exports = new AppController().express;