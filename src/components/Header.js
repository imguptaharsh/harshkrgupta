import React from 'react';
// images
// import logo from '../assets/logo.svg';

const Header = () => {
  return <header className='py-8'>
    <div> </div>
    <div className='container mx auto'>
      <div className='flex justify-between items-center'>
        <a href='#'>
          {/* <img src={logo} alt='' />  */}

        </a>
        <button className='btn btn-sm text-black'>Work With Me</button>
      </div>
    </div>
  </header>;
};

export default Header;
