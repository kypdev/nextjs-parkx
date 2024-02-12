import React from 'react'
import Image from 'next/image'

type BannerProps = {
  imageSrc: string
}

const Banner = ({ imageSrc }: BannerProps) => {
  return (
    <Image
      src={imageSrc}
      alt='Picture of the author'
      sizes='100vw'
      style={{
        width: '100%',
        height: 'auto',
      }}
      width={500}
      height={300}
    />
  )
}

export default Banner
