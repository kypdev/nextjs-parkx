'use client'
import React from 'react'
import { Breadcrumb, Space, Typography } from 'antd'
import Image from 'next/image'
import { Banner } from '@/components'
const { Title, Text } = Typography

const itemBreadcrumb = [
  {
    title: 'Home',
  },
  {
    title: ' PARKING SOLUTIONS',
  },
]

const bannerList = [
  '/images/parking/banner1.png',
  '/images/parking/banner2.png',
  '/images/parking/banner3.png',
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
      <Title level={3}>LOCATIONS</Title>
      {bannerList.map((image) => (
        <Banner imageSrc={image} />
      ))}
    </>
  )
}

export default page
