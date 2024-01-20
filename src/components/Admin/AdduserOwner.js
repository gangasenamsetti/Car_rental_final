import React, {useState} from "react";
import './addownus.css'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Adminnav from "./Adminnav";
function AdduserOwner() {
    const add=localStorage.getItem('add');
    const [formdata,setform]=useState({
        role:add,
    });
    const handleChange=(e)=>{
        setform({
            ...formdata,
            [e.target.name]:e.target.value
        })
    }
  const back=()=>{
    if(add==='User')
        navig('/adminuser');
        else if(add==='Owner')
        navig('/adminowner')
  }
    const handleSubmit = async () => {
        if(add==='User')
        navig('/adminuser');
        else if(add==='Owner')
        navig('/adminowner')
        
        await fetch('http://localhost:8009/signup', {
          method: 'POST',
          body: JSON.stringify(formdata),
          headers: {
            'Content-Type': 'application/json'
          }
        })
      
      }
    const navig=useNavigate();   
  return (
   <>
   <Adminnav/>
     <div className="lgin" >
        <div className="row" >
            
            <div className="col-md-6 offset-md-3 lgn" style={{marginTop:'2%'}}>
                <div className="sbox">
                    <h2 style={{textAlign:"center",width:"100%",marginBottom:'8%'}}>Fill Details of New {add}</h2> 
                
                <center>
                <Form>
                <Form.Group  style={{margin:'0px'}} controlId="form.UserName">
                <Form.Label style={{margin:'0px',marginLeft:'-58%'}}><b>Username :&nbsp;</b></Form.Label>
            <Form.Control type="text" placeholder="Enter Your Username" name="username" style={{height: '6%',width:'80%',margin:'0px'}}value={formdata.username} onChange={handleChange}/>
        </Form.Group>
<br></br>
        
        <Form.Group  style={{margin:'0px'}} controlId="form.Pass">
        <Form.Label style={{margin:'0px',marginLeft:'-58%'}}><b>Password :&nbsp;</b></Form.Label>
            <Form.Control type="password" placeholder="Enter Your Password" style={{height: '6%',width:'80%',margin:'0px'}} name="password" onChange={handleChange} />
        </Form.Group>
        <br></br>

        <Form.Group  style={{margin:'0px'}} controlId="form.Pass">
        <Form.Label style={{margin:'0px',marginLeft:'-64%'}}><b>Email :&nbsp;</b></Form.Label>
            <Form.Control type="text" placeholder="Enter Your Email"  name="email" style={{height: '6%',width:'80%',margin:'0px'}} onChange={handleChange} />
        </Form.Group>
        <br></br>
        <Form.Group  style={{margin:'0px'}} controlId="form.mobile">
        <Form.Label style={{margin:'0px',marginLeft:'-63%'}}><b>Mobile :&nbsp;</b></Form.Label>
            <Form.Control type="text" placeholder="Enter Your Mobile Number"  name="mobile"style={{height: '6%',width:'80%',margin:'0px'}} onChange={handleChange} />
        </Form.Group>
        <br></br>


        <Form.Group  style={{margin:'0px'}} controlId="form.Pass">
        <Form.Label style={{margin:'0px',marginLeft:'-60%'}}><b>Address :&nbsp;</b></Form.Label>
    <Form.Control type="text" placeholder="Enter Your Address" style={{height: '6%',width:'80%',margin:'0px'}} name="address" onChange={handleChange} />
</Form.Group>

<br></br>
<Form.Group  style={{margin:'0px'}} controlId="form.Role">
<Form.Label style={{margin:'0px',marginLeft:'-65%'}}><b>Role :&nbsp;</b></Form.Label>
<Form.Control type="text" placeholder="Enter Your Address" style={{height: '6%',width:'80%',margin:'0px'}} name="address" value={formdata.role} onChange={handleChange} disabled />
                
               
           
        </Form.Group>
        <br/>
        <center><button className="btn btn-primary btn-sm" onClick={back} style={{marginRight:'25%'}}>back</button><Button  className="btn btn-primary btn-sm" onClick={handleSubmit} style={{marginBotto:'1%'}}>Add {add}</Button></center>
       <br/>
      </Form>
      
      
      </center>
</div>
            </div>
          
        </div>
       
        </div>
   </>
  )
}

export default AdduserOwner
