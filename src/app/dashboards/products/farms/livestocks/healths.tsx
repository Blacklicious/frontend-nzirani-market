import React from 'react'

const healthData = () => {
  return (
    <>
      <div className='h-min rounded flex justify-between mt-6 px-3'>
				<div className='w-[100px] h-[100%] flex flex-col justify-between items-center bg-white'>
					<div  className=' bg-white rounded-[10px] w-[100px]  h-[120px] flex flex-col justify-center
					  items-center border-[4px] border-green-500 ring-4 ring-gray-700 shadow-md 
						hover:bg-black/50 hover:text-white'>
						<div className=' text-3xl font-extrabold flex flex-col '>
							99.99 
						</div>
						<div className='text-sm  font-semibold mt-[-10px]'>kilogrammes</div>
					</div>
					<button  className=' bg-white rounded-md h-[50px] w-[80%] ring-2 font-bold hidden'> + Pésee</button>
				</div>
				<div className='w-[100px] h-[100%] flex flex-col justify-between items-center'>
					<div  className=' bg-white rounded-[10px] w-[100px] h-[120px] flex flex-col justify-center 
						items-center border-[4px] border-yellow-500 ring-4 ring-black  shadow-lg
						hover:bg-black/50 hover:text-white'>
						<div className=' text-4xl font-extrabold'>
							10%
						</div>
						<div className=' text-md font-semibold mt-[-10px] '>
							15 conta.
						</div>
					</div>
					<button className=' bg-blue-200 rounded-md h-[50px] w-[80%] ring-2 font-bold hidden '> + Mort</button>
				</div>
				<div className='w-[100px] h-[100%] flex flex-col justify-between items-center'>
					<div  className=' bg-white rounded-[10px] w-[100px] h-[120px] flex flex-col justify-center 
						items-center border-[4px] border-red-500 ring-4 ring-black  shadow-lg
						hover:bg-black/50 hover:text-white'>
						<div className=' text-4xl font-extrabold'>
							10%
						</div>
						<div className=' text-md font-semibold mt-[-10px] '>
							15 morts
						</div>
					</div>
					<button className=' bg-blue-200 rounded-md h-[50px] w-[80%] ring-2 font-bold hidden '> + Mort</button>
				</div>
			</div>
			<div className='px-5'>
				<div className=' w-[100%] flex flex-col justify-center items-center bg-white ring-2
				ring-gray-500 rounded my-4 hover:bg-orange-100/50 '>
					<div className='w-[100%] text-xl font-bold flex  justify-center items-center px-2  rounded  bg-gray-100'>
						Nombre de sujets
					</div>
					<div className='w-[100%]  h-[30px]  flex justify-center  items-center
					px-2 text-3xl text-gray-500  font-extrabold '> 
						341
					</div>
				</div>
			</div>
			
    </>
  )
}

export default healthData ;
