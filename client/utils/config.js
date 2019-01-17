var config = {
    port: 3000,
    ip: "localhost",
   // host: `http://${this.ip}:${this.port}`
}

var getUrl = (method) => `http://${config.ip}:${config.port}/${method}`