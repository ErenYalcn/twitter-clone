import React from 'react'
import { Icon } from 'Icons'
export default function Docket() {
  return (
    <div className='mt-2 bg-gray text-black rounded-md ml-2'>
        <div className='flex items-center mx-2 mb-4 pt-3 gap-x-3'>
            <h3 className='text-xl font-bold text-sgray'>İlgini çekebilecek gündemler</h3>
            <Icon name="settings" size={22}/>
        </div>

        <div className='mb-4 group-hover:bg-black'>
            <div className='flex items-center justify-between mx-2 text-xs group'>
                <p className='text-ts'> Teknoloji · Gündemdekiler</p>
                <Icon name="dots" size={18}/>
            </div>
            <p className='text-[15px] font-semibold mx-2'>#Metaverse</p>
            <p className='text-ts text-xs mx-2 mb-6'>363B Tweet</p>
        </div>
        <div className='mb-4'>
            <div className='flex items-center justify-between mx-2 text-xs'>
                <p className='text-ts'> Türkiye konumunda gündemde</p>
                <Icon name="dots" size={18}/>
            </div>
            <p className='text-[15px] font-semibold mx-2'>#tarkan</p>
            <p className='text-ts text-xs mx-2 mb-6'>26B Tweet</p>
        </div>
        <div className='mb-4'>
            <div className='flex items-center justify-between mx-2 text-xs'>
                <p className='text-ts'> Müzik · Gündemdekiler</p>
                <Icon name="dots" size={18}/>
            </div>
            <p className='text-[15px] font-semibold mx-2'>#AleynaTilki</p>
            <p className='text-ts text-xs mx-2 mb-6'>21B Tweet</p>
        </div>
        <div className='mb-4'>
            <div className='flex items-center justify-between mx-2 text-xs'>
                <p className='text-ts'> Eğlence · Gündemdekiler</p>
                <Icon name="dots" size={18}/>
            </div>
            <p className='text-[15px] font-semibold mx-2'>#Sude</p>
            <p className='text-ts text-xs mx-2 mb-6'>3B Tweet</p>
        </div>
        <div className='mb-4'>
            <div className='flex items-center justify-between mx-2 text-xs'>
                <p className='text-ts'> Teknoloji · Gündemdekiler</p>
                <Icon name="dots" size={18}/>
            </div>
            <p className='text-[15px] font-semibold mx-2'>#Bitcoin</p>
            <p className='text-ts text-xs mx-2 pb-1'>126B Tweet</p>
        </div>
            <button className='text-primary mx-2 pb-2'>
                Daha fazla göster
            </button>
    </div>
  )
}
