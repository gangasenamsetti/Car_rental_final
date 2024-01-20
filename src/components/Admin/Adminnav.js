import React from 'react'

function Adminnav() {
  const nav={ display:'flex',justifyContent:'center',backgroundColor:'#333'}
const ul={display:'flex',listStyle:'none',padding:'0',margin:'0',float:'left',marginLeft:'18%'};
const a={display:'block',color:'white',textDecoration:'none',padding: '10px',borderRadius: '5px',transition:' background-color 0.3s ease'}

  return (
    <>
    <div className='row ' style={nav}>
     <div className='col-md-4 offset-md-8'>
     <ul style={ul}>
       <li><a style={a} href="/admindashboard">Home</a></li>
       <li><a style={a} href="/adminuser">Users</a></li>
       <li><a style={a} href='/adminowner'>Owners</a></li>
       <li><a style={a} href="/adminstatus">Status</a></li>
       <li><a style={a} href="/adminhistory">History</a></li>
       <li ><a style={a} href='/logout'>Logout</a></li>
     </ul>
     </div>
    </div>

   </>
  )
}

export default Adminnav
