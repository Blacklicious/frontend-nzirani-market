'use client';
import React, { useState } from 'react'
import ClientsTable from '../clients/ClientsList';
import ClientsForm from '../ContactForm';

const Employes = () => {
  const [showClientForm, setShowClientForm] = useState(false);
  
    
  return (
    <div>
      <div className='flex flex-wrap items-center justify-between bg-green-800  p-3 text-lg rounded-t-lg border-black border-[2px]'> 
      Employés
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded w-[30%] h-[80%] border-black border-[2px]'
          onClick={() => setShowClientForm(!showClientForm)}>
         + Ajoutez un employé
        </button> 
        <div className='w-[100%] text-sm'>
          {showClientForm &&  < ClientsForm />}
        </div>
      </div>
      <div  className='w-[100%] flex bg-green-800 text-black  border-black border-[2px] '>
        <input className='border-2 border-gray-300 bg-white h-10 px-5 pr-16  text-sm focus:outline-none w-[100%]'
          type='search'
          name='search'
          placeholder='Search'
        />
      </div>
      <div>
        < ClientsTable />
      </div>
    </div>
  )
}

export default Employes;
