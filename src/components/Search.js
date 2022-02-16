import React from 'react'
import { Icon } from 'Icons'

export default function Search() {
  return (
    <div className='bg-gray flex items-center gap-x-4 rounded-full px-4 mx-2 h-10 mt-1'>
        <div className='flex items-center justify-center opacity-60'>
            <Icon name="search" size={20} />
        </div>
        <div>
            <input className='text-black outline-none bg-gray placeholder-sgray text-sm  placeholder-opacity-60' placeholder='Twitterda Ara'></input>
        </div>
    </div>
  )
}
