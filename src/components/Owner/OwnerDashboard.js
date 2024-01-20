import React from 'react'
import OwnerNav from './OwnerNav';
import { useState,useEffect} from 'react';
import Modal from 'react-bootstrap/Modal';
import {useNavigate} from 'react-router-dom'
import { AiTwotoneStar } from "react-icons/ai";
function OwnerDashboard() {
  const [carsearch,setcarsearch]=useState({imgadr:'',licenceplate:"",miles:'',CarName:'',year:'',price:'',feed:""})
  const [show, setShow] = useState(false);
  const handleClose = () => {setShow(false)};
  const handleShow = () => setShow(true);
  const [search,setsearch]=useState('');

  const [images,setImages]=useState([{imgadr:"https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/128413/scorpio-exterior-right-front-three-quarter-46.jpeg?isig=0&q=75"},{imgadr:"https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/128413/scorpio-exterior-right-front-three-quarter-46.jpeg?isig=0&q=75"},{imgadr:"https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/128413/scorpio-exterior-right-front-three-quarter-46.jpeg?isig=0&q=75"},
  {imgadr:"https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/128413/scorpio-exterior-right-front-three-quarter-46.jpeg?isig=0&q=75"},{imgadr:"https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/128413/scorpio-exterior-right-front-three-quarter-46.jpeg?isig=0&q=75"},{imgadr:"https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/128413/scorpio-exterior-right-front-three-quarter-46.jpeg?isig=0&q=75"},{imgadr:"https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/128413/scorpio-exterior-right-front-three-quarter-46.jpeg?isig=0&q=75"},{imgadr:"https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/128413/scorpio-exterior-right-front-three-quarter-46.jpeg?isig=0&q=75"}]);
  const getImages=async()=>{
      const response= await fetch('http://localhost:8009/images',{
        method:"GET"
      })
      const resw=await response.json();
      localStorage.setItem('imagess',JSON.stringify(resw));
      setImages(resw);
  }
  const navigate=useNavigate();
  const booking=(imgad)=>{
    imgad.username=localStorage.getItem('username');
    localStorage.setItem('detail',JSON.stringify(imgad));
    navigate('/ownercar');
  }
  
const handle=(search)=>{
  
  let k=images.find((ele)=> ele.CarName===search );
  if(k!==undefined)
 {
  document.getElementById('error').innerHTML=' ';
  handleShow();
  setcarsearch(k);
 }
 else
 document.getElementById('error').innerHTML='Car Not Found';

}
useEffect(()=>{

  getImages()
  
},[]);
  return (
    <>
<OwnerNav/>
<div>
<div className='row' style={{marginTop:"1%"}}>
    <div className='col-md-2 offset-md-9'>
      <p id='error' style={{color:'red'}}></p>
    <form>
            <input type="text" placeholder="enter car name"  name='search' onChange={(e)=>setsearch(e.target.value)} style={{marginRight:'1%',width:'100%'}} />
      </form>
    </div>
  
  <div className='col-md-1'>
      <div  className='col-md-1 offset-md-4'>
        <p></p>
        <button className='btn btn-primary btn-sm' style={{float:'right',fontSize:'15px'}} onClick={()=>handle(search)}>Search</button>
     <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Car Detail's</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                
            <div className='col-md-8 offset-md-1'>
                <img src={carsearch.imgadr} width="100%" alt="reload" style={{boxShadow:'2px 3px 2px'}}/>
                <h5 style={{marginTop:'4%'}}><b>Licence Plate :{carsearch.licenceplate}</b></h5>
                <h5><b>Miles Driven :{carsearch.miles}</b></h5>
                <h5><b>Car Model :  {carsearch.CarName}</b></h5>
                <h5><b>Color :{carsearch.color} </b></h5>
                <h5><b>Model Year : {carsearch.year} </b></h5>
                <h5><b>Price : {carsearch.price}</b></h5>
                <div><h5><b>Feedback :{carsearch.feed}</b></h5></div>
            </div>
            
       
                  </Modal.Body>
                  <Modal.Footer>
                   
                    <button className='btn btn-primary btn-sm' onClick={handleClose}> Close </button>
                  </Modal.Footer>
                </Modal>
 
      </div>
     </div>
   </div>
   <div className='row'>
    <div className='col-md-2 offset-md-5'>
    <h2 style={{textAlign:"center",boxShadow:'3px 3px 2px',borderRadius:'10px'}}><i style={{color:'orange'}}>Available</i> <i>Cars</i></h2>
    </div>
   </div>
   <div className='row'>
  <div className='col-md-3'>
    <img src={images[0].imgadr} width='100%' height='200vh' alt='reload'/>
    <div style={{marginLeft:'35%'}}>
    <p style={{color:'black',marginLeft:'-7%',marginBottom:'-1%',marginLeft:'3%'}}>{images[0].CarName}</p>
      <p style={{color:'black'}}><AiTwotoneStar color="Gold"/>{images[0].Rating}/5.0</p>
      <button className='btn btn-primary' onClick={()=>{booking(images[0])}}>Details</button>
    </div>
  </div>
  <div className='col-md-3'>
    <img src={images[1].imgadr} width='100%' height='200vh' alt='reload'/>
    <div style={{marginLeft:'35%'}}>
    <p style={{color:'black',marginLeft:'-7%',marginBottom:'-1%',marginLeft:'3%'}}>{images[1].CarName}</p>
      <p style={{color:'black'}}><AiTwotoneStar color="Gold"/>{images[1].Rating}/5.0</p>
      <button className='btn btn-primary' onClick={()=>{booking(images[1])}}>Details</button>
    </div>
  </div>
   <div className='col-md-3'>
    <img src={images[2].imgadr} width='100%' height='200vh' alt='reload'/>
    <div style={{marginLeft:'35%'}}>
    <p style={{color:'black',marginLeft:'-7%',marginBottom:'-1%',marginLeft:'3%'}}>{images[2].CarName}</p>
      <p style={{color:'black'}}><AiTwotoneStar color="Gold"/>{images[2].Rating}/5.0</p>
      <button className='btn btn-primary'  onClick={()=>{booking(images[2])}}>Details</button>
    </div>
  </div>
   <div className='col-md-3'>
    <img src={images[3].imgadr} width='100%' height='200vh' alt='reload'/>
    <div style={{marginLeft:'35%'}}>
    <p style={{color:'black',marginLeft:'-7%',marginBottom:'-1%',marginLeft:'3%'}}>{images[3].CarName}</p>
      <p style={{color:'black'}}><AiTwotoneStar color="Gold"/>{images[3].Rating}/5.0</p>
      <button className='btn btn-primary'  onClick={()=>{booking(images[3])}}>Details</button>
    </div>
  </div>
   <div className='col-md-3'>
    <img src={images[4].imgadr} width='100%' height='200vh' alt='reload'/>
    <div style={{marginLeft:'35%'}}>
    <p style={{color:'black',marginLeft:'-7%',marginBottom:'-1%',marginLeft:'3%'}}>{images[4].CarName}</p>
      <p style={{color:'black'}}><AiTwotoneStar color="Gold"/>{images[4].Rating}/5.0</p>
      <button className='btn btn-primary'  onClick={()=>{booking(images[4])}}>Details</button>
    </div>
  </div> 
  <div className='col-md-3'>
    <img src={images[5].imgadr} width='100%' height='200vh' alt='reload'/>
    <div style={{marginLeft:'35%'}}>
    <p style={{color:'black',marginLeft:'-7%',marginBottom:'-1%',marginLeft:'3%'}}>{images[5].CarName}</p>
      <p style={{color:'black'}}><AiTwotoneStar color="Gold"/>{images[5].Rating}/5.0</p>
      <button className='btn btn-primary'  onClick={()=>{booking(images[5])}}>Details</button>
    </div>
 </div> 
 <div className='col-md-3'>
    <img src={images[6].imgadr} width='100%' height='200vh' alt='reload'/>
    <div style={{marginLeft:'35%'}}>
    <p style={{color:'black',marginLeft:'-7%',marginBottom:'-1%',marginLeft:'3%'}}>{images[6].CarName}</p>
      <p style={{color:'black'}}><AiTwotoneStar color="Gold"/>{images[6].Rating}/5.0</p>
      <button className='btn btn-primary'  onClick={()=>{booking(images[6])}}>Details</button>
    </div>
  </div>
   <div className='col-md-3'>
    <img src={images[7].imgadr} width='100%' height='200vh' alt='reload'/>
 
    <div style={{marginLeft:'35%'}}>
    <p style={{color:'black',marginLeft:'-7%',marginBottom:'-1%',marginLeft:'3%'}}>{images[7].CarName}</p>
      <p style={{color:'black'}}><AiTwotoneStar color="Gold"/>{images[7].Rating}/5.0</p>
      <button className='btn btn-primary'  onClick={()=>{booking(images[7])}}>Details</button>
    </div> 
    </div> 
</div>
</div>
    </>
  )
}

export default OwnerDashboard
