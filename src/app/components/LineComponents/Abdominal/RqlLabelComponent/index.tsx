import React from 'react'
import { LabelComponentInterface } from '../../../../models/componentModels/components.models'
import '../styles.css'

const RqlLabelComponent = (props: LabelComponentInterface) => {
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
                  className='mb-[-40px] right-[-57px] message-box w-[100px] mbsm:w-[100px] mblg:w-[110px] tablet:w-[130px]'
              >
                  {message}
              </div>
                <svg className='hidden mbsm:block mbsm:w-[25px]' width="55" height="58" viewBox="0 0 55 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Line 1" d="M54.5 1L26.718 72.4534L0.928871 72.4534" strokeWidth="2px" stroke="#979797"/>
                </svg>
                {/* <svg className='w-[24px] mbsm:hidden' width="37" height="74" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="label-line" d="M0.500011 73.4559L35.8248 73.456L35.8248 6.44367e-07" strokeWidth="1px" stroke="#979797"/>
                </svg> */}
                <svg className='w-[15px] mbsm:hidden' width="23" height="63" viewBox="0 0 23 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="label-line" d="M0.499993 62.456L22.3086 62.456L22.3086 0.499998" strokeWidth="2px" stroke="#979797"/>
                </svg>

          </div>
      </div>
    )
}

export default RqlLabelComponent