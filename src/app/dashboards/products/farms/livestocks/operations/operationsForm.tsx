import React from 'react'
import FarmSelection from './formComponents/farmSelection';
import LivestockSelection from './formComponents/livestockSelection';
import LivestockSupplierSelection from './formComponents/livestockSupplierSelection';
import { InputNumber, InputNumberProps } from 'antd';
import { DatePicker } from 'antd';
import moment from 'moment';
import { TwitterOutlined } from '@ant-design/icons';

const onChangeQty: InputNumberProps['onChange'] = (value) => {
  console.log('changed', value);
};


const operationsForm = () => {
  
  return (
    <>
			<div className='w-[100%] flex flex-col justify-between text-lg p-2'>
				<button className='w-[100%] h-[40px] bg-blue-300 rounded-[6px] font-bold mb-1'> + Operation </button>
        <div className='w-[100%] bg-gray-50  rounded-[6px]  flex flex-wrap justify-between p-3 mt-2 '>
          <div className='lg:w-[49%] mb-3 bg-gray-300 p-2 rounded-[6px]'>
            <input className='w-[100%] h-[40px] px-2 hidden' placeholder="Operation's name" type="text" />
            <div className='w-[100%] h-[40px] '>
              < FarmSelection />
            </div>
            <div className='w-[100%] flex justify-between mt-2'>
              < LivestockSelection />
              <div className=' w-[30%] h-[40px] flex justify-between
              items-center py-1 '>
                <InputNumber style={{ width: '100%' }} size="large" min={1} max={100000} 
                  onChange={onChangeQty} placeholder='Quantité' required
                  className='w-[100%] rounded-[5px] text-[14px]' />
              </div>
            </div>
            <div className='w-[100%] h-[40px] mt-2'>
              < LivestockSupplierSelection />
            </div>
            <div className=' w-[100%] flex justify-between mt-2'>
              <div className='w-[100%] h-[40px]'>
                <DatePicker  className='w-[100%] h-[40px]' placeholder="Debut de l'operation" />
              </div>
            </div>
          </div>
          <div className='w-[100%] lg:w-[49%]  mb-3 text-gray-500 flex flex-wrap justify-between px-2 lg:p-1 py-1 '>
            <div className='flex justify-between text-[15px] ring-1 ring-gray-300 px-3 w-[100%] h-[30px] lg:h-[40px]
             lg:w-[49%]   rounded-[6px] bg-white items-center '>
              <div>Coût des sujets</div>
              <div>260.000 fcfa</div>
            </div>
            <div className='flex justify-between text-[15px] ring-1 ring-gray-300 px-3 w-[100%] h-[30px] lg:h-[40px]
             lg:w-[49%]   rounded-[6px] bg-white mt-2 items-center lg:mt-0 '>
              <div>Coût de nourriture </div>
              <div>260.000 fcfa</div>
            </div>
            <div className='flex justify-between text-[15px] ring-1 ring-gray-300 px-3 w-[100%] h-[30px] lg:h-[40px]
             lg:w-[49%]   rounded-[6px] bg-white mt-2 lg:mt-3 items-center'>
              <div>Coût de pharmacie</div>
              <div>260.000 fcfa</div>
            </div>
            <div className='flex justify-between text-[15px] ring-1 ring-gray-300 px-3 w-[100%] h-[30px] lg:h-[40px]
             lg:w-[49%]   rounded-[6px] bg-white mt-2 lg:mt-3 items-center'>
              <div>Coût des employees </div>
              <div>260.000 fcfa</div>
            </div>
            <div className='flex justify-between text-[15px] ring-1 ring-gray-300 px-3 w-[100%] h-[30px] lg:h-[40px]
             lg:w-[49%]   rounded-[6px] bg-white mt-2 lg:mt-3 items-center'>
              <div>Coût des pertes </div>
              <div>260.000 fcfa</div>
            </div>
            <div className='flex justify-between text-[15px] ring-1 ring-gray-300 px-3 w-[100%] h-[30px] lg:h-[40px]
             lg:w-[49%]   rounded-[6px] bg-white mt-2 lg:mt-3 items-center'>
              <div>Coût de revenue</div>
              <div>685.000 fcfa</div>
            </div> 
            <div className='flex justify-between text-[20px] font-bold ring-[1px] ring-gray-300 px-3 w-[100%] h-[36px]
             rounded-[6px] bg-white mt-3 lg:mt-3 items-center'> 
              <div>Coût TOTAL</div>
              <div className='text-[25px] font-semibold'>260.000 fcfa</div>
            </div>
          </div>
          <div className='w-[100%] '>
            <button className='w-[100%] h-[40px] rounded-[6px] bg-blue-200 hover:bg-blue-500 font-bold'> Soumettre  </button>
          </div>
        </div>
      </div>
    </>
    
  )
}

export default operationsForm;
