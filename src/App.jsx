import toast, { Toaster } from 'react-hot-toast'
import './App.css'
import Navbar from './Conmponents/Navbar'
import Banner from './Conmponents/Banner'

function App() {

  return (
   <div>
    <Navbar /> 
    <Banner />  
     <Toaster />
   </div>
  )
}

export default App
