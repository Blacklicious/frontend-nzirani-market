import React, { useState } from 'react'
import OperationsInput from './dataInputs/operations/page'
import MarketInput from './dataInputs/markets/page'
import InputIndexFarm from './dataInputs/farms/widget'
import { Button, ConfigProviderProps, Radio } from 'antd'


type IndexType = ConfigProviderProps['componentSize'];

const page = () => {
  const [index, setIndex] = useState("operations"); // default is 'middle'
  
	const [operationMenu, setOperationMenu] = useState(true)
	const [marketMenu, setMarketMenu] = useState(false)
	const [buildingMenu, setBuildingMenu] = useState(false)

  return (
    <>
      <div className='flex justify-between w-[100%] bg-white rounded-lg text-md mb-2 font-bold'>
          <div className='text-center w-[33.3%] h-[35px] border-black border-[1px] rounded-l-lg
            hover:bg-gray-200 hover:border-[2px] flex justify-center items-center'
            onClick={ () =>{ setOperationMenu(true) ; setMarketMenu(false) ; setBuildingMenu(false) }} >
            <div className='text-sm font-bold mr-1'>🧑🏿‍🌾</div>
            <div className='text-xs'>Opérations</div>
          </div>
          <div className='text-center w-[33.3%] h-[35px] border-black border-y-[1px]
            hover:bg-gray-200 hover:border-y-[2px] hover:border-x-[1px] flex justify-center items-center'
            onClick={ () =>{ setOperationMenu(false) ; setMarketMenu(true) ; setBuildingMenu(false) }} >
            <div className='text-sm font-bold mr-1'>🏢</div>
            <div className='text-xs'>Marchés</div>
          </div>
          <div className='text-center w-[33.3%] h-[35px] border-black border-[1px] rounded-r-lg
            hover:bg-gray-200 hover:border-[2px] flex justify-center items-center'
            onClick={ () =>{ setOperationMenu(false) ; setMarketMenu(false) ; setBuildingMenu(true) }}>
            <div className='text-md font-bold mr-1'>🏢</div>
            <div className='text-xs'>Buildings</div>
          </div>
      </div>
        {operationMenu ? ( 
          <div className='p-2 flex flex-col bg-white border-black border-[1px] rounded-md '> 
            Operation index data input
            < OperationsInput/>
        </div>
				) : null}
        {marketMenu ? ( 
          <div className='p-2 flex flex-col bg-white border-black border-[1px] rounded-md'> 
            < MarketInput/>
          </div>
				) : null}
        {buildingMenu ? ( 
          <div className='p-2 flex flex-col bg-white border-black border-[1px] rounded-md text-sm'> 
            Buildings managements data input
            < InputIndexFarm />
            
          </div>
				) : null}
    </>
  )
}

export default page;