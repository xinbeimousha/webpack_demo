const path = require('path')
module.exports = {
    entry:{
        entry:'./src/js/index.js'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    module:{},
    plugins:[],
    devServer:{}
}