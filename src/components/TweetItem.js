import { Icon } from 'Icons'
import React from 'react'

function TweetItem( {displayName, userName, content, timeTweet, profileImage, Image} ) {
  return (
    <div className='mt-3'>
        <article className='flex space-x-3 border-b border-b-gray px-4 py-3'>
            <img src={profileImage} alt='profile' className='rounded-full h-[48px] w-[48px]'/>
            <div className='flex-1'>
                <div className='flex gap-x-1 items-center'>
                    <h3 className='font-semibold'>{displayName}</h3>
                    <span className='text-tw text-[14px]'>{userName}</span>
                    <div>
                        <span className='text-tw text-[14px]'>{timeTweet?.toDate().toLocaleTimeString('tr-TR')}</span>
                    </div>
                </div>
            <p className='text[15px] text-sgray'>{content}</p>
            {Image && <img src={Image} className='max-h-96 rounded-xl mt-3'/>}
            <ul className='text-tw mt-2 flex justify-between mx-8 -ml-2'>

                <div className='flex items-center group gap-x-[6px]'>
                    <li className='group-hover:bg-primary group-hover:bg-opacity-30 p-1 rounded-full group-hover:text-primary transition-all'>
                        <Icon name="comment" size={19}/>
                    </li>
                    <span className='text-xs !bg-white group-hover:text-primary transition-all'>1.238</span>
                </div>
                <div className='flex items-center group gap-x-[6px]'>
                    <li className='group-hover:bg-g group-hover:bg-opacity-30 p-1 rounded-full group-hover:text-g transition-all'>
                        <Icon name="retweet" size={19}/>
                    </li>
                    <span className='text-xs !bg-white group-hover:text-g transition-all'>1.238</span>
                </div>
                <div className='flex items-center group gap-x-[6px]'>
                    <li className='group-hover:bg-r group-hover:bg-opacity-30 p-1 rounded-full group-hover:text-r transition-all'>
                        <Icon name="like" size={19}/>
                    </li>
                    <span className='text-xs !bg-white group-hover:text-r transition-all'>1.238</span>
                </div>
                <div className='flex items-center group gap-x-[6px]'>
                    <li className='group-hover:bg-primary group-hover:bg-opacity-30 p-1 rounded-full group-hover:text-primary transition-all'>
                        <Icon name="upload" size={19}/>
                    </li>
                    <span className='text-xs !bg-white group-hover:text-primary transition-all'>1.238</span>
                </div>

            </ul>
            </div>
        </article>
    </div>
  )
}

export default TweetItem