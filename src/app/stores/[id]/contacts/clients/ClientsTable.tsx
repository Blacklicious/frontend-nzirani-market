import { DeleteOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import React, { useState, ChangeEvent } from 'react'

type Client = {
  id: number;
  name_first: string;
  name_family: string;
  telephone: string;
  email: string;
  address: string;
  business: string;
  job: string;
  date_creation: string;
  status: string;
  // ... other client properties
};

const ClientsTable = () => {
  const [uploadedClients, setUploadedClients] = useState<Client[]>([]);
  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e: ProgressEvent<FileReader>) => {
            const content = e.target?.result;
            try {
                if (typeof content === 'string') {
                    const data: Client[] = JSON.parse(content);
                    setUploadedClients(data);
                }
            } catch (error) {
                console.error('Error parsing JSON:', error);
            }
        };
        reader.readAsText(file);
    }
};
  return (
    <div>
      <table className='table-auto w-[100%]'>
        <thead className='w-[100%] '>
          <tr className='border-[3px] border-black text-white'>
            <th className='bg-lime-900 border-black border-[2px]'>Nom</th>
            <th className='bg-lime-900 border-black border-[2px]'>Prenom</th>
            <th className='bg-lime-900 border-black border-[2px]'>Telephone</th>
            <th className='bg-lime-900 border-black border-[2px]'>Email</th>
            <th className='bg-lime-900 border-black border-[2px]'>Business</th>
            <th className='bg-lime-900 border-black border-[2px]'>Job</th>
            <th className='bg-lime-900 border-black border-[2px]'>Date de creation</th>
            <th className='bg-lime-900 border-black border-[2px]'>Status</th>
            <th className='bg-lime-900 border-black border-[2px]'></th>
            {/* Add more <th> elements as needed */}
          </tr>
        </thead>
        <tbody className='w-[100%] text-center bg-white border-[3px] border-black text-black'>
            {uploadedClients.map((client) => (
              <tr key={client.id} className='hover:border-red-900 hover:border-[3px] text-black'>
                <td className=''>{client.name_first}</td>
                <td className=''>{client.name_family}</td>
                <td className=''>{client.telephone}</td>
                <td className=''> {client.email}</td>
                <td className=''> {client.business}</td>
                <td className=''> {client.job} </td>
                <td className=''> {client.date_creation} </td>
                <td className=''> {client.status} </td>
                <td className='flex items-center justify-around p-1'> 
                  <button className='w-[30%] bg-lime-500 hover:bg-llime-400 hover:ring-[2px] ring-black font-bold text-lg py-1 px-2 rounded-md flex items-center justify-center'><UserOutlined /></button> 
                  <button className='w-[30%] bg-yellow-500 hover:bg-yellow-400 hover:ring-[2px] ring-black font-bold text-lg py-1 px-2 rounded-md flex items-center justify-center'><ShoppingCartOutlined /></button>
                  <button className='w-[30%] bg-red-500 hover:bg-red-400 hover:ring-[2px] ring-black font-bold text-lg py-1 px-2 rounded-md flex items-center justify-center'> <DeleteOutlined /></button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default ClientsTable;
