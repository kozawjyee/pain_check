import React from 'react'
import './styles.css'
import { LabelComponentInterface } from '../../../../models/componentModels/components.models'

const BottmRightLabelComponent = (props: LabelComponentInterface) => {
    const {message, top, bottom, left, right, classes} = props;
  return (
    <div
     className={`absolute ${classes}`}
    //  style={{
    //     top,
    //     bottom,
    //     left,
    //     right
    //  }} 
    >
        {/* <div className='flex relative items-center'>
            <svg className='w-[45px] mbsm:w-[45px] mblg:w-[50px]' width="85" height="85" viewBox="0 0 85 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="label-line" d="M0.669778 0.999985L51.6698 63.0779L84.0959 63.0779" strokeWidth="2px" stroke="#979797"/>
            </svg>

            <div 
                className='mt-[55px] right-[-57px] message-box w-[100px] mbsm:w-[100px] mblg:w-[110px] tablet:w-[130px]'
            >
                {message}
            </div>
        </div> */}
            <div className='flex relative items-center'>
                {/* <svg className='w-[45px] mbsm:w-[45px] mblg:w-[50px]' id='dip-label' width="57" height="57" viewBox="0 0 57 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="label-line" d="M0.843266 38.0001L30.8649 0.922083L56.4261 0.922086" strokeWidth="2px" stroke="#979797"/>
                </svg> */}
                <svg className='w-[45px] mbsm:w-[35px]' width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Line 1" d="M0.499998 49.5L26.9656 0.68231L50.5 0.68231" strokeWidth="2px" stroke="#979797"/>
                </svg>

            <div 
                className='mt-[-45px] mbsm:mt-[-30px] mblg:mt-[-35px] right-[-57px] message-box w-[100px] mbsm:w-[100px] mblg:w-[110px] tablet:w-[130px]'
            >
                {message}
            </div>
        </div>
    </div>
  )
}

export default BottmRightLabelComponent