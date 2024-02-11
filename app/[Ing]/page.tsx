'use client'
import { Trans } from 'react-i18next/TransWithoutContext'
import { languages, fallbackLng } from '../i18n/settings'
import { useTranslation } from '../i18n'
import { Carousel, Divider } from 'antd'
import { useEffect, useState } from 'react'
import Image from 'next/image'


export default function Home({
  params: { lng },
}: {
  params: { lng: string }
}) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  // const { t } = await useTranslation(lng)
  const [padding, setPadding] = useState(false)
  useEffect(() => {
    setPadding(true)
  }, [padding])

  return (
    <>
      {padding && (
        <div className='w-3/5 h-full bg-primary-blue'>
          <Carousel className=''>
            <div>
              {/* <h1
                style={{
                  color: 'white',
                  lineHeight: '300px',
                  textAlign: 'center',
                }}
              >
                Slide 1
              </h1> */}
              <Image src={'/images/main.png'} className='max-w-7xl max-h-96' alt={''} width={1280} height={359}/>
            </div>
            <div>
              <h1
                style={{
                  color: 'white',
                  lineHeight: '300px',
                  textAlign: 'center',
                }}
              >
                Slide 2
              </h1>
            </div>
            <div>
              <h1
                style={{
                  color: 'white',
                  lineHeight: '300px',
                  textAlign: 'center',
                }}
              >
                Slide 3
              </h1>
            </div>
          </Carousel>
        </div>
      )}
      <div className='bg-primary-green px-10 py-10'>main content</div>
      <div className='bg-primary-green px-10 py-10'>register content</div>
    </>
  )
}
