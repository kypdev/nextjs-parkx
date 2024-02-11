import { Button, Flex } from 'antd'
import Link from 'next/link'

const Menubar = () => {
  return (
    <header className='w- flex flex-row items-start justify-start py-[0rem] pr-[2.38rem] pl-[1.25rem] box-border max-w-full text-left text-[1.25rem] text-darkslategray-200 font-kanit'>
      <div className='flex-1 flex flex-row items-end justify-start gap-[2rem] max-w-full mq750:gap-[1rem]'>
        <Link href={'/'}>
          <img
            className='h-[3rem] w-[10rem] relative object-cover'
            loading='eager'
            alt=''
            src='/images/parkX-logo.png'
          />
        </Link>
        <div className='flex-1 flex flex-col items-start justify-start pt-[0rem] pb-[0.38rem] pr-[2.5rem] pl-[0rem] box-border max-w-full md:w-full '>
          <div className='self-stretch flex flex-row items-start justify-start gap-[4.13rem] mq450:gap-[1rem] mq750:gap-[2.06rem] mq1050:hidden'>
            <div className='h-[1.88rem] relative font-semibold inline-block whitespace-nowrap'>
              <Link href={'/about'}>ABOUT PARK X</Link>
            </div>
            <div className='flex-[0.9412] flex flex-col items-start justify-start py-[0rem] pr-[0.75rem] pl-[0rem]'>
              <div className='h-[1.88rem] relative font-semibold inline-block whitespace-nowrap'>
                <Link href={'/parking-solution'}>PARKING SOLUTIONS</Link>
              </div>
            </div>
            <div className='h-[1.88rem] flex-1 relative font-semibold inline-block whitespace-nowrap'>{`NEWS & PROMOTIONS`}</div>
          </div>
        </div>
        <div className='flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.38rem]'>
          <div className='h-[1.88rem] relative font-semibold inline-block whitespace-nowrap'>
            CONTACT US
          </div>
        </div>
        <div className='flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.38rem]'>
          <div className='h-[1.88rem] relative font-semibold inline-block whitespace-nowrap'>
            {/* <Button shape="circle" className='bg-[#1da1f2]'>Signin | Signup</Button> */}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Menubar
