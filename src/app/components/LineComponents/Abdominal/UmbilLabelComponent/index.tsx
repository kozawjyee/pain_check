import React from 'react'
import { LabelComponentInterface } from '../../../../models/componentModels/components.models'
import '../styles.css'

const UmbilLabelComponent = (props: LabelComponentInterface) => {
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
                <svg className='hidden mbsm:block mblg:w-[43px]' width="43" height="153" viewBox="0 0 43 133" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Line 1" d="M1 132.5L16.4929 0.861596L42.282 0.861581" stroke="#979797"/>
                </svg>

                <svg className='mbsm:hidden' width="43" height="160" viewBox="0 0 43 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="label-line" d="M42.4999 0.96547L0.531095 0.965455L0.531147 160" strokeWidth="2px" stroke="#979797"/>
                </svg>

    
                <div 
                    className='mt-[-160px] mbsm:mt-[-130px] right-[-57px] message-box w-[100px] mbsm:w-[100px] mblg:w-[120px] tablet:w-[130px]'
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

export default UmbilLabelComponent