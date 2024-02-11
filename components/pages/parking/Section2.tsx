import { Button, Divider, Typography } from 'antd'
import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

const { Title, Text } = Typography

const locations = [
  '/images/parking/location1.png',
  '/images/parking/location2.png',
  '/images/parking/location3.png',
]

function Section2() {
  return (
    <>
      <div className='flex flex-row w-8/12 justify-between px-0'>
        <div className=''>
          <div className='pr-50 text-lg'>
            <Text className='text-xl font-bold'>PARK X EKKAMAI</Text>
            <br />
            <ul>
              <li>
                &#8226; 10 Muni-storey parking building with restaurant and
                retail store at Basement and G floor
              </li>
              <li>
                &#8226; High technology parking system with cashless payment
                solutions
              </li>
              <li>&#8226; 24/7 customer support, safety and security</li>
              <li>&#8226; Retail space.r rent at Basemen. Ground Floor</li>
            </ul>
          </div>
          <br />
          <br />
          <div className='pr-50 text-lg'>
            <Text className='text-xl font-bold'>Why Ekkamai?</Text>
            <br />
            <ul>
              <li>&#8226; Strategic location with canyon, travel options</li>
              <li>&#8226; Pram, residential and lifestyle area</li>
              <li>
                &#8226; Spillover of oommercial actg. from Thonglor Ekkamai. The
                area has developed a leisure S living options that appeal th
                people in general.
              </li>
            </ul>
          </div>
        </div>
        <div className='bg-primary-green w-1 mx-10'></div>
        <div className='w-2/5'>
          <Carousel useKeyboardArrows={true} showThumbs={false}>
            {locations.map((URL, index) => (
              <div key={index} className='slide'>
                <img alt='sample_file' src={URL} key={index} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  )
}

export default Section2
