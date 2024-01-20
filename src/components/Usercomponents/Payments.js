import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom';
import Navbar from './Navbar';
function Payments() {
  const [c,setc]=useState('');
  const [e,sete]=useState('');
  const [s,sets]=useState('');
  const [ci,setci]=useState('');
  const [co,setco]=useState('');
  const navigate=useNavigate();
  const detail=JSON.parse(localStorage.getItem('detail'));
  async function  success(){
    if(c===''||e===''||s===''||ci===''||co==='')
    document.getElementById('error').innerHTML="You need to fill all details";
    else
   {
    alert('Booking Successfull');
    navigate('/status');
  
   
   }
   if(detail.book==='2'){
    const response=await fetch('http://localhost:8009/booking',{
      method:"POST",
      body:JSON.stringify(detail),
      headers:{
        'Content-Type':'application/json'
      }
    })
    console.log(response);
   }
   else{
    const response=await fetch('http://localhost:8009/update',{
      method:"POST",
      body:JSON.stringify(detail),
      headers:{
        'Content-Type':'application/json'
      }
    })
    console.log(response);

   }
  }


  return (
    <>
    <Navbar/>
    <div>
    <center><h2>Payment Details</h2></center>
    <div className='row' style={{marginBottom:'2%'}}>
    <div className='col-md-6'>
        <div className='row' style={{marginTop:'2%'}}>
            <div className='col-md-8 offset-md-3'>
                <h4>Enter Your Payment  Details</h4>
                <p id='error' style={{color:'red'}}></p>
                <input type='text' name='cardno' placeholder='Card number' onChange={(e)=>setc(e.target.value)} style={{width:'100%',height:'25%',borderRadius:'10px'}}/>
                &nbsp;
                <input type='text' name='cvv' onChange={(e)=>sete(e.target.value)} placeholder='Expiry date  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  MM/YY CVV' style={{width:'100%',height:'25%',borderRadius:'10px'}}/>
               &nbsp; <input type='text' onChange={(e)=>sets(e.target.value)} name='address' placeholder=' Street Address' style={{width:'100%',height:'25%',borderRadius:'10px'}}/>
               &nbsp; <input type='text' onChange={(e)=>setci(e.target.value)} name='city' placeholder=' city' style={{width:'100%',height:'25%',borderRadius:'10px'}}/>
              &nbsp; <input type='text' onChange={(e)=>setco(e.target.value)} name='country' placeholder=' country' style={{width:'100%',height:'25%',borderRadius:'10px'}}/>
           
            </div>
        </div>
        </div>
        <div className='col-md-6'>
        <div className='row' style={{marginTop:'2%'}}>
            <div className='col-md-8 offset-md-3'>
                <img src={detail.imgadr} alt='reload' width='100%'/>
                <h4>Car Booking Payment  Details</h4>
                &nbsp;
                <h4>Car Model :{detail.CarName}</h4>
                <h4>Car Liecence Plate :{detail.licenceplate}</h4>
                <h4>Amount :{detail.Amount}</h4>
&nbsp;&nbsp;

                <center><button className='btn btn-lg btn-primary' onClick={success}>PAY NOW</button></center>
                <p id='success' style={{color:'green'}}></p>
            </div>
        </div>
        </div>
    </div>
      </div>
    </>
  )
}

export default Payments
