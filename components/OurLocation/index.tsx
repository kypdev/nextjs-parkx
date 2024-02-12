import React from 'react'
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react'
import Image from 'next/image'

const OurLocation = () => {
  const onClickLeft = () => {
    console.log('left')
  }
  const onClickRight = () => {
    console.log('right')
  }
  return (
    <>
      <div className='relative'>
        <div className='flex flex-row bg-primary-blue px-10 py-10 mt-10 mb-8 '>
          <MapPin color='white' size={48} />
          <h2 className='text-white text-3xl text-bold flex items-center'>
            OUR LOCATIONS
          </h2>
        </div>
        <div className='flex flex-col'>
          <div className='flex flex-row pl-16'>
            <Image
              src={'/images/parkx-logo.png'}
              alt='Picture of the author'
              // sizes='100vw'
              // style={{
              //   width: '100%',
              //   height: 'auto',
              // }}
              width={219}
              height={65}
            />
            <div className='flex justify-center text-center bg-primary-green px-16 my-3 ml-4 text-white'>
              <p className='flex items-center	text-lg'>อุดมสุข</p>
            </div>
          </div>
          <p className='flex items-center	text-lg pl-16 mt-16'>
            2784 Sukhumvit 66/1 Khwaeng
            <br /> Banmg Na, Bang Na
            <br /> Bangkok 10260 PENTA 591
          </p>
          <p className='flex text-primary-green items-center	text-lg pl-16 mt-16'>
            อ่านรายละเอียดเพิ่มเติม
          </p>
          <div className='absolute top-4 right-12'>
            <Image
              src={'/images/home/content-slide.png'}
              alt='Picture of the author'
              width={554}
              height={420}
            />
          </div>
          <ChevronLeft onClick={onClickLeft} className='absolute top-48' />
          <ChevronRight onClick={onClickRight} className='absolute top-48 right-0' />
        </div>
      </div>
    </>
  )
}

export default OurLocation
