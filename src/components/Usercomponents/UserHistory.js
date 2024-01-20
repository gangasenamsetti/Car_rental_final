import React from 'react';
import { useState,useEffect } from 'react';
import './UserHist.css';  
import Navbar from './Navbar';
function Datait(props){
  return(<><tr><td>{props.sno}</td><td>{props.model}</td><td>{props.licpl}</td><td>{props.duration}</td><td>{props.amount}</td></tr></>)
}
function UserHistory() {
  const user=localStorage.getItem('username');
//  const detail=JSON.parse(localStorage.getItem('detail'));
     const [model,setModel]=useState('');
     const [licpl,setlic]=useState('');
     const [dur,setdur]=useState(0);
     const [amount,setamo]=useState(0);
     const [feed,setFeed]=useState('');
     const [feedb,setfeedb]=useState([]);
     const postfeed=async(e)=>{
      e.preventDefault();
      if(model===''||licpl===''||dur===0||amount===0||feed==='')
      document.getElementById('error').innerHTML="ALL Fields Must be Filled";
      else{
        document.getElementById('error').innerHTML="";
        console.log(model+" "+user+" "+licpl);
        setModel('');setlic('');setdur(0);setamo(0);setFeed('');
        const res= await fetch('http://localhost:8009/postfeed',{method:"POST",body:JSON.stringify({model:model,licpl:licpl,dur:dur,amount:amount,feedback:feed,username:user}),
      headers:{'Content-Type':'application/json'}})
      console.log(res);
      }

     }
     const getfeed=async()=>{
      const res=await fetch('http://localhost:8009/getfeed/'+user,{method:"GET"});const  resp=await res.json(); setfeedb(resp);
     }
     useEffect(()=>{
      getfeed();
     })
    return (
       <>
       <Navbar/>
          <div className='row'>
        <div className='col-md-10 offset-md-1 '>
        <form className='form1'>                
                <h3 style={{textAlign:'center',marginTop:'2%'}}>Post Feedback</h3>          
                <div className='row'>
                <div className='col-md-4 offset-md-2'>
                <label id='2'>Car Model:&nbsp; </label>
                <input type="text"value={model} onChange={(e)=>setModel(e.target.value)} />
                </div>
                <div className='col-md-4 '>
                <label id='2'>Licence Plate:&nbsp;</label>
                <input type="text" value={licpl} onChange={(e)=>setlic(e.target.value)} />
                </div>
                </div><br/>
                <div className='row'>
                <div className='col-md-4 offset-md-2'>
                <label id='2'>Duration:&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input type="text" value={dur} onChange={(e)=>setdur(e.target.value)} />
                </div>
                <div className='col-md-4 '>
                <label id='2'>Amount Paid:&nbsp;</label>
                <input type="text" value={amount} onChange={(e)=>setamo(e.target.value)} />
                </div>
                </div>
                <br/>
                <div className='row'>
                <div className='col-md-8 offset-md-2'>
                <label id='2'>Feedback : </label><br/>
                <textarea style={{width:'90%',height:'10vh'}} value={feed} onChange={(e)=>setFeed(e.target.value)}></textarea>
               </div>
                </div>
             
               <center> 
               <p id='error'style={{color:'red'}}></p>
                <button className="btn btn-primary btn-sm" onClick={(e)=>postfeed(e)} style={{marginBottom:'2%',marginTop:'2%'}}>Submit</button></center>
                
            </form>
        </div>
          </div>
          
           <div className='row' style={{marginTop:"1%"}}>
           <center><h3 style={{textAlign:'center'}}>Previous History Details</h3> </center>
            <div className='col-md-10 offset-md-1'style={{marginTop:"1%"}} >
            
            <table>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Car Model</th>
          <th>Licence Plate</th>
          <th>Duration</th>
          <th>Feedback</th>
        </tr>
      </thead>
      <tbody>
       {feedb.map((ele,i)=>{return (<Datait sno={i+1} model={ele.model} licpl={ele.licpl} duration={ele.dur} amount={ele.feedback}/>)})}
      </tbody>
    </table>
            </div>
           </div>

    </>
  );
}

export default UserHistory;

