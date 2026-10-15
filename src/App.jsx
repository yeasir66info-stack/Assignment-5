import toast, { Toaster } from 'react-hot-toast'
import './App.css'
import Navbar from './Conmponents/Navbar'
import Banner from './Conmponents/Banner'
import Footer from './Conmponents/Footer'

function App() {

  return (
   <div>
    <Navbar /> 
    <Banner /> 
    <Footer />    
     {/* <Toaster /> */}
   </div>
  );
}

export default App
