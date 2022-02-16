import React from 'react'
import { Icon } from 'Icons'

export default function Sidebar() {
  return (
    <div className='w-[275px] p-4 pt-4'>
      <div className='flex flex-col fixed'>
            <div>
            <div className='hover:bg-blue-50 rounded-full max-w-min h-auto p-2 ml-2 transition-all'>
            <span>
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

        <div className='text-black bottom-0 fixed mb-4 rounded-full group'>
        <div className='flex justify-between items-center group-hover:bg-ts group-hover:bg-opacity-20 transition-all rounded-full'>
            <div className='flex gap-x-3 mx-2 p-2 items-center '>
                <img className='w-[40px] h-[40px] rounded-full' src="https://pbs.twimg.com/profile_images/1296943658281979912/2ucPJ6wG_x96.jpg" />
                <div className='flex flex-col '>
                    <span className='text-sgray font-semibold'>Eren Yalçın</span>
                    <span className='text-sm text-ts'>@erenyalccn</span>
                </div>
            </div>
            <span className='flex justify-between ml-8 mr-4'><Icon name="dots" /></span>

        </div>        
      </div>
      </div>

      </div>
  )
}
