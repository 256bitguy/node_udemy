//in this lecture we will be making a web server capable of accepting request and send
//ing back responses

 const http=require('http');

 // this is going to make a url
 const url=require('url');
 //it will help us to build networking capability such as building an http server
 ////////////////////////
 ////    SERVER
// we have to save this result of server in  a new variable

const server = http.createServer((req,res)=>{
     const pathName=req.url;
     if(pathName==='/' || pathName==='/overview'){
        res.end("this page is overview")
     }else if(pathName==='bikku'|| pathName==='/bikku'){
        res.end("this is bikku at page")
     }else{// http header is a piece of information about the response that we are sending back
        res.writeHead(404,{
                'content-type':'text/html',
                'my-header':'hello-world'
        });
        res.end("<h1>Page not Found</h1>")
     }
    
 })
 // it need a callback function and hit each time a new request hits server
// req object contains all kind of stuff like the request url and other stuff
// res object gives us a lot of tools basically fordealing with the response 
//     1.end method is very very simple method to response in this case
// creating ths sever was the first part and the second part is to listen the request
//coming from the client
//standart ip address for local host 127.0.0.1 
server.listen(8000,'127.0.0.1',()=>{
 console.log("listening to the requset !!");
});//this will start listening at this port
// when the server was not listening and we run this file then it simply completes the 
// work and close the file but now when we have started the server by listening at port
// it does not terminate the file because of event loop
// if the server stop here/ terminate here then we will not be able to accept the request
/////////////////////////
// --------------------ROUTING-----------
/*
 routing basically means implementing different actions for different urls

*/
