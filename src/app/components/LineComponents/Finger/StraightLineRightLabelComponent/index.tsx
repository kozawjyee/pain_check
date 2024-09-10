import React from 'react'
import { LabelComponentInterface } from '../../../../models/componentModels/components.models';

const StraightRightLabelComponent = (props: LabelComponentInterface) => {
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
            <div className='flex relative items-center'>
                {/* <svg className='mbsm:w-[60px]' id='dip-label' width="57" height="57" viewBox="0 0 57 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="label-line" d="M0.843266 38.0001L30.8649 0.922083L56.4261 0.922086" strokeWidth="2px" stroke="#979797"/>
                </svg> */}
                {/* <svg className='w-[45px] mbsm:w-[45px] mblg:w-[50px]' width="102" height="102" viewBox="0 0 102 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="0.5" x2="102" y2="0.5" strokeWidth="3px" stroke="#979797"/>
                </svg> */}
                <svg className='w-[51px] mbsm:w-[40px]' width="51" height="130" viewBox="0 0 51 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Line 1" d="M0.499998 49.5L26.9656 0.68231L50.5 0.68231" strokeWidth="2px" stroke="#979797"/>
                </svg>

                <div 
                    className='mt-[-110px] mbsm:mt-[-100px] right-[-57px] message-box  w-[100px] mbsm:w-[100px] mblg:w-[130px] tablet:w-[130px]'
                >
                    {message}
                </div>
            </div>
        </div>
      )
}

export default StraightRightLabelComponent