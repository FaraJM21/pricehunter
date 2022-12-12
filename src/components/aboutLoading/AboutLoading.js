import { Skeleton } from 'antd'
import React from 'react'
import './loading.scss'

function AboutLoading() {
  return (
    <div className='aboutLoading'>
    <Skeleton.Image active/>
    </div>
  )
}

export default AboutLoading