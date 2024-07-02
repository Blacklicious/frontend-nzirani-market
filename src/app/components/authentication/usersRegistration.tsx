import React, { useState } from 'react';
import axios from 'axios';

const UsersRegistration: React.FC<{ onRegistrationSuccess: () => void }> = ({ onRegistrationSuccess }) => {
  const [registrationData, setRegistrationData] = useState({     
      email: '',
      last_name: '',
      first_name: '',
      password: '',
  });

  const handleRegistrationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const url = 'http://localhost:8000/api/v1/register/';  // Adjust to your DRF endpoint
    try {
      const response = await axios.post(url, {
        email: registrationData.email,
        first_name: registrationData.first_name,
        last_name: registrationData.last_name,
        password: registrationData.password,
        password_verification: registrationData.password, // Adjust accordingly
      });
      console.log('Registration successful', response.data);
      // Call the function passed via props to handle successful registration
      onRegistrationSuccess();

    } catch (error: any) {
      console.error('Registration failed:', error.response ? error.response.data : error);
    }
  };
  
  return (
    <div className='bg-gray-200 w-[100%] mt-2' >
      <form onSubmit={handleRegistrationSubmit} className='w-[100%]'>
        <div className='w-[100%] md:flex justify-around mb-[3px]'>
          <input type="text" placeholder='Nom' value={registrationData.last_name}
            className='w-[100%] md:w-[48%] h-[40px] mb-[7px] px-2 rounded'
            onChange={(e) =>
              setRegistrationData({ ...registrationData, last_name: e.target.value, })
            }
          />
          <input  type="text" placeholder='Prénom' value={registrationData.first_name}
            className='w-[100%] md:w-[48%] h-[40px] mb-[7px] px-2 rounded'
            onChange={(e) =>
              setRegistrationData({ ...registrationData, first_name: e.target.value, })
            }
          />
        </div>
        <div className='w-[100%] md:flex justify-around mb-[3px]'>
          <input type="email" placeholder='Email'value={registrationData.email}
            className='w-[100%] md:w-[48%] h-[40px] mb-[7px] px-2 rounded'
            onChange={(e) =>
              setRegistrationData({ ...registrationData, email: e.target.value,})
            }
          />
          <input
            type="password" placeholder='Mot de passe' value={registrationData.password}
            className='w-[100%] md:w-[48%] h-[40px] mb-[7px] px-2 rounded'
            onChange={(e) =>
                setRegistrationData({ ...registrationData, password: e.target.value, })
            }
          />
        </div>  
        <button className='bg-blue-200 hover:bg-blue-400 w-[100%] h-[40px] rounded' type="submit"> Envoyer </button>
      </form>
    </div>

  );
}

export default UsersRegistration;
