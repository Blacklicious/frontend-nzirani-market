"use client";
import React from 'react'
import OperationForm from './livestocks/operations/operationsForm'
import Image from 'next/image'
import { CardBody, CardContainer, CardItem } from './livestocks/utils/3d-card';
import Link from "next/link";


const operations = [
	{
		name: 'Operation 1', livestock_name:'Cobb 500', livestock_image:'/img/products/Cobb500.jpg', cost_estimation:'800.000 fcfa', livestock_amount: 400, livestock_supplier: 'Supplier 1', season: 'Season 1',
		beginning: '2022-01-01', ending: '2022-01-31',	contact: 'Contact 1',	location: 'Location 1',	cost_livestocks: 1000,
		cost_water: 500,	cost_water_estimation: 300,	cost_feed: 800,	cost_feed_estimation: 600,	cost_drugs: 200,	cost_drugs_estimation: 150,
		cost_labor: 1000,	cost_labor_estimation: 800,	cost_death: 500, cost_death_estimation: 400,	revenue_estimation: 5000,
		revenue: 6000,	profit_estimation: 3000,	profit: 4000,
		status: 'Completed',	creation_date: '2022-01-01T00:00:00Z',	modification_date: '2022-01-01T00:00:00Z',	creation_location: 'Location 1',	author: 'Author 1'
	},
	{
		name: 'Operation 2', livestock_name: 'Pintade', livestock_image:'/img/products/pintade-001.jpeg', cost_estimation:'800.000 fcfa',livestock_amount: 10,livestock_supplier: 'Supplier 1', season: 'Season 1',
		beginning: '2022-01-01', ending: '2022-01-31',	contact: 'Contact 1',	location: 'Location 1',	cost_livestocks: 1000,
		cost_water: 500,	cost_water_estimation: 300,	cost_feed: 800,	cost_feed_estimation: 600,	cost_drugs: 200,	cost_drugs_estimation: 150,
		cost_labor: 1000,	cost_labor_estimation: 800,	cost_death: 500, cost_death_estimation: 400,	revenue_estimation: 5000,
		revenue: 6000,	profit_estimation: 3000,	profit: 4000,
		status: 'Completed',	creation_date: '2022-01-01T00:00:00Z',	modification_date: '2022-01-01T00:00:00Z',	creation_location: 'Location 1',	author: 'Author 1'
	},
	{
		name: 'Operation 3', livestock_name: 'Poulet bio', livestock_image:'/img/products/pouletferme-002.jpeg', cost_estimation:'800.000 fcfa', livestock_amount: 10,livestock_supplier: 'Supplier 1', season: 'Season 1',
		beginning: '2022-01-01', ending: '2022-01-31',	contact: 'Contact 1',	location: 'Location 1',	cost_livestocks: 1000,
		cost_water: 500,	cost_water_estimation: 300,	cost_feed: 800,	cost_feed_estimation: 600,	cost_drugs: 200,	cost_drugs_estimation: 150,
		cost_labor: 1000,	cost_labor_estimation: 800,	cost_death: 500, cost_death_estimation: 400,	revenue_estimation: 5000,
		revenue: 6000,	profit_estimation: 3000,	profit: 4000,
		status: 'Completed',	creation_date: '2022-01-01T00:00:00Z',	modification_date: '2022-01-01T00:00:00Z',	creation_location: 'Location 1',	author: 'Author 1'
	},
	{
		name: 'Operation 4',  livestock_name: 'Poulet de pondeuse', livestock_image:'/img/products/pouletpondeuse.jpeg', cost_estimation:'800.000 fcfa',  livestock_amount: 10,livestock_supplier: 'Supplier 1', season: 'Season 1',
		beginning: '2022-01-01', ending: '2022-01-31',	contact: 'Contact 1',	location: 'Location 1',	cost_livestocks: 1000,
		cost_water: 500,	cost_water_estimation: 300,	cost_feed: 800,	cost_feed_estimation: 600,	cost_drugs: 200,	cost_drugs_estimation: 150,
		cost_labor: 1000,	cost_labor_estimation: 800,	cost_death: 500, cost_death_estimation: 400,	revenue_estimation: 5000,
		revenue: 6000,	profit_estimation: 3000,	profit: 4000,
		status: 'Completed',	creation_date: '2022-01-01T00:00:00Z',	modification_date: '2022-01-01T00:00:00Z',	creation_location: 'Location 1',	author: 'Author 1'
	},
	{
		name: 'Operation 5',  livestock_name: 'Boeuf Local', livestock_image:'/img/products/boeuf.jpeg', cost_estimation:'800.000 fcfa', livestock_amount: 10,livestock_supplier: 'Supplier 1', season: 'Season 1',
		beginning: '2022-01-01', ending: '2022-01-31',	contact: 'Contact 1',	location: 'Location 1',	cost_livestocks: 1000,
		cost_water: 500,	cost_water_estimation: 300,	cost_feed: 800,	cost_feed_estimation: 600,	cost_drugs: 200,	cost_drugs_estimation: 150,
		cost_labor: 1000,	cost_labor_estimation: 800,	cost_death: 500, cost_death_estimation: 400,	revenue_estimation: 5000,
		revenue: 6000,	profit_estimation: 3000,	profit: 4000,
		status: 'Completed',	creation_date: '2022-01-01T00:00:00Z',	modification_date: '2022-01-01T00:00:00Z',	creation_location: 'Location 1',	author: 'Author 1'
	},
	{
		name: 'Operation 6',  livestock_name: 'mouton Local', livestock_image:'/img/products/boeuf.jpeg', cost_estimation:'800.000 fcfa', livestock_amount: 10,livestock_supplier: 'Supplier 1', season: 'Season 1',
		beginning: '2022-01-01', ending: '2022-01-31',	contact: 'Contact 1',	location: 'Location 1',	cost_livestocks: 1000,
		cost_water: 500,	cost_water_estimation: 300,	cost_feed: 800,	cost_feed_estimation: 600,	cost_drugs: 200,	cost_drugs_estimation: 150,
		cost_labor: 1000,	cost_labor_estimation: 800,	cost_death: 500, cost_death_estimation: 400,	revenue_estimation: 5000,
		revenue: 6000,	profit_estimation: 3000,	profit: 4000,
		status: 'Completed',	creation_date: '2022-01-01T00:00:00Z',	modification_date: '2022-01-01T00:00:00Z',	creation_location: 'Location 1',	author: 'Author 1'
	},
];


const page = () => {
  return (
		<>
    <div className='my-[50px]'>
      <div className='flex justify-around px-3 pt-[20px]'>
			 <button className='bg-blue-200 px-2 py-2 w-[24%] rounded-[6px] font-bold'> 2022 </button>
			 <button className='bg-blue-200 px-2 py-2 w-[24%] rounded-[6px] font-bold'> 2023 </button>
			 <button className='bg-blue-200 px-2 py-2 w-[24%] rounded-[6px] font-bold'> 2024 </button>
			 <button className='bg-blue-200 px-2 py-2 w-[24%] rounded-[6px] font-bold'> 2025 </button>
			</div>
			<div className='w-[100%] flex-wrap justify-around p-2'>
				<div className='w-[100%] flex justify-around'>
					< OperationForm />
				</div>
			</div>
      <div className='px-3 flex flex-wrap justify-between'>
				{operations.map(operation => (
					<div key={operation.name} className='w-[48%] md:w-[32%] lg:w-[24%] xl:w-[19%] 2xl:w-[16%] 3xl:w-[13%]
					 h-[100%] shadow-sm bg-gray-50 hover:bg-gray-100 rounded-xl mb-2  mt-3 '> 
						<CardContainer  className="inter-var w-[100%]">
							<CardBody className=" relative group/card  dark:bg-black dark:border-white/[0.2]
							border-black/[0.1] w-auto sm:w-[30rem] h-[100%] rounded-xl "
							>
								<CardItem translateZ="50" className="w-full   bg-gray-50 hover:bg-gray-100 rounded-xl pb-3  ">
									<CardItem translateZ="2" className="w-full ">
										<Image
											src={operation.livestock_image} height="1000" width="1000" alt={operation.livestock_name}
											className="h-60 w-full object-cover rounded-t-xl group-hover/card:shadow-sm"
										/>
									</CardItem>
									<CardItem translateZ="40" className="text-xl font-bold text-neutral-600 dark:text-black px-3 mt-3">
										{operation.livestock_name}
									</CardItem>
									<CardItem translateZ="40" className="text-lg font-semibold text-neutral-600 dark:text-black px-3 ">
										{operation.livestock_amount} sujets
									</CardItem>
									<CardItem
										as="p"
										translateZ="40"
										className="text-neutral-500 text-sm max-w-sm dark:text-neutral-600 flex flex-wrap justify-between w-[100%] px-3"
									>
										<div className='w-[100%] rounded-sm '> {operation.beginning}</div>
										<div className='w-[100%] rounded-sm '> {operation.ending}</div>
									</CardItem>
									<div className=" w-[100%] justify-between items-center mt-3 px-3 mb-3 hidden">
										<CardItem
											translateZ={20}
											as={Link}
											href="/dashboards/products/farms/livestocks/operations"
											target="__blank"
											className="px-4 py-2 rounded-xl text-md text-center font-semibold dark:text-white bg-gray-200 w-[100%]"
										>
											Plus details →
										</CardItem>
									</div>
								</CardItem>
							</CardBody>
						</CardContainer>
					</div>
				))}
			</div>
    </div>
		</>
  )
}

export default page
