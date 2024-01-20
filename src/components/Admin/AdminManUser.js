import './AdminManUs.css';
import Adminnav from './Adminnav'
import {useState,useEffect} from 'react';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
function Datait(props){
  return(<>
  <tr><td>{props.sno}</td><td>{props.userid}</td><td>{props.ownername}</td><td>{props.mobile}</td><td>{props.email}</td><td>{props.address}</td></tr>
  </>)
}
function AdminManUser()
{
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navi= useNavigate();
  const [userid,setuserid]=useState('');
  const [onwer,setowner]=useState([]);
  const handledelete=async()=>{
    handleClose();
    const response=await fetch('http://localhost:8009/deleteow/'+userid,{method:"GET"});
    const re= await response.json();console.log(re);
  }
  const getown=async()=>{
    const res=await fetch('http://localhost:8009/getuser',{
      method:"GET"
    })
    const resa=await res.json();
    setowner(resa);
  }
  const navig=useNavigate();
  function add(){
  localStorage.setItem('add',"User");
 navig('/addownuse')
  }
  useEffect(()=>{
    getown();
  })
    return(
   <>
   <Adminnav/>
    <div className="App">
    <h3 style={{textAlign:'center',marginTop:'2%'}}>User Details</h3>
    <div className='row'>
    <div className='col-md-2 offset-md-10'>
    <button className="btn btn-success btn-sm" onClick={add}>Add</button>&nbsp;&nbsp;&nbsp;
    <button class="btn btn-danger btn-sm" onClick={handleShow}>Remove</button>


     <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Remove Owner</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  <p style={{color:'black'}}><b>Enter The OwnerID</b></p>
                  <input type='text' onChange={(e)=>setuserid(e.target.value)}/>
                  </Modal.Body>
                  <Modal.Footer>
                   
                    <button className='btn btn-danger btn-sm' onClick={handledelete}>
                      Submit
                    </button>
                  </Modal.Footer>
                </Modal>
 
    </div>
   </div>
    <table>
      <thead>
      <tr>
        <th>S.No</th>
        <th>User Id</th>
        <th>UserName</th>
        <th>Email</th>
        <th>Mobile</th>
        <th>Address</th>
        
      </tr>
      </thead>
      <tbody>
      {onwer.map((ele,i)=>{return (<Datait sno={i+1} userid={ele._id} ownername={ele.username} mobile={ele.mobile} email={ele.email} address={ele.address}/>)})}
        </tbody>
    </table>
  </div>
   </>
    );
}
export default AdminManUser;