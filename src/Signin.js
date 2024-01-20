import React, {useState} from "react";
import './Signin.css';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
function Signin(){ 
    const [formdata,setform]=useState({
        username:''
    });
    const handleChange=(e)=>{
        setform({
            ...formdata,
            [e.target.name]:e.target.value
        })
    }
     
    function  fun(){
        navig('/');
    }
    const handleSubmit = async () => {
        navig('/');
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
        <div className="lgin">
        <div className="row">
                <div className="col-md-5 name">
                    <h1>HR'S CAR RENTAL SERVICES</h1>
                    
                </div>
                <div className="col-md-9"></div>
            </div>
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6 lgn">
                <div className="sbox">
                    <h2 style={{textAlign:"center",width:"100%"}}>SIGN UP</h2> 
                
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
<Form.Label style={{marginLeft:'-30%'}}><b>Role :&nbsp;</b></Form.Label>
            <select onChange={handleChange} name='role' style={{borderRadius:'10px',padding:'2%'}}>
                <option>Choose your role</option>
                <option>Owner</option>
                <option>User</option>
                <option>Admin</option>
            </select>
        </Form.Group>
        <br/>
        <center><Button  className="btn btn-primary" onClick={handleSubmit} style={{marginBotto:'1%'}}>Submit</Button></center>
       
      </Form>
      
      
      </center>
</div>
            </div>
          
        </div>
        <div className="row">
            <div className="col-md-5 offset-md-4">
            <h5 style={{color:'white',marginTop:'0%',marginLeft:'5%'}}>Already have an account ? Click here to Login<button style={{backgroundColor:'transparent',border:'0px',color:'blue'}} onClick={fun}>Login</button></h5>
            </div>
           </div>
        </div>
        </>
    )
}
export default Signin;