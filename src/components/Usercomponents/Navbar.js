import React from 'react';
import './Navbar.css';

function Navbar() {
const nav={ display:'flex',justifyContent:'center',backgroundColor:'#333'}
const ul={display:'flex',listStyle:'none',padding:'0',margin:'0',float:'left'};
const a={display:'block',color:'white',textDecoration:'none',padding: '10px',borderRadius: '5px',transition:' background-color 0.3s ease'}
  return (

    <>
     <div className='row' style={nav}>
      <div className='col-md-3 offset-md-9'>
      <ul style={ul}> 
        <li style={{ margin:' 0 10px'}}><a style={a} href="/dashboard">Home</a></li>
        <li style={{ margin:' 0 10px'}}><a style={a} href="/status">Status</a></li>
        <li style={{ margin:' 0 10px'}}><a style={a} href="/history">History</a></li>
        <li style={{ margin:' 0 10px'}}><a style={a} href="/logout">Logout</a></li>
      </ul>
      </div>
     </div>
    </>
  );
}

export default Navbar;
