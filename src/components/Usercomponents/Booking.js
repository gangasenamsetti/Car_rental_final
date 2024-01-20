import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './booking.css'
function Booking() {

  let detail=JSON.parse(localStorage.getItem('detail'));
 
  const navigate = useNavigate();
    const [booking, setFormData] = useState({
		model:detail.CarName,
		LiecencePlate:detail.licenceplate,
		from: '',
        days:'',
        name:'',
        mobile:'',
        liecenceNo:'',
        Address:''
	});
 const handleSubmit=(e)=>{
  detail.from=booking.from;
  detail.days=booking.days;
  detail.mobile=booking.mobile;
  detail.liecenceNo=booking.liecenceNo;
  detail.Address=booking.Address;
  detail.Amount=parseInt(booking.days)*parseInt(detail.price);
  detail.bookid='2';
  localStorage.setItem('detail',JSON.stringify(detail));
 navigate('/payments')
 }
	const handleChange = (event) => {
		setFormData({ ...booking, [event.target.name]: event.target.value });
	};


function back(){
  navigate('/cardetails')
   
}
  return (
   <>
   <Navbar/>
    <div>
      <center><h3>Car Booking Details</h3></center>
      <div className='row'>
      <form id='form'>
      <h4 style={{marginLeft:'17%'}}>Car Details:</h4>
        <div className='col-md-8 offset-md-2' style={{backgroundColor:'rgb(232, 232, 232)',borderRadius:'4px',boxShadow:'5px 5px 4px'}}>

      <div className='row' style={{marginTop:'1%'}}>
  
        <div className='col-md-6 offset-md-2' >
       
       <table>
            <thead></thead>
            <tbody>
                <tr><th>Car Model:</th><td><input type='text' name='model' value={booking.model}  disabled/></td></tr>
                <tr><th>Licence Plate</th><td><input type='text' name='LiecencePlate' value={booking.LiecencePlate} disabled/></td></tr>
                <tr><th>From</th><td><input type='date' name='from'onChange={(e)=>handleChange(e)} required/></td></tr>
                <tr><th>Days : </th><td><input type='number'name='days' value={booking.days} onChange={(e)=>handleChange(e)} required/></td></tr>
            </tbody>
        </table>
        
   
        </div>
    
       
      </div>
        </div>
        <h4 style={{marginLeft:'17%',marginTop:'1%'}}>User Details:</h4>
        <div className='col-md-8 offset-md-2' style={{backgroundColor:'rgb(232, 232, 232)',borderRadius:'4px',boxShadow:'5px 5px 4px'}}>
      <div className='row' style={{marginTop:'1%'}}>
  
        <div className='col-md-6 offset-md-2'>
       
       <table responsive >
            <thead></thead>
            <tbody>
                <tr><th>Name:</th><td><input type='text' name='name' value={booking.name} onChange={(e)=>handleChange(e)} required/></td></tr>
                <tr><th>Mobile</th><td><input type='text' minLength={10} maxLength={10} name='mobile'onChange={(e)=>handleChange(e)} required/></td></tr>
                <tr><th>Licence No</th><td><input type='text' name='liecenceNo' value={booking.liecenceNo} onChange={(e)=>handleChange(e)} required/></td></tr>
                
                <tr><th>Address : </th><td><textarea name='Address' onChange={(e)=>handleChange(e)}></textarea></td></tr>
            </tbody>
        </table>
        
   
        </div>
    
       
      </div>
        </div>
       <div className='row'>
        <div className='col-md-2 offset-md-3' style={{marginTop:'1%'}}><button className='btn btn-sm' style={{backgroundColor:'black',color:'white'}} onClick={back}>Back</button></div>
        <div className='col-md-2 offset-md-3' style={{marginTop:'1%'}}><button className='btn btn-sm' style={{backgroundColor:'black',color:'white'}} onClick={handleSubmit}>Payments</button></div>
       </div>
        </form>
      </div>
      </div>
   </>
  )
}

export default Booking
