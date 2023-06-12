const mysql = require('mysql')

const {MYSQL_LOCAL_CONFIG} = require('../config/db')

// 创建连接对象
const connection = mysql.createConnection({
    // host:'127.0.0.1',
    ...MYSQL_LOCAL_CONFIG
});

// 开始链接
connection.connect();

// 执行sql语句

// const selectsql = `select * from user`;
// connection.query(selectsql,(err,result) => {
//     if(err) {
//         console.error(err)
//         return;
//     }
//     console.log(result)
// })

// 关闭连接
// connection.end()

// 执行sql语句
function exceSQL(sql){
    const promise = new Promise((resolve,reject) => {
        connection.query(sql,(err,result) => {
            console.log('mysql err',err)
            console.log('mysql result',result)
            if(err){
                reject(err)
                return 
            }
            resolve(result)
        })

    })
    return promise
}

module.exports = {
    exceSQL
}