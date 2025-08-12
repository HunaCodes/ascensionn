import React from 'react'

export default function Page({Child}:{Child:React.FC}) {
  return (
    <div className='flex flex-col w-screen h-screen'>
        <Child/>
    </div>
  )
}
