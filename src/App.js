import './App.css';
import Cardetails from './components/Usercomponents/Cardetails';
import Booking from './components/Usercomponents/Booking';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Payments from './components/Usercomponents/Payments';
import Userdash from './components/Usercomponents/Userdash';
import UserHistory from './components/Usercomponents/UserHistory';
import UserStatus from './components/Usercomponents/UserStatus';
import OwnerHistory from './components/Owner/OwnerHistory';
import OwnerStatus from './components/Owner/OwnerStatus';
import AdManOwn from './components/Admin/AdManOwn';
import Status from './components/Admin/AdminHist';
import AdminStatus from './components/Admin/AdminStatus';
import  AdminManUser from './components/Admin/AdminManUser'
import OwnerDashboard from './components/Owner/OwnerDashboard';
import Admindashboard from './components/Admin/Admindashboard';
import OwnerPays from './components/Owner/OwnerPays';
import CarDetails from './components/Owner/CarDetails';
import Login from './Login';
import Signin from './Signin';
import Admincar from './components/Admin/Admincar';
import AdduserOwner from './components/Admin/AdduserOwner';
function App() {
  return (
<>
<BrowserRouter>

<Routes>
  <Route path='/' element={<Login/>}/>
<Route path='/cardetails' element={<Cardetails/>}/>
<Route path='/booking' element={<Booking/>}/>
<Route path='/payments' element={<Payments/>}/>
<Route path='/dashboard' element={<Userdash/>}/>
<Route path='/history' element={<UserHistory/>}/>
<Route path='/status' element={<UserStatus/>}/>
<Route path='/logout' element={<Login/>}/>
<Route path='/onwerhistory' element={<OwnerHistory/>}/>
<Route path='/onwerstatus' element={<OwnerStatus/>}/>
<Route path='/adminowner' element={<AdManOwn/>}/>
<Route path='/adminuser' element={<AdminManUser/>}/>
<Route path='/adminhistory' element={<Status/>}/>
<Route path='/ownerdashboard' element={<OwnerDashboard/>}/>
<Route path='/admindashboard' element={<Admindashboard/>}/>
<Route path='adminstatus' element={<AdminStatus/>}/>
<Route path='/ownerpayment' element={<OwnerPays/>}/>
<Route path='/ownercar' element={<CarDetails/>}/>
<Route path='/signin' element={<Signin/>}/>
<Route path='/admincar' element={<Admincar/>}/>
<Route path='/addownuse' element={<AdduserOwner/>}/>
</Routes>
</BrowserRouter>
</>
  );
}

export default App;
