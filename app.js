const fs=require('fs');
//synchronous mode or blocking mode
// const textin=fs.readFileSync('./txt/myname.txt','utf-8');
// console.log(textin);
// const textout=`1.${textin}\n2. the above code is written in app.js file`;
// fs.writeFileSync('./txt/output.txt',textout);

//Asynchronus mode for reading or writing files
fs.readFile('./txt/abc.txt','utf-8',(err,data)=>{
    console.log(data);
})
console.log("file read hua kya??1");
