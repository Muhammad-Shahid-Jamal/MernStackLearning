
/**
 * Function to check URL
 */

 const checkURL = (req,res,next)=>{ 
    console.log("current route is " , req.originalUrl)
    next();
}

module.exports =  checkURL;