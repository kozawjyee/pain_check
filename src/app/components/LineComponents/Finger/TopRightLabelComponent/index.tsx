import React from 'react'
import './styles.css'
import { LabelComponentInterface } from '../../../../models/componentModels/components.models'

const LabelComponent = (props: LabelComponentInterface) => {
    const {message, top, bottom, left, right, classes, ref} = props;

  return (
    <div
     className={`absolute ${classes}`}
     style={{
        top,
        bottom,
        left,
        right
     }} 
    >
            <div className='flex relative items-center'>
                    {/* <svg className='w-[45px] mbsm:w-[51px] mblg:w-[51px]' width="51" height="130" viewBox="0 0 51 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="Line 1" d="M0.499998 49.5L26.9656 0.68231L50.5 0.68231" stroke="#979797"/>
                    </svg> */}

                    <svg className='w-[45px] mbsm:w-[51px] mblg:w-[51px]' width="60" height="95" viewBox="0 0 60 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="Line 1" d="M0.500001 94L35.9656 0.682577L59.4999 0.682578" stroke="#979797"/>
                    </svg>


                <div 
                    className='mt-[-70px] right-[-57px] message-box w-[120px] mbsm:w-[100px] mblg:w-[110px] tablet:w-[130px]'
                >
                    {message}
                </div>
            </div>
    </div>
  )
}

export default LabelComponent