import { Select } from 'antd'
import React, { useState } from 'react'
import IndexInputCrop from './indexInputCrops'
import IndexInputItem from './indexInputItems'
import IndexInputLivestock from './indexInputLivestocks'
import IndexListInputLivestock from './indexInputListLivestock'
import IndexInputService from './indexInputServices'

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
      <div className='flex flex-wrap justify-between  py-2 rounded-lg '>
        <Select
          showSearch
          defaultValue="livestock"
          style={{ width: '68%' }}
          onChange={onChange}
          placeholder="Selectionnez un index"
          optionFilterProp="children"
          filterOption={filterOption}
          options={[
            { value: 'livestock', label: 'animaux - 🐮 🐷 🐔 🐦' },
            { value: 'items', label: 'produits - 🪣 🚰 💊 🛠️', disabled: true  },
            { value: 'services', label: 'services - 🧑🏿‍🌾 🦺 🧰 🧹', disabled: true  },
            { value: 'crops', label: 'cultures - 🥭 🌽 🍆 🌿 ',  },
          ]}
        />
        { livestockMenu ? ( 
          <>
            <div className='w-[30%]'>< IndexInputLivestock/></div>
            <div className=' p-2'>< IndexListInputLivestock/></div>
          </>
        ) : null }
        
          { cropMenu ? ( < IndexInputCrop/>) : null }
          
          { itemMenu ? ( < IndexInputItem/>) : null }
          
          { serviceMenu ? ( < IndexInputService/>) : null }
      </div>
    </>
  )
}

export default page;