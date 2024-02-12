import {
  InstagramOutlined,
  YoutubeOutlined,
  TwitterOutlined,
  WhatsAppOutlined,
  FacebookOutlined,
} from '@ant-design/icons'

const footer = () => {
  return (
    <>
      <section className='flex flex-col items-center justify-start box-border max-w-full text-left text-[1.75rem] text-darkslategray-200 w-full'>
        <div className='bg-primary-blue flex flex-row items-start justify-start pt-[2.94rem] pb-[1.88rem] pr-[3.31rem] pl-[5.25rem] box-border relative gap-[3.31rem] max-w-full mq750:gap-[1.63rem] mq750:pl-[1.31rem] mq750:box-border mq1225:flex-wrap mq1225:pl-[2.63rem] mq1225:pr-[1.63rem] mq1225:box-border w-full'>
          <div className='w-full absolute my-0 mx-[!important] h-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-gainsboro-300 mix-blend-darken' />
          <div className='w-[18.88rem] flex flex-col items-center justify-start gap-[2.19rem]'>
            <h3 className='text-white m-0 h-[2.56rem] relative text-inherit leading-[3.38rem] font-medium font-inherit inline-block shrink-0 z-[1] mq450:text-[1.38rem] mq450:leading-[2.69rem]'>
              ABOUT PARK X
            </h3>
            <img
              className='w-[7.31rem] h-[2.19rem] relative object-cover z-[1]'
              loading='eager'
              alt=''
              src='/images/parkX-logo-footer.png'
            />
          </div>
          <div className='flex flex-col items-start justify-start gap-[1rem] max-w-full'>
            <div className='w-[20.63rem] flex flex-row items-start justify-start py-[0rem] px-[2.06rem] box-border max-w-full'>
              <h3 className='text-white m-0 flex-1 relative text-inherit leading-[2.56rem] font-medium font-inherit z-[1] mq450:text-[1.38rem] mq450:leading-[2.69rem]'>
                CONTACT US
              </h3>
            </div>
            <div className='flex flex-row items-start justify-start gap-[1.19rem] text-[0.81rem] text-black'>
              <div className='flex flex-col items-start justify-start gap-[3.75rem]'>
                <img
                  className='w-[1.81rem] h-[1.83rem] relative z-[1]'
                  loading='eager'
                  alt=''
                  src='/images/icons/home-footer.png'
                />
                <div className='flex flex-col items-start justify-start gap-[0.63rem]'>
                  <img
                    className='w-[1.79rem] h-[1.82rem] relative z-[1]'
                    loading='eager'
                    alt=''
                    src='/images/icons/phone-footer.png'
                  />
                  <img
                    className='w-[1.81rem] h-[1.84rem] relative z-[1]'
                    loading='eager'
                    alt=''
                    src='/images/icons/mail-footer.png'
                  />
                </div>
              </div>
              <div className='text-white h-[11.88rem] relative inline-block z-[1]'>
                <p className='m-0'>PENTA 591 Co., Ltd.</p>
                <p className='m-0'>United Business Center II Building</p>
                <p className='m-0'>{`591 Sukhumvit Road, (Sukhumvit 33), Khlongton Nuea, Vadhana, `}</p>
                <p className='m-0'>Bangkok 10110</p>
                <p className='m-0'>&nbsp;</p>
                <p className='m-0'>T: +66 (0) 2726 1999 ext 1921</p>
                <p className='m-0'>&nbsp;</p>
                <p className='m-0'>Parkx@bhirajburi.co.th</p>
                <p className='m-0'>&nbsp;</p>
              </div>
            </div>
          </div>
          <div className='w-[18.13rem] flex flex-col items-start justify-start gap-[1.81rem]'>
            <div className='self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[1.63rem]'>
              <h3 className='text-white m-0 flex-1 relative text-inherit leading-[2.56rem] font-medium font-inherit z-[1] mq450:text-[1.38rem] mq450:leading-[2.69rem]'>
                FOLLOW US
              </h3>
            </div>
            <div className='overflow-hidden flex flex-row items-start justify-start gap-[1.06rem] z-[1]'>
              <FacebookOutlined className='bg-white p-0.5 rounded-md' />
              <WhatsAppOutlined className='bg-white p-0.5 rounded-md' />
              <TwitterOutlined className='bg-white p-0.5 rounded-md' />
              <InstagramOutlined className='bg-white p-0.5 rounded-md' />
              <YoutubeOutlined className='bg-white p-0.5 rounded-md' />
            </div>
          </div>
        </div>
        <div className='bg-black text-white w-full flex flex-row items-start justify-start px-[1.25rem] box-border max-w-full text-[1rem] '>
          <div className='w-[80.44rem] flex flex-row items-start justify-between min-h-[0.94rem] gap-[1.25rem] max-w-full mq750:flex-wrap'>
            <div className=' relative leading-[0.88rem] inline-block max-w-full z-[1]'>
              Copyright @ 2020 PARK X. All Rights Reserved.
            </div>
            <div className='relative leading-[0.88rem] z-[1]'>{`Term & Conditions | Privacy`}</div>
          </div>
        </div>
      </section>
    </>
  )
}

export default footer
