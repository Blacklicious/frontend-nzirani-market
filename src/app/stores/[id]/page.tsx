'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import type { Store } from '../types'; // Import your Store interface

// Dummy data for products and services
const dummyProducts = [
  { id: 1, name: 'Poulet de chair', description: 'Description of Product A', price: '5000 fcfa', size:'sm-l-xl', status:'in-stock', owner:'123' },
  { id: 2, name: 'Poulet de ferme', description: 'Description of Product B', price: '$8', size:'sm-l-xl', status:'in-stock', owner:'123' },
  { id: 3, name: 'Boeuf entier', description: 'Description of Product B', price: '$1000', size:'sm-l-xl', status:'in-stock', owner:'123' },
  { id: 4, name: 'Mouton local', description: 'Description of Product B', price: '$160', size:'sm-l-xl', status:'in-stock', owner:'123' },
  { id: 5, name: 'Mounton Babal', description: 'Description of Product B', price: '$500', size:'sm-l-xl', status:'in-stock', owner:'123' },
];

const dummyServices = [
  { id: 1, name: 'Boucher Bovin', description: 'Description of Service A', duration: '1 hour 30 minutes', price: '$12' },
  { id: 2, name: 'Boucher ovin', description: 'Description of Service B', duration: '1 hour', price: '$8' },
  { id: 3, name: 'Lait Mensuel', description: 'Description of Service B', duration: '1 month', price: '$100' },
  { id: 4, name: 'Poulet Mensuel', description: 'Description of Service B', duration: '1 hour', price: '$800' },

];

function StoreDetails({ params }: { params: { id: string } }) {
  const router = useRouter(); 
  const [storeData, setStoreData] = useState<Store | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // Example useEffect to simulate fetching data
  useEffect(() => {
    setIsLoading(true);
    // Simulate fetching store data
    setTimeout(() => {
      const dummyStore: Store = {
        id: parseInt(params.id), // Using params.id as store ID
        name: 'Example Store',
        imageUrl: 'https://via.placeholder.com/150',
        description: 'A fantastic store with amazing products and services!',
        location: 'Sokorodji, Bamako, Mali',
      };
      setStoreData(dummyStore);
      setIsLoading(false);
    }, 1000);
  }, [params.id]);
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  //if (!storeData) return <div>Store Not Found</div>;
  
  return (
    <div>
      <div className='w-[100%] h-[15vh] lg:h-[20vh] bg-gray-700 p-3 text-white'>
        header
      </div>
      <div className='w-[100%] h-[min] bg-gray-300 flex items-center p-2'>
        <div>
          <div className=' bg-gray-400 w-[150px] h-[150px] p-2 mr-2'>
            <img src={storeData?.imageUrl} alt={storeData?.name} className="w-full h-full object-cover" />
          </div>
        </div>
        <div className='text-sm md:text-lg w-[100%] md:flex md:justify-around items-center'>
          <div className=''>
            <div>Title store {params.id} {storeData?.name}</div>
            <div>{storeData?.location} </div>
            <div className='flex justify-between'>
              <div>ventes - {params.id}0000</div>
              <div>⭐⭐⭐⭐⭐</div>
            </div>
            <button className='bg-blue-300 px-2 rounded-md text-sm w-[100%] h-[30px] mt-1'>❤️ Suivre</button>
          </div>
          <div className=' hidden md:flex w-[70%] h-[140px] border-[2px] bg-white px-2 rounded-lg'>
            bagdes
          </div>
        </div>
      </div>
      <div className='text-lg p-2 w-[100%]'>
        {storeData?.description} 
      </div>
      <div className='w-[100%] bg-gray-200 flex flex-wrap justify-around  p-2 '>
        {dummyProducts.map((product) => (
          <div key={product.id} className='bg-gray-100 p-2 w-[45%] md:w-[30%] lg:w-[20%] rounded-2xl m-1'>
            <div className='w-full h-[175px] bg-gray-400 rounded-xl'></div>
            <div className='px-2 py-1 flex-wrap justify-around items-center '>
              <div className='font-semibold w-[100%]'>{product.name}</div>
              <div className='font-bold '>{product.price}</div>
            </div>
            <div className='flex justify-between items-center  rounded-xl '>
              <button className='bg-gray-200 hover:bg-gray-300 hover:border-[2px] rounded-md text-sm  w-[60%] py-1'> Infos</button>
              <button className='bg-gray-200 hover:bg-gray-300 hover:border-[2px] rounded-md text-sm w-[35%] py-1'> 🛒</button>
            </div>
          </div>
        ))}
      </div>
      <div className='p-3'>
        <h2 className='text-lg font-bold'>Services</h2>
        {dummyServices.map((service) => (
          <div key={service.id} className='bg-gray-100 p-2 m-2 rounded'>
            <h3 className='font-semibold'>{service.name}</h3>
            <p>{service.description}</p>
            <p>Duration: {service.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreDetails;
