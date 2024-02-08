import type { Metadata } from 'next'
import { Kanit } from 'next/font/google'
import './globals.css'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { dir } from 'i18next'
import { languages } from '../i18n/settings'

const kanit = Kanit({
  subsets: ['latin', 'latin-ext', 'thai'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'ParkX',
  description:
    'ParkX  - บริการจอดรถอัจฉริยะ ที่ช่วยให้คุณจอดรถได้ง่ายขึ้น และช่วยให้คุณประหยัดเงินได้มากขึ้น ด้วยการจอดรถแบบอัจฉริยะ ที่คุณสามารถจอดรถได้ทุกที่ ทุกเวลา และไม่ต้องเสียเวลาในการหาที่จอดรถอีกต่อไป',
}

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode
  params: { lng: string }
}) {
  return (
    <>
      <html lang={lng}>
        <body className={kanit.className}>
          <div className='w-full relative bg-seconday-white-ffffff overflow-hidden flex flex-col items-center justify-start gap-[2.56rem] tracking-[normal] text-left text-[0.63rem] text-seconday-white-ffffff font-p6-prompt-reg-12 mq450:gap-[1.25rem]'>
            <div className='w-[13.13rem] h-[1.25rem] relative bg-firebrick hidden' />
            <Navbar />
            {children}
            <section className='w-[79.75rem] flex flex-row items-start justify-end py-[0rem] px-[1.25rem] box-border max-w-full'>
              <div className='w-[71.31rem] flex flex-col items-start justify-start gap-[3.38rem] max-w-full mq900:gap-[1.69rem]'></div>
            </section>
            <Footer />
          </div>
        </body>
      </html>
    </>
  )
}
