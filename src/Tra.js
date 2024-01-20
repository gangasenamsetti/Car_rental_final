import React from 'react';

import {AiOutlineHeart} from 'react-icons/ai';
import {AiOutlineStar} from 'react-icons/ai';
import {AiFillHeart} from 'react-icons/ai';
import Navbar from './components/Usercomponents/Navbar';
function Tra()
{
   
    const carimg=['https://imgd.aeplcdn.com/1056x594/n/cw/ec/141113/venue-exterior-right-front-three-quarter.jpeg?isig=0&q=75&wm=1','https://imgd.aeplcdn.com/1056x594/n/cw/ec/107543/vitara-brezza-2022-exterior-right-front-three-quarter.jpeg?isig=0&q=75&wm=1','https://imgd.aeplcdn.com/1056x594/n/cw/ec/42355/xuv700-exterior-right-front-three-quarter.jpeg?isig=0&q=75&wm=1','https://imgd.aeplcdn.com/1056x594/n/cw/ec/44709/fortuner-exterior-right-front-three-quarter-19.jpeg?q=75&wm=1',"https://imgd.aeplcdn.com/1056x594/n/cw/ec/124027/urban-cruiser-hyryder-exterior-right-front-three-quarter-3.jpeg?isig=0&q=75&wm=1",'https://imgd.aeplcdn.com/664x374/n/cw/ec/27074/civic-exterior-right-front-three-quarter-148156.jpeg?q=75']
    const divStyle = {
        height: '120px',
        width: '1685px',
        backgroundColor: 'skyblue',
        
      };
      const but={
        backgroundcolor: 'darkblue', 
        color:'darkblue',       
        padding: '10px 20px',
        border: 'none',
        borderradius: '5px',    
        cursor: 'pointer',
        marginLeft:'-700px',
        marginTop:'-80px',
        float: 'right',
        
      };
      const navimg=['https://thumbs.dreamstime.com/z/auto-car-logo-design-icon-vector-illustration-auto-car-logo-design-icon-vector-illustration-symbol-service-automobile-silhouette-157364282.jpg']

      
    return(
        <div className='container'>                    
                <div style={divStyle}>
                    
                        <img src={navimg} width='160' height='100'/>
                   
                    <center>
                        <button type='submit' style={but} >View Available Cars</button>
                    </center>
                </div>    
                <div class="row">                    
                    <div class="col-md-4">
                        <br></br>
                         <b style={{marginLeft:'150px',marginBottom:'-20px'}}>Hyundai Venue</b>     
                         <br></br> 
                         <p><AiOutlineStar  style={{color:'gold',marginLeft:'100px',width:'55px',height:'25px'}}></AiOutlineStar>4.0/5.0</p>
                         <p><AiOutlineHeart style={{color:'pink',marginLeft:'300px',width:'55px',height:'25px'}}></AiOutlineHeart></p>
                         <br></br>
                         <img src={carimg[0]} width='350' height='200' />                   
                    </div>                    
                    <div class="col-md-4" style={{marginLeft:'500px',marginTop:'-350px'}}>
                        <b style={{marginLeft:'150px',marginBottom:'-20px'}}>Maruti Suzuki Brezza</b>
                        <br></br> 
                        <p><AiOutlineStar  style={{color:'gold',marginLeft:'100px',width:'55px',height:'25px'}}></AiOutlineStar>4.0/5.0</p>                        
                        <p><AiFillHeart style={{color:'pink',marginLeft:'300px',width:'55px',height:'25px'}}></AiFillHeart></p>
                        <img src={carimg[1]} width='350' height='200' style={{marginLeft:'150px'}}/>
                    </div>
                    <div class="col-md-4" style={{marginLeft:'1200px',marginTop:'-350px'}}>
                        <br></br>
                        <b style={{marginLeft:'150px',marginBottom:'-20px'}}>Toyota Urban Cruiser Hyryder</b> 
                        <br></br> 
                         <p><AiOutlineStar  style={{color:'gold',marginLeft:'100px',width:'55px',height:'25px'}}></AiOutlineStar>4.0/5.0</p>
                         <p><AiOutlineHeart style={{color:'pink',marginLeft:'300px',width:'55px',height:'25px'}}></AiOutlineHeart></p>
                         <br></br>
                         <img src={carimg[2]} width='350' height='200' />       
                    </div>
                </div>
                <div class="row">                    
                    <div class="col-md-4">
                        <br></br>
                         <b style={{marginLeft:'150px',marginBottom:'-20px'}}>Toyota Fortuner</b>     
                         <br></br> 
                         <p><AiOutlineStar  style={{color:'gold',marginLeft:'100px',width:'55px',height:'25px'}}></AiOutlineStar>4.0/5.0</p>
                         <p><AiOutlineHeart style={{color:'pink',marginLeft:'300px',width:'55px',height:'25px'}}></AiOutlineHeart></p>
                         <br></br>
                         <img src={carimg[3]} width='350' height='200' />                   
                    </div>   
                    <div class="col-md-4" style={{marginLeft:'500px',marginTop:'-350px'}}>
                        <b style={{marginLeft:'150px',marginBottom:'-20px'}}>Maruti Suzuki Brezza</b>
                        <br></br> 
                        <p><AiOutlineStar  style={{color:'gold',marginLeft:'100px',width:'55px',height:'25px'}}></AiOutlineStar>4.50/5.0</p>                        
                        <p><AiFillHeart style={{color:'pink',marginLeft:'300px',width:'55px',height:'25px'}}></AiFillHeart></p>
                        <img src={carimg[4]} width='350' height='200' style={{marginLeft:'150px'}}/>
                    </div>      
                    <div class="col-md-4" style={{marginLeft:'1200px',marginTop:'-350px'}}>
                        <br></br>
                        <b style={{marginLeft:'150px',marginBottom:'-20px'}}>Honda Civic</b> 
                        <br></br> 
                         <p><AiOutlineStar  style={{color:'gold',marginLeft:'100px',width:'55px',height:'25px'}}></AiOutlineStar>4.5/5.0</p>
                         <p><AiFillHeart style={{color:'pink',marginLeft:'300px',width:'55px',height:'25px'}}></AiFillHeart></p>
                         <br></br>
                         <img src={carimg[5]} width='350' height='200' />       
                    </div>
                </div>
                

                

        </div>
        


        
    );
}
export default Tra;