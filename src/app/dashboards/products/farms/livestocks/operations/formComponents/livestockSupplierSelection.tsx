import React, { useState, useEffect } from 'react';
import { Button, Select } from 'antd';
import axios from 'axios';  // Make sure to install axios if not already done

interface LivestockSupplier {
  value: string;
  label: string;
}

const LivestockSupplierSelection: React.FC = () => {
	const [livestockSuppliers, setLivestockSuppliers] = useState<LivestockSupplier[]>([]);
	const [isStaff, setIsStaff] = useState<boolean>(false);

	useEffect(() => {
		const fetchLivestockSuppliers = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/v1/farms/markets/livestocks/suppliers/'); // Adjust URL to your API endpoint
        const fetchedLivestockSuppliers = response.data.map((livestockSupplier: any) => ({
          value: livestockSupplier.id.toString(),  // Assuming 'id' is the unique identifier from the backend
          label: livestockSupplier.name,  // Assuming 'name' is the field for livestock name
        }));
        setLivestockSuppliers(fetchedLivestockSuppliers);
				console.log(fetchedLivestockSuppliers);
      } catch (error) {
        console.error('Failed to fetch livestocks:', error);
      }
    };

    fetchLivestockSuppliers();
  }, []);  
	return(
		<>
			<div className='flex text-gray-800 w-[100%]'>
				<Select
					showSearch
					style={{ width: '100%' , height: '40px'}}
					placeholder="Selectionnez le fournisseur de vos sujets"
					optionFilterProp="children"
					filterOption={(input, option) => (option?.label ?? '').includes(input)}
					filterSort={(optionA, optionB) =>
						(optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
					}
					options={livestockSuppliers.map(livestock => ({
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
	
export default LivestockSupplierSelection;