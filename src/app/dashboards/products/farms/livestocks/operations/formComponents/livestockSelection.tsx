import React, { useState, useEffect } from 'react';
import { Button, Select } from 'antd';
import axios from 'axios';  // Make sure to install axios if not already done

interface Livestock {
  value: string;
  label: string;
}

const LivestockSelection: React.FC = () => {
	const [livestocks, setLivestocks] = useState<Livestock[]>([]);
	const [isStaff, setIsStaff] = useState<boolean>(false);

	useEffect(() => {
		const fetchLivestocks = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/v1/farms/markets/livestocks/'); // Adjust URL to your API endpoint
        const fetchedLivestocks = response.data.map((livestock: any) => ({
          value: livestock.id.toString(),  // Assuming 'id' is the unique identifier from the backend
          label: livestock.name,  // Assuming 'name' is the field for livestock name
        }));
        setLivestocks(fetchedLivestocks);
				console.log(fetchedLivestocks);
      } catch (error) {
        console.error('Failed to fetch livestocks:', error);
      }
    };

    fetchLivestocks();
  }, []);  
	return(
		<>
			<div className='flex text-gray-800 w-[68%]'>
				<Select
					showSearch
					style={{ width: '100%' , height: '40px'}}
					placeholder="Selectionnez vos sujets"
					optionFilterProp="children"
					filterOption={(input, option) => (option?.label ?? '').includes(input)}
					filterSort={(optionA, optionB) =>
						(optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
					}
					options={livestocks.map(livestock => ({
						value: livestock.value,
						label: livestock.label, // This aligns with Ant Design's Select `label` for display
						children: livestock.label, // `children` is used for filtering and sorting
					}))}
				/>
				{isStaff && (
					<div className='w-[20%]  flex justify-center items-center px-2'> 
						<Button type="dashed" className='w-[100%] h-[40px] pb-2 flex justify-center items-center text-3xl font-extrabold' block>
							+
						</Button> 
					</div>
				)}
			</div>
		</>
	);
};
	
export default LivestockSelection;