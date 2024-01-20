import React from 'react'
import OwnerNav from './OwnerNav';
import { useNavigate } from 'react-router-dom';
function CarDetails() {
    const colleadr=localStorage.getItem('card');
  const user=JSON.parse(colleadr);
  const props={
    img:user.imgadr,
    licenceplate:'AP 37 AH 2056',
    miles:'200',
    model:'SUV',
    color:'red',
    year:'2020',
    price:'Rs.2000/day',
    feed:"Good Performance"

  }

  const navigate = useNavigate();
  function back()
  {
   navigate('/ownerdashboard');
  }
  return (
    <>

<OwnerNav/>
    <div className='row' style={{marginTop:'2%'}}>
        <div className='col-md-1 offset-md-11'><button className='btn btn-primary' onClick={back}> Back</button></div>
        <div className='col-md-8 offset-md-2' style={{backgroundColor:'rgb(232, 232, 232)',border:"1px solid black",boxShadow:'5px 5px 4px',marginTop:'1%',borderRadius:'10px'}}>
            <center><h1 style={{marginTop:'1%'}}>Car Details</h1></center>
            <br/>
            <div className='col-md-4 offset-md-4'>
                <img src={props.img} width="100%" alt="reload" style={{boxShadow:'2px 3px 2px'}}/>
                <h5 style={{marginTop:'4%'}}><b>Licence Plate : {props.licenceplate}</b></h5>
                <h5><b>Miles Driven :{props.miles}</b></h5>
                <h5><b>Car Model : {props.model}</b></h5>
                <h5><b>Color :{props.color} </b></h5>
                <h5><b>Model Year : {props.model} </b></h5>
                <h5><b>Price : {props.price}</b></h5>
                <div><h5><b>Previous Feedback:{props.feed}</b></h5></div>
            </div>
            
        </div>
      
       </div>
      </>
  )
}

export default CarDetails
