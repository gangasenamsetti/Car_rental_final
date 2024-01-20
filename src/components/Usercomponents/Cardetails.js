import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
function Cardetails() {

  const colleadr=localStorage.getItem('detail');
  const user=JSON.parse(colleadr);
  const props={
    img:user.imgadr,
    licenceplate:user.licenceplate,
    miles:user.miles,
    model:user.CarName,
    color:user.color,
    year:user.year,
    price:user.price+'/day',
    feed:user.feed

  }

  const navigate = useNavigate();
  const [book1,setbook]=useState(false);

  function book()
  {
    setbook(true);
  }
  if(book1)
  {
   return (
   navigate('/booking')
   )
  }
  function back()
  {
   navigate('/dashboard');
  }
  return (
    <>

<Navbar/>
    <div className='row'>
        <div className='col-md-8 offset-md-2' style={{backgroundColor:'rgb(232, 232, 232)',border:"1px solid black",boxShadow:'5px 5px 4px',marginTop:'1%',borderRadius:'10px'}}>
            <center><h1 style={{marginTop:'1%'}}>Car Details</h1></center>
            <br/>
            <div className='col-md-4 offset-md-4'>
                <img src={props.img} width="100%" alt="reload" style={{boxShadow:'2px 3px 2px'}}/>
                <h5 style={{marginTop:'4%'}}><b>Licence Plate : {props.licenceplate}</b></h5>
                <h5><b>Miles Driven :{props.miles}</b></h5>
                <h5><b>Car Model : {props.model}</b></h5>
                <h5><b>Color :{props.color} </b></h5>
                <h5><b>Model Year : {props.year} </b></h5>
                <h5><b>Price : {props.price}</b></h5>
                <div><h5><b>Previous Feedback:{props.feed}</b></h5></div>
            </div>
            
        </div>
      
        <div className='col-md-2 offset-md-3' style={{marginTop:'2%'}}><button className='btn btn-lg' style={{backgroundColor:"black",color:'white'}}  onClick={back}> Back</button></div>
        <div className='col-md-2 offset-md-3' style={{marginTop:'2%'}}><button className='btn btn-lg' style={{backgroundColor:"black",color:'white'}}  onClick={book}> Book </button></div>
      </div>
      </>
  )
}

export default Cardetails
