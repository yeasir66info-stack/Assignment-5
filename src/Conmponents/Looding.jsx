import React from 'react'

const Looding = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-white">
     
      <div className="relative flex items-center justify-center">
      
        <div className="w-16 h-16 border-4 border-pink-100 border-solid rounded-full animate-spin border-t-pink-600 shadow-sm"></div>
       
        <div className="absolute w-5 h-5 bg-pink-600 rounded-full animate-pulse"></div>
      </div>
      
      <p className="mt-4 text-gray-600 font-medium tracking-wide animate-pulse">
        Loading, please wait...
      </p>
    </div>
  );
};

export default Looding