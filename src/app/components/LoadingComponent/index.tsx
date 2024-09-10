import React from 'react'
import './styles.css'

const LoadingComponent = () => {
  return (
    <div className='fixed w-[100vw] h-[100vh] backdrop:blur-sm flex items-center justify-center'>
        <div className='loader'></div>
    </div>
  )
}

export default LoadingComponent