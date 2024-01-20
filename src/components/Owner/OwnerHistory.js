import React from 'react';
import './OwnHis.css';
import '../Usercomponents/Navbar';
import OwnerNav from './OwnerNav';
function OwnerHistory()
{
    return (
       <>
        <center>
         <OwnerNav/>
        <h4 style={{marginTop:'1%'}}>Previous History Details</h4>
        <div className='row'>
            <div className='col-md-10 offset-md-1' style={{boxShadow:'4px 4px 3px'}}>
            <table className="table">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Car Model</th>
                        <th>Licence Plate</th>
                        <th>Username</th>
                        <th>Duration</th>
                        
                        <th>Previous  User  Feedback</th>
                    </tr>
                </thead>
                <tbody>
                    <tr >
                        <td ></td>
                        <td></td>
                        <td></td>   
                        <td></td>
                        <td></td>  
                        <td></td>
                    </tr>
                    <tr>
                        <td ></td>
                        <td></td>
                        <td></td> 
                        <td></td>
                        <td></td>
                        <td></td>
                        </tr>
                        <tr>
                            <td ></td>
                            <td></td>
                            <td></td> 
                            <td></td>
                            <td></td> 
                            <td></td>
                        </tr>
                        <tr>
                            <td ></td>
                            <td></td>
                            <td></td>   
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td ></td>
                            <td></td>
                            <td></td>   
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                </tbody>
        </table>
            </div>
        </div>
        </center>
       </>
    );
}
export default OwnerHistory;

