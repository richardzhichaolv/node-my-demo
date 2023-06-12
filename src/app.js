const handleRoutes = require('./route/index')

const querystring = require('querystring')
const { getPostData } = require('./controller/controller')
const serverHandler =  (req,res) => {
    res.setHeader('Content-Type','application/json')
    // res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Origin','http://localhost:8085')
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE')
    res.setHeader('Access-Control-Allow-Credentials',true)
    res.setHeader('Access-Control-Max-Age',10)
    res.setHeader('Access-Control-Allow-Headers','content-type')
    if(req.method === 'OPTIONS'){
        res.end()
        return;
    }
    // 获取path
    const url = req.url
    req.path = url.split('?')[0]
    // 解析query
    req.query = querystring.parse(url.split('?')[1])     
    getPostData(req).then(postdata => {        
        req.body = postdata
        const responseData = handleRoutes(req,res)
        if(responseData) {            
            responseData.then(result => {
                res.end(JSON.stringify(result))
            }).catch(err => {
                res.end(JSON.stringify(err))
            })
            return;
        }
        res.writeHead(404,{'Content-Type':'text/plain'})
        res.write('404 NOT FOUND')
        res.end()
    })
    
}

module.exports = serverHandler