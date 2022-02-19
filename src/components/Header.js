import React from 'react'
import { Icon } from 'Icons'
export default function Header() {
  return (
    <div>
                <div className='flex justify-between mx-4 items-center p-2 px-3'>
            <span className='text-sgray font-bold text-xl'>Anasayfa</span>
          <div className='hover:bg-hg rounded-full p-2 items-center transition-all'>
              <Icon name='popular' />
          </div>
        </div>
    </div>
  )
}
