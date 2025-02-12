// import React from 'react';
// import { Link } from 'react-router-dom';  
// import './Navbar.css'; 

// const Navbar = () => {
//   return (
    
//     <nav className="navbar">
//       <ul className="navList">
//         <li className="navItem">
//           <Link to="/home" className="navLink">Home</Link>
//         </li>
//         <li className="navItem">
//           <Link to="/payment" className="navLink">Payment</Link>
//         </li>
//         <li className="navItem">
//           <Link to="/about" className="navLink">About</Link>
//         </li>
//         <li className="navItem">
//           <Link to="/variety" className="navLink">Variety</Link>
//         </li>
//         <li className="navItem">
//           <Link to="/login" className="navLink">login</Link>
//         </li>
        
//       </ul>
      
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    if (event.target.value !== '') {
      
      window.location.href = event.target.value;
    }
  };

  return (
    <nav className="navbar">
      <ul className="navList">
        <li className="navItem">
          <Link to="/home" className="navLink">Home</Link>
        </li>
        <li className="navItem">
          <Link to="/payment" className="navLink">Payment</Link>
        </li>
        <li className="navItem">
          <Link to="/about" className="navLink">About</Link>
        </li>
        <li className="navItem">
          <Link to="/variety" className="navLink">Variety</Link>
        </li>
        <li className="navItem">
          <Link to="/login" className="navLink">Login</Link>
        </li>

        {/* Dropdown menu */}
        <li className="navItem">
          <select 
            value={selectedOption} 
            onChange={handleSelectChange} 
            className="navDropdown"
          >
            <option value="">Select Page</option>
            <option value="/home">Home</option>
            <option value="/payment">Payment</option>
            <option value="/about">About</option>
            <option value="/variety">Variety</option>
            <option value="/login">Login</option>
          </select>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;


