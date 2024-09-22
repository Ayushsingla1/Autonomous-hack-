import { Routes,Route } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Home from './Pages/Home'
import Events from './Pages/Events'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import BillingPage from './Pages/BillingPage'
import NotFound from './Pages/NotFound'
import Event from './Pages/Event'
<<<<<<< HEAD
import Temp from './Pages/temp'
=======
import Payment from './Pages/Payment'
>>>>>>> 7785f03eaf46c920ab969614e7ec62ad58244696

function App() {
  return (
    <div className='w-full min-h-screen'>
      <Routes>
        <Route path = '/' element = {<Homepage/>}>
          <Route index element = {<Home/>}/>
          <Route path = '/Events' element = {<Events/>}/>
          <Route path = '/Signup' element = {<SignUp/>}/>
          <Route path = '/Login' element = {<Login/>}/>
<<<<<<< HEAD
          <Route path = '/Billing' element = {<BillingPage/>}/>
          <Route path = '/Event' element = {<Event/>}/>
          <Route path = '/temp' element = {<Temp/>}/>
=======
          <Route path = '/Billing/:id' element = {<BillingPage/>}/>
          <Route path = '/Event/:id' element = {<Event/>}/>
          <Route path = '/Payment/:id' element = {<Payment/>}/>
>>>>>>> 7785f03eaf46c920ab969614e7ec62ad58244696
          <Route path = '*' element = {<NotFound/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App;
