import { Routes,Route } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Home from './Pages/Home'
import Events from './Pages/Events'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import BillingPage from './Pages/BillingPage'
import NotFound from './Pages/NotFound'
import Event from './Pages/Event'
import Payment from './Pages/Payment'
import CreateEvent from './Pages/CreateEvent'
import About from './Pages/About'

function App() {
  return (
    <div className='w-full min-h-screen'>
      <Routes>
        <Route path = '/' element = {<Homepage/>}>
          <Route index element = {<Home/>}/>
          <Route path = '/Events' element = {<Events/>}/>
          <Route path = '/Signup' element = {<SignUp/>}/>
          <Route path = '/Login' element = {<Login/>}/>
          <Route path = '/CreateEvent' element = {<CreateEvent/>}/>
          <Route path = '/About' element = {<About/>}/>
          <Route path = '/Billing/:id' element = {<BillingPage/>}/>
          <Route path = '/Event/:id' element = {<Event/>}/>
          <Route path = '/Payment/:id' element = {<Payment/>}/>
          <Route path = '*' element = {<NotFound/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App;
