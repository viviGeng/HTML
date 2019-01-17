var config = {
    port: 3000,
    ip: "localhost",
    //host:`http://${config.ip}:${config.port}`
   // host: `http://${ip}:${port}`
}
var getUrl = (method) => `http://${config.ip}:${config.port}/${method}`