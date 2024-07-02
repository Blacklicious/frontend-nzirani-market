import React from 'react'

const Services = () => {
    const services = [
        { id: 1, name: 'Service 1', price: 50, duration: '1h', supplier: 'Employee 1', category: 'Category 1', description: 'This is a description of Service 1.', expiryDate: '2022-01-01' },
        { id: 2, name: 'Service 2', price: 100, duration: '2h', supplier: 'Employee 2', category: 'Category 2', description: 'This is a description of Service 2.', expiryDate: '2022-01-01' },
        { id: 3, name: 'Service 3', price: 150, duration: '3h', supplier: 'Employee 3', category: 'Category 3', description: 'This is a description of Service 3.', expiryDate: '2022-01-01' },
      ];

  return (
    <div className='border-black border-[2px]'>
        <div className='flex flex-wrap items-center justify-between p-3 text-lg bg-green-800 '> 
          Services
          <button className='bg-green-500  hover:bg-green-800 text-white font-bold px-4 rounded w-[30%] h-[80%]  border-black border-[2px]'>
            Ajoutez un service
          </button> 
          <div className='w-[100%] hidden text-sm'>
            Service form here
          </div>
        </div>  
        <div  className='w-[100%]'>
          <input className='border-2 border-gray-300 bg-white h-10 px-5 pr-16 text-sm focus:outline-none w-[100%]'
            type='search'
            name='search'
            placeholder='Search'
          />
        </div>
        
        <table className='table-auto w-[100%]'>
          <thead className='w-[100%] border-black border-[2px]'>
            <tr>
              <th className='bg-green-800 border-black border-[2px]'>Nom</th>
              <th className='bg-green-800 border-black border-[2px]'>Prix</th>
              <th className='bg-green-800 border-black border-[2px]'>Durée</th>
              <th className='bg-green-800 border-black border-[2px]'>Fournisseur</th>
              <th className='bg-green-800 border-black border-[2px]'>Categorie</th>
              <th className='bg-green-800 border-black border-[2px]'>Description</th>
              <th className='bg-green-800 border-black border-[2px]'>Date d&apos;expiration</th>
              <th className='bg-green-800 border-black border-[2px]'>Status</th>
              {/* Add more <th> elements as needed */}
            </tr>
          </thead>
          <tbody className='w-[100%] text-center bg-white text-black border-black border-[2px] '>
            {services.map((service) => (
              <tr key={service.id} className='hover:border-red-900 hover:border-[3px]'>
                <td className=''>{service.name}</td>
                <td className=''>{service.price}</td>
                <td className=''>{service.duration}</td>
                <td className=''> {service.supplier}</td>
                <td className=''> {service.category}</td>
                <td className=''> {service.description}</td>
                <td className=''> {service.expiryDate} </td>
                <td className=''> en stock</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>  
  )
}

export default Services;
