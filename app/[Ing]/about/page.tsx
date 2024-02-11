'use client'
import { Breadcrumb, Space, Typography } from 'antd'
import React from 'react'
import Image from 'next/image'

const { Title, Text } = Typography

const itemBreadcrumb = [
  {
    title: 'Home',
  },
  {
    title: 'ABOUT PARK X',
  },
]

const page = () => {
  return (
    <>
      <Space className='w-full px-80' direction='horizontal' align='start'>
        <Breadcrumb items={itemBreadcrumb} />
      </Space>
      <Space className='w-full px-80' direction='horizontal' align='start'>
        <Image
          src={'/images/main.png'}
          className='max-w-7xl max-h-96'
          alt={''}
          width={1280}
          height={359}
        />
      </Space>
      <Title level={3}>ABOUT PARK X</Title>
      <Space className='w-full px-80' direction='horizontal' align='start'>
        <Image
          src={'/images/about/content1.png'}
          className='max-w-7xl max-h-96'
          alt={''}
          width={562}
          height={434}
        />
        <div className='pr-50 text-lg'>
          <Text className='text-lg'>
            PARK X focus on customer's need by providing parking services and
            good facilities. Paceng solutions that integrate with the public
            transport system and well located, which make a major oontrihucen to
            sock., well-being.
          </Text>
          <br />
          <ul>
            <li>&#8226; Multiples. with scelability for grow.</li>
            <li>
              &#8226; 24/2aceilability of help desk with instant access to
              parking space providing support concerning payment systems, enter
              / exit parking facility.
            </li>
            <br />
            <li>&#8226; Atstrahagic ceations.</li>
            <li>&#8226; Convenienoeclean and secure parking space</li>
            <li>&#8226; 24 Hourguard monitoring and CCTV</li>
            <br />
            <li>
              &#8226; Automatedpaceng systems Lioenseplate reoognition
              technology
            </li>
            <br />
            <li>&#8226; Mobile payment technology</li>
          </ul>
        </div>
      </Space>
      <Space className='w-full px-80' direction='horizontal' align='start'>
        <Image
          src={'/images/about/content2.png'}
          className='max-w-7xl max-h-96'
          alt={''}
          width={308}
          height={266}
        />
        <div className='pr-50 text-lg'>
          <Text className='text-xl font-bold'>VISION</Text>
          <br />
          <Text className='text-lg'>
            PARK X is no.1 of choice forurban parking solutions
          </Text>
          <br />
          <Text className='text-xl font-bold'>MISSION</Text>
          <br />
          <Text className='text-lg'>
            Focusing on customer's need by providing perking services and good
            facilities.
          </Text>
          <br />
          <Text className='text-xl font-bold'>OUR VALUE</Text>
          <br />
          <Text className='text-lg'>Clean, safe, convenience</Text>
          <br />
        </div>
      </Space>
    </>
  )
}

export default page
