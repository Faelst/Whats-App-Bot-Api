const {appServer, port} = require('./config/server')

module.exports = () => {
    try {
        appServer.listen(port,() => {
            console.log(`------------------------\n--CHAT-BOT-API STARTED--\n------------------------\n-------LISTEN ON--------\n------------------------\n---http:localhost:${port}--\n------------------------`)
        })
    } catch (error){
        console.log('Serve not started: ',error)
    }
}