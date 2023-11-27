import React from 'react'

function Footer() {
  return (
    <div className='bg-white p-20'>
      <div className='flex flex-row justify-start flex-nowrap gap-10 overflow-visible marquee'>
        <div className='flex justify-between gap-5 p-2 bg-[#0b202d] ' style={{ borderRadius: '5.5rem 1rem 1rem 5.5rem', minWidth: '350px' }}>
          <img src='/firstScrolimg.jpg' width={'120px'} className='rounded-full' />
          <div className='flex flex-col justify-between p-3'>
            <h5 className='text-2xl'>bitfins</h5>
            <a href="#"> shop now </a>
          </div>
        </div>
        <div className='flex justify-between gap-5 p-2 bg-[#fe8b8a] ' style={{ borderRadius: '5.5rem 1rem 1rem 5.5rem', minWidth: '350px' }}>
          <img src='/firstScrolimgTwo.jpg' width={'120px'} className='rounded-full' />
          <div className='flex flex-col justify-between p-3'>
            <h5 className='text-2xl'>bitfins</h5>
            <a href="#"> shop now </a>
          </div>
        </div>
        <div className='flex justify-between gap-5 p-2 bg-[black] ' style={{ borderRadius: '5.5rem 1rem 1rem 5.5rem', minWidth: '350px'}}>
          <img src='/firstScrolimgThree.jpg' width={'120px'} className='rounded-full' />
          <div className='flex flex-col justify-between p-3'>
            <h5 className='text-2xl'>bitfins</h5>
            <a href="#"> shop now </a>
          </div>
        </div>
        <div className='flex justify-between gap-5 p-2 bg-[#236ad3] ' style={{ borderRadius: '5.5rem 1rem 1rem 5.5rem', minWidth: '350px' }}>
          <img src='/firstScrolimgFour.jpg' width={'120px'} className='rounded-full' />
          <div className='flex flex-col justify-between p-3'>
            <h5 className='text-2xl'>bitfins</h5>
            <a href="#"> shop now </a>
          </div>
        </div>
        <div className='flex justify-between gap-5 p-2 bg-[black] ' style={{ borderRadius: '5.5rem 1rem 1rem 5.5rem', minWidth: '350px'}}>
          <img src='/firstScrolimgFive.jpg' width={'120px'} className='rounded-full' />
          <div className='flex flex-col justify-between p-3'>
            <h5 className='text-2xl'>bitfins</h5>
            <a href="#"> shop now </a>
          </div>
        </div>
        <div className='flex justify-between gap-5 p-2 bg-[black] ' style={{ borderRadius: '5.5rem 1rem 1rem 5.5rem', minWidth: '350px' }}>
          <img src='/firstScrolimgSix.jpg' width={'120px'} className='rounded-full' />
          <div className='flex flex-col justify-between p-3'>
            <h5 className='text-2xl'>bitfins</h5>
            <a href="#"> shop now </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer