import React from'react';
import { useState,useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './UseSta.css';
import Navbar from './Navbar';
function Datait(props){
  return(
    <>
    <tr>
      <td>{props.sno}</td><td>{props.bookid}</td><td>{props.username}</td><td>{props.carname}</td>
      <td>{props.amount}</td><td>{props.licencp}</td><td>{props.status}</td>
    </tr>
    </>
  )
}
function UserStatus()
{
  const navi=useNavigate();
  const result=localStorage.getItem('username');
  const [status,setStatus]=useState([]);
  const [bookid,setbookid]=useState('');
  const [remaindays,setRemain]=useState(0);
  const [bokdat,setBokda]=useState('')
  const [timlft,setTimelft]=useState(0);
  const [amount,setAmount]=useState(0);

  const getStatus=async()=>{
    const response= await fetch('http://localhost:8009/bookinginfo/'+result,{
      method:"GET"
    })
  
    const res=await response.json();
    console.log(res);
    setStatus(res);
  }

  const modify=async(e)=>{
    e.preventDefault();
    if(bookid===''||remaindays===0||bokdat==='')
    document.getElementById('error1').innerHTML="Youu need to fill all the required fileds";
    else{
      document.getElementById('error1').innerHTML=" ";
      
      let detail=JSON.parse(localStorage.getItem('detail'));
      detail.Amount=parseInt(detail.price)*remaindays;
      detail.from=bokdat;
      detail.bookid=bookid;
      detail.days=remaindays;
      localStorage.setItem('detail',JSON.stringify(detail));
      navi('/payments')

    }

  }
  const terminate=async(e)=>{
    e.preventDefault();
    if(bookid===''||amount===0||timlft===0)
    document.getElementById('error2').innerHTML="Youu need to fill all the required fileds";
    else{
      document.getElementById('error2').innerHTML="";
      alert('Booking Cancelled.....')
      const res=await fetch('http://localhost:8009/delete/'+bookid,{method:"GET"})
      const re=await res.json();console.log(re);
      alert('Booking Cancelled.....')
    }
    
  }
  useEffect(()=>{
    getStatus();
  })
    return(
       <>
       <Navbar/>
        <div >
            <center>
                <h3 style={{textAlign:'center'}}>Current Status:</h3>
            <div className='row'>
          <div className='col-md-5  offset-md-1'>
            <center><h4>Here You can Edit Your Booking Details</h4></center>
            <p id='error1' style={{color:'red'}}></p>
          <form className='f1'>
          <label style={{marginLeft:'-6%'}} > Booking Id:&nbsp;</label><input type="text" onChange={(e)=>setbookid(e.target.value)} style={{marginLeft:'4%'}} />
                <br/><br/>
         <label >Remaining Days:&nbsp;</label><input type="number" onChange={(e)=>setRemain(e.target.value)} />
                <br/><br/>                             
        <label >Booking Date:&nbsp;&nbsp;</label><input type="date" placeholder='m/dd/yyyy' onChange={(e)=>setBokda(e.target.value)} /><br/><br/>
                <button className="btn btn-success btn-sm" onClick={(e)=>modify(e)}>Modify Booking Details</button>
            </form>  
            </div>   
          <div className='col-md-5 ' >
          <center><h4>Here You can Cancel Your Booking </h4></center>
          <p id='error2' style={{color:'red'}}></p>
          <form className='f1'>
         <div style={{marginLeft:'1%'}}>
         <label style={{marginLeft:'-3%'}} >
                        Booking Id &nbsp;&nbsp;&nbsp;
                </label>
              <input type="text" onChange={(e)=>setbookid(e.target.value)}  />
           
         </div>
            <br/>
        
            <div>
            <label style={{marginLeft:'-3%'}} >
                  Days Left &nbsp;
                </label>
               <input type="text" onChange={(e)=>setTimelft(e.target.value)} style={{marginRight:'-9%'}}/>
            </div>
            <br/>
            <div>
            <label  > Amount Paid:&nbsp;&nbsp;
                </label>
               <input type="text"  onChange={(e)=>setAmount(e.target.value)}/>
            </div>
          <br/>
         
                
<button className="btn btn-danger btn-sm" onClick={(e)=>terminate(e)}>Terminate Booking</button>
        </form>  
          
          </div>
            </div>                  
            </center>
            <h3 style={{textAlign:'center',marginTop:'2%'}}>Booking Information</h3>
            <div className='row'>
                <div className='col-md-10 offset-md-1'>
                  <table>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Booking Id</th>
                            <th>No OF DAYS</th>
                            <th>Booking Date</th>
                            <th>Amount</th>
                            <th>Licence Plate</th>
                            <th>Status</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                     {status.map((ele,i)=>{ return  (<Datait sno={i+1} bookid={ele._id} username={ele.days} carname={ele.from} amount={ele.Amount} licencp={ele.licenceplate} status={ele.status}/>)})}
                    </tbody>
                  </table>
                
                </div>
            </div>
            <br/>
       </div>
       </>
    );

}
export default UserStatus;