'use client';
import React, { useState } from 'react'
import ClientsCard from './ClientsCard';
import {
  ShoppingCartOutlined,
  DeleteOutlined, 
  UserOutlined ,
  TableOutlined,
  IdcardOutlined,
} from '@ant-design/icons';
import ClientsTable from './ClientsTable';

const ClientsList = () => {
    const clients = [
        {
                id: 1, name_first: 'testinhio1', name_family: 'nzirahio1', telephone: '+223 00000000',  email: 'testinhio@nzirani.com', 
                address: 'Mali, Bamako, Commune 1, Quartier du Fleuve, Rue 1, Porte 1, Chambre 223', business: 'Nzirani IO', 
                job: 'Stagiaire', note: 'This is a description of client 1.', date_creation: '2022-01-01', status: 'active',
            },
            {
                id: 2,  name_first: 'testinhio2',  name_family: 'nzirahio2', telephone: '+223 00000000', email: 'testinhio@nzirani.com',
                address: 'Mali, Bamako, Commune 2, Quartier du Fleuve, Rue 2, Porte 2, Chambre 223',  business: 'Nzirani IO', job: 'Fermier',
                note: 'This is a description of client 2.', date_creation: '2022-01-01', status: 'active',
            },
            {
                id: 3,  name_first: 'testinhio3', name_family: 'nzirahio3', telephone: '+223 00000000', email: 'testinhio@nzirani.com',
                address: 'Mali, Bamako, Commune 3, Quartier du Fleuve, Rue 3, Porte 3, Chambre 223',  business: 'Nzirani IO',
                job: 'Stagiaire', note: 'This is a description of client 3.', date_creation: '2022-01-01', status: 'active',
            },
            {
                id: 4,  name_first: 'testinhio4', name_family: 'nzirahio4', telephone: '+223 00000004', email: 'testinhio@nzirani.com',
                address: 'Mali, Bamako, Commune 4, Quartier du Fleuve, Rue 4, Porte 4, Chambre 223',  business: 'Nzirani IO',
                job: 'Stagiaire', note: 'This is a description of client 4.', date_creation: '2024-01-01', status: 'active',
            },
    ];
  
  
  const [showTable, setShowTable] = useState(true);
  const [showCard, setShowCard] = useState(false);
  return (
    <div className='text-black'>
      <div className='w-[100] rounded-t-lg bg-lime-900 border-[3px] border-black p-3 space-x-4 flex justify-end'>
        <button className='w-[90px] bg-gray-200 hover:bg-gray-400 px-2 rounded-md flex items-center justify-around '
          onClick={() => {setShowCard(false); setShowTable(true)}}
        >
          <TableOutlined />
          Table
        </button>
        <button className='w-[90px] bg-gray-200 hover:bg-gray-400 px-2 rounded-md flex items-center justify-around '
          onClick={() => {setShowCard(true); setShowTable(false)}}
        > <IdcardOutlined />Carte</button>
      </div>
      {showTable &&
        <>
          < ClientsTable />
        </>
      }  
      {showCard &&
        <div className='w-[100%]  border-[3px] border-black  flex flex-wrap justify-around p-4 bg-white'>
          <ClientsCard />
          <ClientsCard />
          <ClientsCard />
          <ClientsCard />
          <ClientsCard />
        </div>
      }
      <div className='w-[]100%] bg-lime-900  rounded-b-lg border-[3px] border-black p-4 '>

      </div>
    </div>
  )
}

export default ClientsList;
