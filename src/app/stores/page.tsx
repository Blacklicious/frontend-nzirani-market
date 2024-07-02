import React from 'react';
import Image from 'next/image';
import type { Store } from './types'; // Ensure this path is correct
import Link from 'next/link';

const StoresPage: React.FC = () => {
  const dummyStores: Store[] = [
    {
      id: 123,
      name: 'Promotion de Produits Agropastoraux',
      imageUrl: '/img/ppa_logo.png',
      description: 'A short description of Promotion de Produits Agropastoraux',
      location: 'Faladie Sema,Bamako, Mali',
    },
    {
      id: 2,
      name: 'Business X',
      imageUrl: '/img/hero-chicken.png',
      description: 'A short description of Business X',
      location: 'Faladie,Bamako, Mali',
    },
    {
      id: 3,
      name: 'Super Store',
      imageUrl: '/placeholder-store2.jpg',
      description: 'Another interesting store',
      location: 'Bamako, Mali',
    },
    {
      id: 4,
      name: 'Cool Shop',
      imageUrl: '/placeholder-store3.jpg',
      description: 'A store with cool stuff',
      location: 'Bamako, Mali',
    },
    // ... Add more businesses here
  ];

  return (
    <div className="px-[30px] bg-gray-100 w-full">
      <h2 className="text-2xl font-semibold mt-8 mb-4">Listes des boutiques.</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {dummyStores.map((store) => (
          <div key={store.id} className="border rounded-md p-3 hover:shadow-md bg-white/50 shadow-md">
            <Image src={store.imageUrl} alt={store.name} width={320} height={180} className="mb-3 bg-gray-100" layout="responsive" />
            <h3 className="text-lg font-semibold">{store.name}</h3>
            <p>{store.description}</p>
            <p className='font-bold text-gray-500'>🏪 {store.location}</p>
            <Link href={`/stores/${store.id}`} className='flex justify-end'>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 inline-block">View Store Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>   
  );
};

export default StoresPage;
