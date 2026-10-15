import React, { Suspense } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import './App.css';
import Navbar from './Conmponents/Navbar';
import Banner from './Conmponents/Banner';
import Footer from './Conmponents/Footer';
import Looding from './Conmponents/Looding';
import MainLayout from './Conmponents/MainLayout';

const dataPromise = async () => {
  const response = await fetch('/Data.json');
  const data = await response.json();
  return data;
};

function App() {
  return (
    <div>
      <Navbar /> 
      <Banner /> 
      
      <Suspense fallback={<Looding />}>
        <MainLayout dataPromise={dataPromise()} />
      </Suspense>

      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
