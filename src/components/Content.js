import React from 'react'
import TweetBox from './TweetBox'
import Header from './Header'
import db from '../firebase'
import { useState,useEffect } from 'react'
import TweetList from './TweetList'

export default function Content() {
  const [tweets, setTweets] = useState([]);
    useEffect(() => {
      db.collection('tweets')
      .orderBy('timeTweet', 'desc')
      .onSnapshot(snapshot => setTweets(snapshot.docs.map(doc => doc.data())))
    },[])


  return (
    <div className='lg:flex-1 w-[600px] border-r-2 border-l-2 border-br border-opacity-20 mx-6'>
        <div className='border-b-2 border-br border-opacity-20'>
            <header className='sticky top-0 z-10 bg-white'>
            <Header />
          </header>
          <TweetBox />
        </div>
        <div className='text-sgray'>
        <TweetList tweets={tweets} />
        </div>
    </div>
  )
}
