import React from 'react'
import { LabelComponentInterface } from '../../../../models/componentModels/components.models'
import '../styles.css'

const SupraLabelComponent = (props: LabelComponentInterface) => {
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
          <div className='flex flex-col relative items-center'>
            <svg  className='h-[35px]' width="1" height="47" viewBox="0 0 1 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line id="Line 2" x1="0.5" y1="47" x2="0.499998" y2="2.18557e-08" strokeWidth="2px" stroke="#979797"/>
            </svg>
              <div 
                  className='mb-[-40px] right-[-57px] message-box w-[100px] mbsm:w-[100px] mblg:w-[110px] tablet:w-[130px]'
              >
                  {message}
              </div>
                {/* <svg className='hidden mbsm:block mbsm:w-[25px]' width="55" height="58" viewBox="0 0 55 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="Line 1" d="M54.5 1L26.718 72.4534L0.928871 72.4534" strokeWidth="2px" stroke="#979797"/>
                </svg> */}
                {/* <svg className='w-[15px] mbsm:hidden' width="23" height="63" viewBox="0 0 23 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="label-line" d="M0.499993 62.456L22.3086 62.456L22.3086 0.499998" strokeWidth="2px" stroke="#979797"/>
                </svg> */}
          </div>
      </div>
    )
}

export default SupraLabelComponent