import React from 'react'
import '../Usercomponents/Navbar.css'
function OwnerNav() {
  const nav={ display:'flex',justifyContent:'center',backgroundColor:'#333'}
  const ul={display:'flex',listStyle:'none',padding:'0',margin:'0',float:'left',marginLeft:'34%'};
  const a={display:'block',color:'white',textDecoration:'none',padding: '10px',borderRadius: '5px',transition:' background-color 0.3s ease'}
  
  return (
    <>
     <div className='row' style={nav}>
      <div className='col-md-3 offset-md-7'>
      <ul style={ul}>
        <li><a style={a} href="/ownerdashboard">Home</a></li>
        <li><a style={a} href="/onwerstatus">Status</a></li>
        <li><a style={a} href="/onwerhistory">History</a></li>
        <li><a style={a} href="/ownerpayment">Payments</a></li>
        <li><a style={a} href='/logout'>Logout</a></li>
      </ul>
      </div>
     </div>

    </>
  )
}

export default OwnerNav
