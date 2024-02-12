'use client'
import { Trans } from 'react-i18next/TransWithoutContext'
import { languages, fallbackLng } from '../i18n/settings'
import { useTranslation } from '../i18n'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Button, Flex, Input, Typography } from 'antd'
import OurLocation from '@/components/OurLocation'
const { Title, Text } = Typography

const images = ['/images/main.png', '/images/main.png', '/images/main.png']

export default function Home({ params: { lng } }: { params: { lng: string } }) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  // const { t } = await useTranslation(lng)

  return (
    <>
      <div className='w-3/5 h-full'>
        <Carousel useKeyboardArrows={true} showThumbs={false}>
          {images.map((URL, index) => (
            <div key={index} className='slide'>
              <img alt='sample_file' src={URL} key={index} />
            </div>
          ))}
        </Carousel>
        <OurLocation />
        <div className='flex flex-row  bg-primary-green px-40 py-10  my-10 justify-between'>
          <div className='flex flex-col'>
            <h1 className='text-4xl font-bold text-white'>สมัครสมาชิก</h1>
            <p className='text-white text-lg'>
              สมัครสมาชิกเพื่อรับบริการจอดรถยนต์กับ ParkX
            </p>
            <div className='flex flex-row justify-between px-4'>
              <Button
                className='bg-primary-blue text-white hover:bg-primary-blue px-4'
                shape='round'
              >
                signin
              </Button>
              <Button
                className='bg-secondary-blue text-white hover:bg-secondary-blue px-10'
                shape='round'
              >
                signup
              </Button>
            </div>
          </div>
          <div className='flex flex-col justify-center'>
            <p className='text-white text-lg'>ติดตามข่าวสารและโปรโมชัน</p>
            <div className='flex flex-row'>
              <Flex vertical gap={12}>
                <Input placeholder='อีเมล' />
              </Flex>
              <Button className='bg-primary-blue text-white hover:bg-primary-blue px-4'>
                รับอีเมล
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
