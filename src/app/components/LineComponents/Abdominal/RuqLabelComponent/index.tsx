import React from 'react'
import { LabelComponentInterface } from '../../../../models/componentModels/components.models'
import '../styles.css'

const RuqLabelComponent = (props: LabelComponentInterface) => {
    const {message, top, bottom, left, right, classes, ref} = props;

  return (
    <div
     className={`absolute ${classes} label-under-btn`}
     style={{
        top,
        bottom,
        left,
        right
     }} 
    >
        <div className='flex relative items-center'>
            <div 
                className='mt-[-35px] right-[-57px] message-box w-[100px] mbsm:w-[100px] mblg:w-[110px] tablet:w-[130px]'
            >
                {message}
            </div>
            <svg className='hidden mbsm:block mbsm:w-[32px] mblg:w-[37px]' width="51" height="58" viewBox="0 0 51 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="label-line" d="M0.00615807 0.921978L32.4322 0.921998L50 57"  strokeWidth="2px" stroke="#979797"/>
            </svg>
            <svg className='w-[20px] mbsm:hidden' width="33" height="65" viewBox="0 0 33 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="label-line" d="M0.00622822 0.921906L32.4323 0.921922L32.4323 65" strokeWidth="2px" stroke="#979797"/>
            </svg>
        </div>
    </div>
  )
}

export default RuqLabelComponent