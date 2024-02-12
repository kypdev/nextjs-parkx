'use client'
import React from 'react'
import { Breadcrumb, Space, Typography } from 'antd'
import Image from 'next/image'
import Location from '@/components/pages/parking/Location'
import Section2 from '@/components/pages/parking/Section2'
import Banner from '@/components/banner'
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
  { id: 1, url: '/images/parking/banner1.png' },
  { id: 2, url: '/images/parking/banner2.png' },
  { id: 3, url: '/images/parking/banner3.png' },
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
      <Location />
      <Banner imageSrc={bannerList[0].url} />
      <Section2 />
      <Banner imageSrc={bannerList[1].url} />
    </>
  )
}

export default page
