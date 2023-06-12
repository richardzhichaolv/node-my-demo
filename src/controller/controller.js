
const { exceSQL } = require("../db/mysql.js")
const { SuccessModel,FailModel } = require("../model/responseModel");
const getPostData = (req) => {
    const promise = new Promise((resolve,reject) => {        
        let postData = ''
        req.on('data', chunk => {
            postData += chunk.toString()
        })
        req.on('end', () => {
            if(!postData && req.method !== 'GET'){
                resolve({
                    message:'meiyou canshu'
                })
                return;
            }
            resolve(postData ? JSON.parse(postData) : '')
        })
    })
    return promise
}

const getDatil = (req,res) => {
    let sql = `select * from user`
    const queryList = Object.keys(req.query)
    if(queryList.length > 0){
        sql += ' where '
        queryList.forEach((i,index) => { 
            if(i === 'userName'){
                sql += `${i} like '%${req.query[i]}%'`
            }else if(i === 'deleteFlag'){
                sql += `${i}=${req.query[i]}`
            }
            if(index <queryList.length -1) {
                sql += ' and '
            }else{
                sql += ';'
            }  
        })
    }
    return new Promise((resolve,reject) => {
        exceSQL(sql).then(result => {
            resolve(new SuccessModel(result))
        }).catch(err => {
            reject(new FailModel(err) )
        })
    })
}

const getList = () => {
    const sql = `select * from user;`
    return new Promise((resolve,reject) => {
        exceSQL(sql).then(result => {
            resolve(new SuccessModel(result))
        }).catch(err => {
            reject(new FailModel(err))
        })
    }) 
}

const createItem = (req) => {
    const sql = `insert into user (userName,password) values ('${req.body.userName}','${req.body.password}')`
    console.log('createItem sql',sql)
    return new Promise((resolve,reject) => {
        exceSQL(sql).then(result => {
            console.log('createItem result',result)
            resolve(new SuccessModel(result))
        }).catch(err => {
            reject(new FailModel(err))
        })
    }) 
}

const updateItem = (req) => {
    const sql = `update user set password = '${req.body.password}' where userName = '${req.body.userName}'`
    return new Promise((resolve,reject) => {
        exceSQL(sql).then(result => {
            resolve(new SuccessModel(result))
        }).catch(err => {
            reject(new FailModel(err))
        })
    }) 
}

const deleteItem = (req) => {
    const sql = `delete from user where userName = '${req.body.userName}'`
    return new Promise((resolve,reject) => {
        exceSQL(sql).then(result => {
            resolve(new SuccessModel(result))
        }).catch(err => {
            reject(new FailModel(err))
        })
    }) 
}
// dev.mysql.com/downloads/workbench
module.exports = {
    getPostData,
    getDatil,
    getList,
    createItem,
    updateItem,
    deleteItem
}