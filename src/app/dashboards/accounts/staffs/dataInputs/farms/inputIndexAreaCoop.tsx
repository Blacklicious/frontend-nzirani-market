import Image from 'next/image'
import React from 'react'

const inputIndexCoop = () => {
  return (
    <div>
      <div>
        <div className='flex justify-around flex-wrap'>
          <div className='w-[120px] h-[180px]
            ring-gray-200 ring-[2px] p-1 bg-black rounded
            flex flex-col my-2'
          >
            <div className='w-[100%] h-[min] bg-white font-extrabold text-center text-[16px]'> Poullailer</div>
            <div className='w-[100%] h-[100%] mt-1 bg-gray-200 relative'>
              <Image src="/img/index/farmAreaCoop.jpg" alt="Poulailler" layout="fill" objectFit="cover" />
            </div>
            <div className='w-[100%] h-[5%] mt-[3px] bg-green-200'></div>
            <div className='w-[100%] h-[min] mt-1  font-bold flex justify-between text-xs'>
              <div className='bg-white w-[49%] text-center '>000-001</div>   
              <div className='bg-white w-[49%] text-center'>99000&#13217;</div>
            </div>
          </div>
          <div className='w-[120px] h-[180px]
            ring-gray-200 ring-[2px] p-1 bg-black rounded
            flex flex-col my-2'
          >
            <div className='w-[100%] h-[min] bg-white font-extrabold text-center text-[16px]'> Étable</div>
            <div className='w-[100%] h-[100%] mt-1 bg-gray-200 relative'>
              <Image src="/img/index/farmAreaBarn.jpg" alt="Etable" layout="fill" objectFit="cover" />
            </div>
            <div className='w-[100%] h-[5%] mt-[3px] bg-green-200'></div>
            <div className='w-[100%] h-[min] mt-1  font-bold flex justify-between text-xs'>
              <div className='bg-white w-[49%] text-center '>000-001</div>   
              <div className='bg-white w-[49%] text-center'>99000&#13217;</div>
            </div>
          </div>
          <div className='w-[120px] h-[180px]
            ring-gray-200 ring-[2px] p-1 bg-black rounded
            flex flex-col my-2'
          >
            <div className='w-[100%] h-[min] bg-white font-extrabold text-center text-[16px]'> Sol Cultivé</div>
            <div className='w-[100%] h-[100%] mt-1 bg-gray-200 relative'>
              <Image src="/img/index/farmAreaCrop.jpg" alt="Crop" layout="fill" objectFit="cover" />
            </div>
            <div className='w-[100%] h-[5%] mt-[3px] bg-green-200'></div>
            <div className='w-[100%] h-[min] mt-1  font-bold flex justify-between  text-xs'>
              <div className='bg-white w-[49%] text-center '>000-001</div>   
              <div className='bg-white w-[49%] text-center'>99000&#13217;</div>
            </div>
          </div>
        </div>    
      </div>
    </div>
  )
}

export default inputIndexCoop