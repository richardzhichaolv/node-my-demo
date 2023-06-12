const http = require('http')

const serverHandler = require('./src/app')

const server = http.createServer(serverHandler)

// mac电脑ip地址：   192.168.0.100
// 笔记本电脑ip地址：   192.168.0.103 ip随意分配

server.listen(5050,() => {
    console.log('监听到5050端口')
})