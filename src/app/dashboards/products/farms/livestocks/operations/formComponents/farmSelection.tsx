import React, { useState, useEffect } from 'react';
import { Button, Select } from 'antd';
import axios from 'axios';  // Make sure to install axios if not already done

interface farm {
  value: string;
  label: string;
}

const farmSelection: React.FC = () => {
	const [farms, setfarms] = useState<farm[]>([]);
	const [isStaff, setIsStaff] = useState<boolean>(false);

	useEffect(() => {
		const fetchfarms = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/v1/farms/'); // Adjust URL to your API endpoint
        const fetchedfarms = response.data.map((farm: any) => ({
          value: farm.id.toString(),  // Assuming 'id' is the unique identifier from the backend
          label: farm.name,  // Assuming 'name' is the field for livestock name
        }));
        setfarms(fetchedfarms);
				console.log(fetchedfarms);
      } catch (error) {
        console.error('Failed to fetch livestocks:', error);
      }
    };

    fetchfarms();
  }, []);  
	return(
		<>
			<div className='flex text-gray-800 w-[100%]'>
				<Select
					showSearch
					style={{ width: '100%' , height: '40px'}}
					placeholder="Selectionnez le lieu de l'operation"
					optionFilterProp="children"
					filterOption={(input, option) => (option?.label ?? '').includes(input)}
					filterSort={(optionA, optionB) =>
						(optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
					}
					options={farms.map(farm => ({
						value: farm.value,
						label: farm.label, // This aligns with Ant Design's Select `label` for display
						children: farm.label, // `children` is used for filtering and sorting
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
	
export default farmSelection;