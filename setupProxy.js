
// module.exports = (req, res, next) =>{
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     next();
//   };
//   var logMethod = function(req, res, next) {
//     console.log("method", req.method);
//     next();
//   };
//   // Call each middleware and then our handler
//   module.exports = (req, res, handler) => {
//     logMethod(req, res, () => {
//       enableCORS(req, res, () => {
//         handler(req, res);
//       });
//     });
//   };


// module.exports = (req, res, next)=> {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header('Access-Control-Expose-Headers', 'Content-Range');
//     res.header('Content-Range', 'customers 1-10/100');
//     next();
//    };
  


//   app.get('/', function(req, res, next) {
//     // Handle the get for this route
//   });
  
//   app.post('/', function(req, res, next) {
//    // Handle the post for this route
//   });

// module.exports = (req, res, next) => {
//     var allowedOrigins = [
//       "https://api.ote.co.ke/api/v1"
//     ];
//     var origin = req.headers.origin;
//     console.log(origin)
//     console.log(allowedOrigins.indexOf(origin) > -1)
//     // Website you wish to allow to
//     if (allowedOrigins.indexOf(origin) > -1) {
//       res.setHeader("Access-Control-Allow-Origin", origin);
//     }
    
//     // res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
    
//     // Request methods you wish to allow
//     res.setHeader(
//       "Access-Control-Allow-Methods",
//       "GET, POST, OPTIONS, PUT, PATCH, DELETE"
//     );
    
//     // Request headers you wish to allow
//     res.setHeader(
//       "Access-Control-Allow-Headers",
//       "X-Requested-With,content-type,Authorization"
//     );
    
//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader("Access-Control-Allow-Credentials", true);
    
//     // Pass to next layer of middleware
//     next();
// };



// const fetchJson = (url, options,req, res, next = {}) => {
//   if (!options.headers) {
//       options.headers = new Headers({ Accept: 'application/json' });
//       // options.headers = new Headers({ Accept:  'Content-Range: customers 0-4/27' });

//   }
  
//   // options.headers.set('Access-Control-Expose-Headers', 'Content-Range');
//   // options.headers.set('Content-Range', 'customers 1-10/100');
//   // options.headers['Content-Range'] = 'customers 1-10/100'
//   options.headers.set('X-Custom-Header', 'foobar');
  
//   return fetchUtils.fetchJson(url, options, res);
// }




// const fetchJson = (req, res, next) =>{
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     next();
//     try{
//       fetchJson()
//       .then(ftw)
//       .catch(wtf)
//     }catch(err){
//       console.error('Try Catch:', err)
//     }
  
//     function ftw(e){
//       console.log('ftw resolve:', e);
//     }
  
//     function wtf(e){
//       console.error('wtf reject:', e);
//     }
//   };


// module.exports = (url, options,req, res, next = {}) => {
//   if (!options.headers) {
//       res.headers = new Headers({ Accept: 'application/json' });
//       res.headers = new Headers({ Accept:  'Content-Range: customers 0-4/27' });

//   }
  
//   options.headers.set('Access-Control-Expose-Headers', 'Content-Range');
//   options.headers.set('Content-Range', 'customers 1-10/100');
//   options.headers['Content-Range'] = 'customers 1-10/100'
//   options.headers.set('X-Custom-Header', 'foobar');
  
//   return (url, options, res);
// }


// module.exports = (req, res, next) =>{
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     next();
//   };