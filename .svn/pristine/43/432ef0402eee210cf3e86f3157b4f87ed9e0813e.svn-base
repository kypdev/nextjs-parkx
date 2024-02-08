// 'use client'
import { Trans } from 'react-i18next/TransWithoutContext'
import { languages, fallbackLng } from '../i18n/settings'
import { useTranslation } from '../i18n'
import { Carousel } from 'antd'

export default async function Home({
  params: { lng },
}: {
  params: { lng: string }
}) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = await useTranslation(lng)

  return (
    <>
      <div className='w-3/5 h-full bg-primary-blue'>
        <Carousel className=''>
          <div>
            <h1
              style={{
                color: 'white',
                lineHeight: '300px',
                textAlign: 'center',
              }}
            >
              Slide 1
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
      <div className='bg-primary-green px-10 py-10'>main content</div>
      <div className='bg-primary-green px-10 py-10'>register content</div>
    </>
  )
}
