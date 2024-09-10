import React from 'react'
import { LabelComponentInterface } from '../../../../models/componentModels/components.models'
import '../styles.css'

const EpgasLabelComponent = (props: LabelComponentInterface) => {
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
            {/* <svg className='w-[45px] mbsm:w-[45px] mblg:w-[50px]' id='dip-label' width="57" height="57" viewBox="0 0 57 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="label-line" d="M0.843266 38.0001L30.8649 0.922083L56.4261 0.922086" strokeWidth="2px" stroke="#979797"/>
            </svg> */}
            <div 
                className='mt-[-140px] mbsm:mt-[-120px] right-[-57px] message-box w-[100px] mbsm:w-[100px] mblg:w-[110px] tablet:w-[130px]'
            >
                {message}
            </div>
            <svg className='hidden mbsm:block mbsm:w-[50px]' width="51" height="120" viewBox="0 0 51 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="label-line" d="M0.00615807 0.921978L32.4322 0.921998L50 120"  strokeWidth="2px" stroke="#979797"/>
            </svg>
            <svg className='w-[50px] mbsm:hidden' width="33" height="133" viewBox="0 0 50 133" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="label-line" d="M0.00622822 0.921906L32.4323 0.921922L32.4323 133" strokeWidth="1px" stroke="#979797"/>
            </svg>
        </div>
    </div>
  )
}

export default EpgasLabelComponent