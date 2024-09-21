import { Routes,Route } from 'react-router-dom'
import './App.css'
import Homepage from './Pages/Homepage'
import Home from './Pages/Home'
import Events from './Pages/Events'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import BillingPage from './Pages/BillingPage'
import NotFound from './Pages/NotFound'
import Event from './Pages/Event'
import Temp from './Pages/temp'

function App() {
  return (
    <div className='w-full min-h-screen'>
      <Routes>
        <Route path = '/' element = {<Homepage/>}>
          <Route index element = {<Home/>}/>
          <Route path = '/Events' element = {<Events/>}/>
          <Route path = '/Signup' element = {<SignUp/>}/>
          <Route path = '/Login' element = {<Login/>}/>
          <Route path = '/Billing' element = {<BillingPage/>}/>
          <Route path = '/Event' element = {<Event/>}/>
          <Route path = '/temp' element = {<Temp/>}/>
          <Route path = '*' element = {<NotFound/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App;
