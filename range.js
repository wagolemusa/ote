module.exports = (req, res, next) =>{
    res.header('content-type', 'application/json')
    // res.header('Access-Control-Expose-Headers: X-Total-Count')
    next() 
  };
  
