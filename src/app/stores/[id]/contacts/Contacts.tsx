'use client';
import React, { useState } from 'react'
import ClientsList from './clients/ClientsList';
import ContactForm from './ContactForm';

const Contacts = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  return (
    <div className='py-3'>
      <div className='flex flex-wrap items-center justify-between bg-lime-900  p-3 text-lg rounded-lg border-black border-[2px] mb-3'> 
        Contacts
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded w-[30%] h-[80%] border-black border-[2px]'
          onClick={() => setShowContactForm(!showContactForm)}>
         + Ajoutez un contact
        </button> 
        <div className='w-[100%] text-sm'>
          {/*< {showContactForm &&  < ContactForm />} >*/}
        </div>
      </div>
      <div  className='w-[100%] flex bg-lime-800 text-black  border-black border-[2px] mb-3 rounded-lg'>
        <input className='border-2 border-gray-300 bg-white h-10 px-5 pr-16  text-sm focus:outline-none w-[100%] rounded-lg'
          type='search'
          name='search'
          placeholder='Recherchez ici.'
        />
      </div>
      <div>
        < ClientsList />
        {/*< Clients />*/}
        {/*< B2B />*/}
        {/*< Helpers />*/}
        {/*< Suppliers />*/}
      </div>
    </div>
  )
}
export default Contacts;
