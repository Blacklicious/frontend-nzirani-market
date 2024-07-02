import React from 'react'

const storages = () => {
  return (
    <>
      <div className='flex justify-between text-md text-center mt-4 px-2'>
				<div className='w-[100px] h-[120px] rounded-lg ring-[3px] ring-gray-400 bg-white
				flex flex-col justify-center items-center'>
					Aliment Demarrage
        	<div>
						<div className='w-[100px] h-[50px] bg-white rounded-lg  ring-gray-400 text-2xl font-bold'>
							100 kg
						</div>
					</div>
        </div>
        <div className='w-[100px] h-[120px] rounded-lg ring-[3px] ring-gray-400 bg-white
				flex flex-col justify-center items-center'>
					Aliment croissance
        	<div>
						<div className='w-[100px] h-[50px] bg-white rounded-lg  ring-gray-400 text-2xl font-bold'>
							150 kg
						</div>
					</div>
        </div>
        <div className='w-[100px] h-[120px] rounded-lg ring-[3px] ring-gray-400 bg-white
				flex flex-col justify-center items-center'>
            Ingredient maïs
            <div>
							<div className='w-[100px] h-[50px] bg-white rounded-lg ring-gray-400 text-2xl font-bold'>
								8.00 t
							</div>
            </div>
        </div>
      </div>
    </>
  )
}

export default storages;