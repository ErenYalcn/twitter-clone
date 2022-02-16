import React from 'react'
import Docket from './Docket'
import Followlist from './Followlist'
import Search from './Search'

export default function RightBar() {
  return (
    <div className='w-[350px]'>
      <Search />
      <Docket />
      <Followlist />
    </div>
  )
}
