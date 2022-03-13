

function checkAuth(req,res,next){
    if(req.body.user==="shahid"){
        next();
    }else{
        res.status(401).json({
            message:"you don't have permission to visit this data!"
        });
    }
}


module.exports =  checkAuth;