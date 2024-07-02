import React from 'react'

const ClientsCard = () => {
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
  return (
    <div className='flex flex-wrap justify-around'>
      {clients.map((client) => (
        <div id={`client-${client.id}`} className='bg-gray-200 w-[330px] h-min rounded-lg p-3 flex flex-col justify-between hover:shadow-lg m-2'>
          <div className='flex p-2'>
            <div className='w-[40%] h-[100px] bg-gray-400 rounded-lg ring-2  order-2'>
              Image 
            </div>
            <div className=' w-[59%] h-[100px] flex flex-col justify-between pl-2 order-1'>
              <div className=' w-[100%] mt-3 text-left text-xl font-bold'>{client.name_first}</div>
              <div className=' w-[100%] text-left text-xl font-bold'>{client.name_family}</div>
              <div className=' w-[100%] text-left'>{client.telephone}</div>
            </div>
          </div>
          <div className='w-[100%] text-center text-lg font-bold mt-2 pt-2 border-t-[3px] border-gray-400'>
            {client.email}
          </div>
          <div className='w-[100%] text-center px-2'>
            {client.address}
          </div>
          <div className='flex flex-wrap w-[100%] justify-between'>
            <div className='w-[49%] text-center font-bold mb-2'>
            {client.business}
            </div>
            <div className='w-[49%] text-center font-bold mb-2'>
            {client.job}
            </div>
            <div className='w-[100%] flex justify-around mb-2'>
              <button className='px-4 mt-2 ring-[3px] ring-blue-500 hover:bg-blue-400 bg-white rounded-sm'>
                Voir plus +
              </button>
              <button className='px-4 mt-2 ring-[3px] ring-yellow-500 hover:bg-yellow-400 bg-white rounded-sm'>
                Créez un panier 
              </button>
            </div>
            
          </div>
        </div>
    ))}
    </div>
  )
}

export default ClientsCard;
