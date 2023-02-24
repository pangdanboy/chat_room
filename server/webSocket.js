 const ws = require('nodejs-websocket')

 const server = ws.createServer((conn) => {
     console.log(conn)
     conn.on('text', (str)=> {
         console.log('服务端接收到数据：' + str)
         setTimeout(()=> {
             conn.sendText('你好棒呀！哥哥')
         }, 2000)
     })
     conn.on('close', (code, reason) => {
         console.log('连接关闭', code, reason)
     })
     conn.on('error', (err) => {
         console.log('连接错误', err)
     })
 })
server.listen(3000)
