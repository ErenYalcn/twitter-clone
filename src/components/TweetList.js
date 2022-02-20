import React from 'react'
import TweetItem from './TweetItem'

export default function TweetList( {tweets} ) {
  return (
    <div>
        {tweets.map((tweet, index)=>(
            <TweetItem {... tweet} key={index} />
        ))}
    </div>
  )
}
