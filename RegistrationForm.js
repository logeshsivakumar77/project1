// import React,{ useEffect } from "react";
// import { useState } from "react";
import'./form.css'

// function From(){
//     const [inputs,setInputs]=useState({})

//     function handlesubmit(e){
//         e.preventDefault();
//         console.log('submit');
//         console.log('input',inputs);
        
        
//     }
//     return(
//         <>
//         <form onSubmit={handlesubmit}>
//             <label className="h">Name:<input type="text" onChange={(e)=>{setInputs({name:e.target.value})}}></input></label>
//             <label>Degree:<input type="text" onChange={(e)=>{setInputs({degree:e.target.value})}}></input></label>
//             <label>Location:<input type="text" onChange={(e)=>{setInputs({location:e.target.value})}}></input></label>
//             <input type="submit" value='submit'></input>
//             </form>
//     </>
//     )


// }
// export default From;


import React, { useState } from 'react';
const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    otp: '',
  });

  const [errors, setErrors] = useState({
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    otp: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/; // At least 8 characters, with letters and numbers

    if (!phoneRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Phone number must be 10 digits.';
    }

    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!passwordRegex.test(formData.password)) {
      newErrors.password = 'Password must be at least 8 characters long and contain both letters and numbers.';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    if (formData.otp.length !== 6) {
      newErrors.otp = 'OTP must be 6 digits.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form submitted successfully:', formData);
     
    }
  };

  return (
    <form className='e' onSubmit={handleSubmit}>
      <div >
        <label>Phone Number:</label>
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Enter phone number"
        />
        {errors.phoneNumber && <span>{errors.phoneNumber}</span>}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email"
        />
        {errors.email && <span>{errors.email}</span>}
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter password"
        />
        {errors.password && <span>{errors.password}</span>}
      </div>

      <div>
        <label>Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm password"
        />
        {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
      </div>

      <div>
        <label>OTP:</label>
        <input
          type="text"
          name="otp"
          value={formData.otp}
          onChange={handleChange}
          placeholder="Enter OTP"
        />
        {errors.otp && <span>{errors.otp}</span>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;
