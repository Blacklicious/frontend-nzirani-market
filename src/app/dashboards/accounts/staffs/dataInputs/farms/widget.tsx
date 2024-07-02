import React, { useState } from 'react'
import InputIndexAreaCoop from './inputIndexAreaCoop'
import InputIndexBarn from './inputIndexAreaBarn'
import InputIndexCroparea from './inputIndexAreaCrop'
import Image from 'next/image'
import { Button, Input, Select } from 'antd';
import AreaForm from './inputIndexArea'




const widget = () => {
  return (
    <div>
        <div className=''>
          <div className='flex justify-between'> 
            <Select
              showSearch
              style={{ width: '70%' }}
              placeholder="Choissisez une ferme"
              optionFilterProp="children"
              filterOption={(input, option) => (option?.label ?? '').includes(input)}
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
              }
              options={[
                {
                  value: '1',
                  label: 'PPA - manakoroni',
                },
                {
                  value: '2',
                  label: 'Wele Diallo - titibougou',
                },
                {
                  value: '3',
                  label: 'Ferme COC0 - sanankoroba',
                },
              ]}
            />
            < AreaForm />
          </div>
          
          <div className=' mt-2 '>
            <div className='w-[100%] h-[min] rounded-t-lg 
               border-x-[4px] border-t-[4px] border-yellow-500 bg-yellow-400 px-1 pt-1'
            >
              <div className='w-[100%] h-[100%] bg-green-800 rounded-t-md'>
                <div className='p-2'>
                  <Button className='w-[100%] mb-2' >ajouter une zone de travail</Button>
                  <iframe className='rounded-lg' src="https://www.google.com/maps/d/embed?mid=1B9-Vebeow6AvYepz1e62QxGK18S5NJM&hl=en&ehbc=2E312F" width="100%" height="480"></iframe>
                </div>
              </div>
            </div>
            <div className='w-[100%] h-[min] text-center text-3xl font-bold
              ring-[1px] ring-black  border-y-[1px] border-black bg-yellow-400 
              py-[4px] px-[4px] rounded'
            >
              <div className='w-[100%] bg-white'>
                Nom de la Ferme
              </div> 
            </div>
            <div className=' border-x-[4px] border-b-[4px] border-yellow-500
             bg-yellow-400 px-1 pb-1  rounded-b-lg mb-[60px]'>
              <div className='bg-green-800 text-center rounded-b-md'>
                <div className=' flex justify-between text-center p-2'>
                  <div className='bg-white w-[32%] rounded '> quartier </div> 
                  <div className='bg-white w-[32%] rounded'>taille m2</div>
                  <div className='bg-white w-[32%] rounded'>l'age </div>
                </div>
                < InputIndexAreaCoop />
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default widget