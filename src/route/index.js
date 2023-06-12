const { SuccessModel,FailModel } = require("../model/responseModel");
const {getDatil,getList,createItem,updateItem,deleteItem} = require('../controller/controller')


const handleRoutes = (req,res) => {
    const method = req.method;
    const path = req.path
    if(path === '/api/list' && method === 'GET'){
        return getList(req,res)       
    }
    if(path === '/api/detail' && method === 'GET'){        
        return getDatil(req,res)
    }
    if(path === '/api/add' && method === 'PUT'){
        return createItem(req,res)
    }
    if(path === '/api/update' && method === 'POST'){
        return updateItem(req,res)
    }
    if(path === '/api/delete' && method === 'DELETE'){
        return deleteItem(req,res)
    }
}


module.exports = handleRoutes