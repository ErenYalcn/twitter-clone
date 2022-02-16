import React from 'react'

export default function Followlist() {
  return (
    <div className='mt-2 bg-gray text-black rounded-md ml-2'>
        <h3 className='text-xl font-bold text-sgray mx-2 pt-3 mb-4'>Kimi takip etmeli</h3>
        <div className='flex justify-between items-center mb-3'>
            <div className='flex gap-x-3 mx-2 pb-2'>
                <img className='w-[48px] h-[48px] rounded-full' src="https://pbs.twimg.com/profile_images/1490589455786573824/M5_HK15F_x96.jpg" />
                <div className='flex flex-col'>
                    <span className='text-sgray font-semibold'>Binance</span>
                    <span className='text-sm text-ts'>@binance</span>
                </div>
            </div>
            <button className='bg-black text-white rounded-2xl mx-6 items-center w-[87px] h-[32px] mb-2 text-sm font-semibold'>
                Takip et
            </button>
        </div>
                <div className='flex justify-between items-center pb-2'>
            <div className='flex gap-x-3 mx-2 pb-2'>
                <img className='w-[48px] h-[48px] rounded-full' src="https://pbs.twimg.com/profile_images/920233201301254144/oCw2s3GI_x96.jpg" />
                <div className='flex flex-col'>
                    <span className='text-sgray font-semibold'>Crypto.com</span>
                    <span className='text-sm text-ts'>@cryptocom</span>
                </div>
            </div>
            <button className='bg-black text-white rounded-2xl mx-6 items-center w-[87px] h-[32px] mb-2 text-sm font-semibold'>
                Takip et
            </button>
        </div>

    
    </div>
  )
}
