import { Button, Radio } from 'antd'
import React, { useState } from 'react'
import InputDataPrice from './prices/page'
import InputDataSupplier from './suppliers/page'

const page = () => {
	const [priceMenu, setPriceMenu] = useState(true);
	const [supplierMenu, setSupplierMenu] = useState(false)

  return (
    <>
			<div>Market data input</div>
			<div className='flex justify-around rounded-md w-[100%]'>
				<Radio.Group defaultValue="a" className='w-[100%]'>
					<Radio.Button value="a"  onClick={() =>{ setPriceMenu(true) ; setSupplierMenu(false)}} 
					 className='w-[50%]'
					>Prix du marché</Radio.Button>
					<Radio.Button value="b" onClick={() =>{ setPriceMenu(false) ; setSupplierMenu(true)}} 
						className='w-[50%]'
					>Fournisseurs</Radio.Button>
				</Radio.Group>
			</div>
			<div className=''>
				{ priceMenu ? (
					<div className=' w-[100%] flex flex-wrap justify-around'>
						< InputDataPrice />
					</div>
				): null }
				{ supplierMenu ? ( 
				<div className='w-[100%]'>
					<div className=' w-[100%] flex flex-wrap justify-around'>
						< InputDataSupplier />
					</div>
				</div>
				): null }
    	</div>
		</>
  )
}

export default page