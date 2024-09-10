import React from 'react'
import { LabelComponentInterface } from '../../../../models/componentModels/components.models'
import '../styles.css'

const LlqLabelComponent = (props: LabelComponentInterface) => {
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
            {/* <svg className='hidden mbsm:block w-[45px] mbsm:w-[35px]' width="85" height="64" viewBox="0 0 85 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="label-line" d="M0.669778 0.999985L51.6698 63.0779L84.0959 63.0779" strokeWidth="2px" stroke="#979797"/>
            </svg> */}
            <svg className='hidden mbsm:block mbsm:w-[28px]' width="55" height="73" viewBox="0 0 55 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="Line 1" d="M0.515639 1L28.2976 72.4534L54.0868 72.4534" strokeWidth="2px" stroke="#979797"/>
            </svg>

            <svg className=' w-[15px] mbsm:hidden' width="23" height="63" viewBox="0 0 23 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="label-line" d="M22.3398 62.456L0.531153 62.456L0.531146 0.499998" strokeWidth="2px" stroke="#979797"/>
            </svg>
            <div 
                className='mt-[40px] right-[-57px] message-box w-[100px] mbsm:w-[100px] mblg:w-[110px] tablet:w-[130px]'
            >
                {message}
            </div>
        </div>
    </div>
  )
}

export default LlqLabelComponent