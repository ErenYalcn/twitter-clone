import React from 'react'
import { Icon } from 'Icons'

export default function Sidebar() {
  return (
    <div className='w-[275px] p-4 pt-4'>
      <div className='hover:bg-blue-50 rounded-full max-w-min h-auto p-2 ml-2 transition-all'>
        <span className=''>
          <a href ="/">
          <Icon name="tlogo" size={30}/>
          </a>
        </span>
      </div>
      <nav className='flex flex-col gap-y-0 mt-2'>
        <a className='flex gap-x-4 items-center hover:bg-sgray hover:bg-opacity-[0.1] max-w-max p-4 py-3 rounded-full' href="#">
          <Icon name="home" size={26} />
          <span className='text-xl text-sgray '>Anasayfa</span>
        </a>
        <a className='flex gap-x-4 items-center hover:bg-sgray hover:bg-opacity-[0.1] max-w-max p-4 py-3 rounded-full' href="#">
        <Icon name="hash" size={26} />
          <span className='text-xl text-sgray'>Keşfet</span>
        </a>
        <a className='flex gap-x-4 items-center hover:bg-sgray hover:bg-opacity-[0.1] max-w-max p-4 py-3 rounded-full' href="#">
        <Icon name="notifi" size={26} />
          <span className='text-xl text-sgray'>Bildirimler</span></a>
          <a className='flex gap-x-4 items-center hover:bg-sgray hover:bg-opacity-[0.1] max-w-max p-4 py-3 rounded-full' href="#">
        <Icon name="message" size={26} />
          <span className='text-xl text-sgray'>Mesajlar</span></a>
          <a className='flex gap-x-4 items-center hover:bg-sgray hover:bg-opacity-[0.1] max-w-max p-4 py-3 rounded-full' href="#">
        <Icon name="profile" size={26} />
          <span className='text-xl text-sgray'>Profil</span></a>
          <a className='flex gap-x-4 items-center hover:bg-sgray hover:bg-opacity-[0.1] max-w-max p-4 py-3 rounded-full' href="#">
        <Icon name="more" size={26} />
          <span className='text-xl text-sgray'>Daha fazla</span></a>
      </nav>
      <button className='bg-primary text-[17px] font-semibold p-4 rounded-full w-[212px] mt-4 shadow-xs hover:bg-dblue transition-all'>
        Tweetle
      </button>
      </div>
  )
}
