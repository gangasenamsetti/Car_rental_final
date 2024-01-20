import React from 'react'
import Adminnav from './Adminnav';
import { useNavigate } from 'react-router-dom';
function Admincar() {
    const nav=useNavigate();
    const ar=JSON.parse(localStorage.getItem('detail'))
    function back(){
        nav('/admindashboard');
    }
  return (
  <>
  <Adminnav/>
   <div className='row' style={{marginTop:'2%'}}>
        <div className='col-md-1 offset-md-11'><button className='btn btn-primary' onClick={back}> Back</button></div>
        <div className='col-md-8 offset-md-2' style={{backgroundColor:'rgb(232, 232, 232)',border:"1px solid black",boxShadow:'5px 5px 4px',marginTop:'1%',borderRadius:'10px'}}>
            <center><h1 style={{marginTop:'1%'}}>Car Details</h1></center>
            <br/>
            <div className='col-md-4 offset-md-4'>
                <img src={ar.imgadr} width="100%" alt="reload" style={{boxShadow:'2px 3px 2px'}}/>
                <h5 style={{marginTop:'4%'}}><b>Licence Plate : {ar.licenceplate}</b></h5>
                <h5><b>Miles Driven :{ar.miles}</b></h5>
                <h5><b>Car Model : {ar.CarName}</b></h5>
                <h5><b>Color :{ar.color} </b></h5>
                <h5><b>Model Year : {ar.year} </b></h5>
                <h5><b>Price : {ar.price}</b></h5>
                <div><h5><b>Previous Feedback:{ar.feed}</b></h5></div>
            </div>
            
        </div>
      
       </div>
  </>
  )
}

export default Admincar
