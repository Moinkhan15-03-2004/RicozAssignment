import React from 'react';
 import image from "./../assets/Frame.png"
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 shadow-md ">
     <img src={image} alt="" className='mx-10'/>
      <div className="flex items-center space-x-2">
      
        {/* <span className="text-lg font-bold text-gray-900">MyFastX</span>
        <span className="text-sm text-gray-500">Partner</span>
        <div className="ml-2 w-4 h-4 bg-yellow-400 rounded-md"></div>  */}
      </div>
      
      {/* Button Section */}
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-black text-white rounded-md">Sign up</button>
        <button className="px-4 py-2 bg-black text-white rounded-md">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
