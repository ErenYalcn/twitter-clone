import React from 'react'
import { Icon } from 'Icons'
import TweetBox from './TweetBox'
import Header from './Header'

export default function Content() {



  return (
    <div className='lg:flex-1 w-[600px] border-r-2 border-l-2 border-br border-opacity-20 mx-6'>
        <div className='border-b-2 border-br border-opacity-20'>
            <header className='sticky top-0 z-10 bg-white'>
            <Header />
          </header>
          <TweetBox />
        </div>
    </div>
  )
}
