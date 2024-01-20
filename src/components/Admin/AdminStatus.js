import React from 'react'
import './AdmStatus.css'
import Adminnav from './Adminnav'
function AdminStatus() {
  return (
    <>
    <Adminnav/>
    <div>

        <center>
        
        <h3>Status</h3>
      
        <div class="container">
            <div class="box">
                <div class="box-row">
                    <div class="box-cell box1">
                    <div>Total_Car_Owner</div>
                    <img class="picc" src="https://www.citypng.com/public/uploads/preview/download-people-users-black-icon-png-11639591481sbaah6lte2.png" alt="passengers"></img>
                    <div>Count:</div>
                    Today:&nbsp;&nbsp;&nbsp;
                    History:
                    </div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                     
                    <div class="box-cell box2">
                    <div>Total_Passengers</div>
                    <img class="picc" src="data:image/png;base64,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" alt="passengers"></img>
                    <div>Count:</div>
                    Today:&nbsp;&nbsp;&nbsp;
                    History:
                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                     
                    

                    <div class="box-cell box2">
                    <div>Total_number_cars</div>
                    <img class="picc" src="data:image/png;base64,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" alt="cars"></img>
                    <div>Count:</div>
                    Today:&nbsp;&nbsp;&nbsp;
                    History:
                    </div>

                </div>
            </div>
        </div>
        <h3>Recent Car bookings</h3>
        <table>
          <thead>
          <tr> 
            <th>Booking</th>
            <th>Car</th>
            <th>Status</th>
            <th>Date</th>
            <th>Amount</th>
            
          </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td><button class="but">Submit</button></td>
              <td></td>
              <td></td>
            
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td><button class="but">Submit</button></td>
              <td></td>
              <td></td>
             
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td><button class="but">Submit</button></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td><button class="but">Submit</button></td>
              <td></td>
              <td></td>
              
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td><button class="but">Submit</button></td>
              <td></td>
              <td></td>
              
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td><button class="but">Submit</button></td>
              <td></td>
              <td></td>
              
            </tr>
            </tbody>
        </table>
        </center>
        
      </div>
    </>
  )
}

export default AdminStatus
