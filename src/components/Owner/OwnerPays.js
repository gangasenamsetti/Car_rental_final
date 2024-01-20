import React from 'react'
import OwnerNav from './OwnerNav'
function OwnerPays() {
  return (
   <>
   <OwnerNav/>
    <div>
     <h2 style={{textAlign:'center',marginBottom:'2%'}}>Payments Information</h2>
     <div className='row'>
        <div className='col-md-10 offset-md-1'>
            <table>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Transaction Id</th>
                        <th>User Name</th>
                        <th>CarName</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
     </div>
      </div>
   </>
  )
}

export default OwnerPays
