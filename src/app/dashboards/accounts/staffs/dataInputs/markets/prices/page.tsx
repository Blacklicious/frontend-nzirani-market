import { Button, Select } from 'antd'
import React, { useState } from 'react'
import InputMarketPriceLivestock from './inputMarketPriceLivestock'
import InputMarketPriceCrop from './inputMarketPriceCrop'
import InputMarketPriceItem from './inputMarketPriceItem'
import InputMarketPriceService from './inputMarketPriceService'

const page = () => {
	const [livestockMenu, SetLivestockMenu] = useState(true);
  const [cropMenu, SetCropMenu] = useState(false);
  const [itemMenu, SetItemMenu] = useState(false);
  const [serviceMenu, SetServiceMenu] = useState(false);

  const onChange = (value: string) => {
    console.log(`selected ${value}`);
    if (value === 'livestock') { SetLivestockMenu(true); SetCropMenu(false); SetItemMenu(false); SetServiceMenu(false);
    } else if (value === 'crops') { SetLivestockMenu(false); SetCropMenu(true); SetItemMenu(false); SetServiceMenu(false);
    } else if (value === 'items') { SetLivestockMenu(false); SetCropMenu(false); SetItemMenu(true); SetServiceMenu(false);
    } else if (value === 'services') { SetLivestockMenu(false); SetCropMenu(false); SetItemMenu(false); SetServiceMenu(true);
    };
  }
  
  const onSearch = (value: string) => {
    console.log('search:', value);
  };
  
  // Filter `option.label` match the user type `input`
  const filterOption = (input: string, option?: { label: string; value: string }) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());


  return (
    <>
		<div className='flex justify-between items-center pt-2 w-[100%]'>
			<	Select
				className=''
				showSearch
				defaultValue="livestock"
				style={{ width: '70%' }}
				onChange={onChange}
				placeholder="Selectionnez un index"
				optionFilterProp="children"
				filterOption={filterOption}
				options={[
					{ value: 'livestock', label: 'Bétails - 🐮 🐷 🐔 🐦' },
					{ value: 'crops', label: 'Cultures - 🥭 🌽 🍆 🌿 ',  disabled: true },
					{ value: 'items', label: 'Produits - 🪣 🚰 💊 🛠️', disabled: true  },
					{ value: 'services', label: 'Services - 🧑🏿‍🌾 🦺 🧰 🧹', disabled: true  },
				]}
			/>
			{ livestockMenu ? (  < InputMarketPriceLivestock/>) : null }
        
        { cropMenu ? ( < InputMarketPriceCrop/>) : null }
        
        { itemMenu ? ( < InputMarketPriceItem/>) : null }
        
        { serviceMenu ? ( < InputMarketPriceService/>) : null }
			
		</div>
  	</>
  )
}

export default page