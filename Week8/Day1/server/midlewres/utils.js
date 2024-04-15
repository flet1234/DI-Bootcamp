const logger = (req,res,next) =>{
    console.log('url=>', res.url);
    console.log('params=>', req.params);
    console.log('method=>', req.method);
    next()
}

const auth = (req,res,next) =>{
    const {admin} = req.query
    if(admin === 'john'){
        next()
    }
    else{
        res.send('You are not authorised')
    }
}


module.exports={
    logger,
    auth
}