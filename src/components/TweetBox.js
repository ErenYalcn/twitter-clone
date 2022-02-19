import { Icon } from 'Icons'
import React from 'react'

export default function TweetBox() {
  return (

        <div className='px-7 mt-2 text-black'>
            <div className='flex gap-x-4 relative'>

                <div>
                    <img className='w-[48px] h-[48px] rounded-full' src="https://pbs.twimg.com/profile_images/1296943658281979912/2ucPJ6wG_x96.jpg" />
                </div>

                <div className='text-xl mt-2'>
                <input className='outline-none placeholder:text-sgray placeholder:text-opacity-75' placeholder='Neler oluyor?'></input>
            <div className='flex items-center justify-between'>
                    <div className='flex items-center mt-8'>
                        <div className='hover:bg-primary hover:bg-opacity-20 rounded-full p-2 transition-all'><Icon name="media" size={20}/></div>
                        <div className='hover:bg-primary hover:bg-opacity-20 rounded-full p-2 transition-all'><Icon name="gif" size={20}/></div>
                        <div className='hover:bg-primary hover:bg-opacity-20 rounded-full p-2 transition-all'><Icon name="poll" size={20}/></div>
                        <div className='hover:bg-primary hover:bg-opacity-20 rounded-full p-2 transition-all'><Icon name="emoji" size={20}/></div>
                        <div className='hover:bg-primary hover:bg-opacity-20 rounded-full p-2 transition-all'><Icon name="program" size={20}/></div>
                        <div className='hover:bg-primary hover:bg-opacity-20 rounded-full p-2 transition-all'><Icon name="location" size={20}/></div>
                    </div> 
                    <div className='absolute right-0'>
                        <button className='bg-primary text-[13px] text-white font-semibold p-1 rounded-full  mt-4 shadow-xs hover:bg-dblue transition-all'>
                            <span className='p-4'>Tweetle</span>
                        </button>
                    </div>
                    
            </div>
                </div>
            </div>

        </div>

  )
}
