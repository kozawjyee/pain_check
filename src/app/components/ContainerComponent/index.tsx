import React from 'react'
import { ContainerInterface } from '../../models/componentModels/components.models'
import './styles.css'

const ContainerComponent = (props: ContainerInterface) => {
  const {children} = props
  return (
    <div 
        className='relative w-full max-w-[425px] part-container h-[550px] bg-[#dafafc] shadow-inner shadow-bordercolor p-3 flex flex-col justify-center items-center'
    >
        {children}
    </div>
  )
}

export default ContainerComponent