import React from 'react'
import { LabelComponentInterface } from '../../../../models/componentModels/components.models'
import '../styles.css'

const LuqLabelComponent = (props: LabelComponentInterface) => {
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
            <svg className='hidden mbsm:block mbsm:w-[32px] mblg:w-[37px]' width="55" height="73" viewBox="0 0 55 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="Line 1" d="M0.515639 72.315L28.2976 0.861566L54.0868 0.861558" strokeWidth="2px" stroke="#979797"/>
            </svg>
            <svg className='w-[20px] mbsm:hidden' width="33" height="63" viewBox="0 0 23 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="label-line" d="M22.3398 0.965476L0.531153 0.965477L0.531146 62.9215" strokeWidth="2px" stroke="#979797"/>
            </svg>

            <div 
                className='mt-[-35px] right-[-57px] message-box w-[100px] mbsm:w-[100px] mblg:w-[110px] tablet:w-[130px]'
            >
                {message}
            </div>
            {/* <svg className='hidden mbsm:block mbsm:w-[32px] mblg:w-[37px]' width="51" height="58" viewBox="0 0 51 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="label-line" d="M0.00615807 0.921978L32.4322 0.921998L50 57"  strokeWidth="2px" stroke="#979797"/>
            </svg>
            <svg className='w-[20px] mbsm:hidden' width="33" height="65" viewBox="0 0 33 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="label-line" d="M0.00622822 0.921906L32.4323 0.921922L32.4323 65" strokeWidth="2px" stroke="#979797"/>
            </svg> */}
        </div>
    </div>
  )
}

export default LuqLabelComponent