import { Skeleton } from 'antd'
import './loader.scss'
import React from 'react'

function CarouselLoader() {
  return (
    <div className='carousel-loader'>
     <Skeleton.Image active/>
    </div>
  )
}

export default CarouselLoader