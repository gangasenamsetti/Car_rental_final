require('dotenv').config();
const url=process.env.MONGO_URL;
const express=require('express');
const cors=require('cors');
const monk=require('monk');
const server=express();
const db=monk(url)
db.then(()=>{console.log('database connected....')})
server.use(cors());
server.use(express.json());
const login=db.get('Logins');
const data=db.get('Data');
const images=db.get('images');
//--------------------------  To  GET LOGINS INFORMATION ---------------------------------------
server.get('/',(req,res)=>{login.find({}).then((result)=>res.send(result));   }  );
//---------------------------  To post the SIGNUP DATA into DATABASE ---------------------------
server.post('/signup',(req,res)=>{
login.insert({username:req.body.username,password:req.body.password,role:req.body.role}).then(()=>console.log('data inserted....'));   
data.insert({username:req.body.username,password:req.body.password,mobile:req.body.mobile,role:req.body.role,address:req.body.address,email:req.body.email}).then(()=>console.log('data inserted....')) })
//----------------------------To get Car Images from Database  ----------------------------------
server.get('/images',(req,res)=>{
   images.find({}).then((result)=>{res.send(result)}) });

//---------------------------- To store booking details  ----------------------------------------    
server.post('/booking',(req,res)=>{
    data.insert({Address:req.body.Address,Amount:req.body.Amount,CarName:req.body.CarName,Rating:req.body.Rating,color:req.body.color,days:req.body.days,feed:req.body.feed,from:req.body.from,mobile:req.body.mobile,imgadr:req.body.imgadr,
        licenceplate:req.body.licenceplate,liecenceNo:req.body.liecenceNo,miles:req.body.miles,model:req.body.model,price:req.body.price,username:req.body.username,year:req.body.year,status:'pending...'}).then((res)=>{console.log('data inserted........')})})
//---------------------------- To get Booking Information  ------------------------------------------
server.get('/bookinginfo/:id',(req,res)=>{data.find({username:req.params.id,status:{$ne:null}}).then((result)=>res.send(result))})
//--------------------------- To update Booking INFO  ---------------------------------------------
server.post('/update',(req,res)=>{data.update({_id:req.body.bookid},{$set:{ Address:req.body.Address,Amount:req.body.Amount,CarName:req.body.CarName,Rating:req.body.Rating,color:req.body.color,days:req.body.days,feed:req.body.feed,from:req.body.from,mobile:req.body.mobile,imgadr:req.body.imgadr,
    licenceplate:req.body.licenceplate,liecenceNo:req.body.liecenceNo,miles:req.body.miles,model:req.body.model,price:req.body.price,username:req.body.username,year:req.body.year,status:'pending...'}})})
//--------------------------- To Cancel the Booking ------------------------------------------------
server.get('/delete/:id',(req,res)=>{data.remove({_id:req.params.id})});
//-------------------------- To post feedback  -----------------------------------------------------
server.post('/postfeed',(req,res)=>{data.insert({model:req.body.model,licpl:req.body.licpl,dur:req.body.dur,amount:req.body.amount,feedback:req.body.feedback,username:req.body.username}); console.log('hiii')});
//------------------------- To get the Feedback ----------------------------------------------------
server.get('/getfeed/:id',(req,res)=>data.find({username:req.params.id,feedback:{$ne:null}}).then((resu)=>res.send(resu)));
//-------------------------- To get Owners ----------------------------------------------------------
server.get('/getowner',(req,res)=>{data.find({role:'Owner'}).then((resl)=>res.send(resl))});
//------------------------------ To get Users --------------------------------------------------------
server.get('/getuser',(req,res)=>{data.find({role:'User'}).then((resl)=>res.send(resl))});

//--------------------------- To delete USer/Owner ----------------------------------------------------
server.get('/deleteow/:id',(req,res)=>{ data.remove({_id:req.params.id}).then((resu)=>console.log(resu))});

server.listen(8009,()=>{
    console.log('server is listening on port 8009...');
})
