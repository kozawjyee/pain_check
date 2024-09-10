import React from 'react'
import { AbsComponentInterface } from '../../models/componentModels/components.models'
import './styles.css'
import RuqLabelComponent from '../LineComponents/Abdominal/RuqLabelComponent';
import EpgasLabelComponent from '../LineComponents/Abdominal/EpgasLabelComponent';
import RqlLabelComponent from '../LineComponents/Abdominal/RqlLabelComponent';
import SupraLabelComponent from '../LineComponents/Abdominal/SupraLabelComponent';
import LlqLabelComponent from '../LineComponents/Abdominal/LlqLabelComponent';
import LuqLabelComponent from '../LineComponents/Abdominal/LuqLabelComponent';
import UmbilLabelComponent from '../LineComponents/Abdominal/UmbilLabelComponent';
import { AnimatePresence, motion } from 'framer-motion';

const AbsComponent = (props: AbsComponentInterface) => {
    const {
        epgasActive,
        luqActive,
        llqActive,
        supraActive,
        rlqActive,
        ruqActive,
        umbilActive,
        showLabel
    } = props;
  return (
    <div>
        <svg className='relative drop-shadow-md w-[200px] mbsm:w-[250px] mblg:w-[300px] transition-[width_0.5s_linear]' viewBox="0 0 354 374" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="abs-main">
            <g id="Vector">
                <path d="M167 330.5H170.5V0H150.5C150.667 1.5 150.1 6.5 146.5 14.5C142.9 22.5 137.667 24.1667 135.5 24C133 24.5 116 23 86.5 23C57 23 57 38 53 53.5C49 69 40.5 171 39 189.5C37.5 208 33 283 32.5 286.5L32.4626 286.762C31.998 290.026 31.9234 290.551 29 292.5C26 294.5 14 305 12 307C10.4 308.6 9.33333 311 9 312C6.33333 315 0.9 321.1 0.5 321.5C0 322 -0.5 322.5 1 323.5C2.2 324.3 3.83333 324.167 4.5 324C6.5 322.667 10.9 319.8 12.5 319C14.1 318.2 17.8333 316 19.5 315L22 315.5L14.5 357.5C14.3333 358.333 14.6 360.2 17 361C19.4 361.8 20.6667 360 21 359C22.1667 355 24.7 346 25.5 342C26.3 338 28.5 334 29.5 332.5L27 365C27 365.833 27.7 367.6 30.5 368C33.3 368.4 34.3333 366.833 34.5 366C36 356.167 39 336.2 39 335C39 333.5 39.5 333.5 40 333.5C40.4 333.5 40.5 334.167 40.5 334.5L39 362C38.8333 362.833 39.1 364.6 41.5 365C43.9 365.4 45.1667 363.833 45.5 363L48.5 336C48.9 332.4 50 332.167 50.5 332.5L51.5 354.5C51.6667 355 52.5 356.1 54.5 356.5C56.5 356.9 57.3333 355.667 57.5 355L58.5 331.5L56.5 305L52.5 292.5L66 232.5C68 220.5 76 187 81 167C86 147 89 137.667 91.5 132C94.5 142.833 100.2 174.7 99 215.5C97.8 256.3 90.8334 292.167 87.5 305V364L159 374C159.5 371.167 160.8 364.1 162 358.5C163.2 352.9 165.833 337.5 167 330.5Z" fill="#FFEDEB"/>
                <path d="M173.5 330.5H170V0H192C191.833 1.5 191 7.5 195.5 15C200.014 22.5225 210 25 214.5 25C219.5 25 225.5 24.5 254.5 27.5C283.5 30.5 281.5 44 285.5 59.5C289.5 75 305.5 174.5 307 193C308.5 211.5 318 277 318.5 280.5C319 284 322 290.5 325 292.5C328 294.5 340 305 342 307C343.6 308.6 344.667 311 345 312C347.667 315 353.1 321.1 353.5 321.5C354 322 354.5 322.5 353 323.5C351.8 324.3 350.167 324.167 349.5 324C347.5 322.667 343.1 319.8 341.5 319C339.9 318.2 336.167 316 334.5 315L332 315.5L339.5 357.5C339.667 358.333 339.4 360.2 337 361C334.6 361.8 333.333 360 333 359C331.833 355 329.3 346 328.5 342C327.7 338 325.5 334 324.5 332.5L327 365C327 365.833 326.3 367.6 323.5 368C320.7 368.4 319.667 366.833 319.5 366C318 356.167 315 336.2 315 335C315 333.5 314.5 333.5 314 333.5C313.6 333.5 313.5 334.167 313.5 334.5L315 362C315.167 362.833 314.9 364.6 312.5 365C310.1 365.4 308.833 363.833 308.5 363L305.5 336C305.1 332.4 304 332.167 303.5 332.5L302.5 354.5C302.333 355 301.5 356.1 299.5 356.5C297.5 356.9 296.667 355.667 296.5 355L295.5 331.5L297.5 305L301.5 292.5L281.5 230.5C279.5 218.5 268.5 189.5 260.5 167C252.5 144.5 246 132.167 243.5 126.5C240.5 137.333 233.3 158.7 234.5 199.5C235.7 240.3 249.667 292.167 253 305L250 368L181.5 374C181 371.167 179.7 364.1 178.5 358.5C177.3 352.9 174.667 337.5 173.5 330.5Z" fill="#FFEDEB"/>
            </g>
            <g id="Vector_2">
                <path d="M28.5 311.5C26.5 313.1 23 314.833 21.5 315.5H22L21.5 318C22.6667 317.5 25.8 316 29 314C32.2 312 33.6667 304.167 34 300.5C33 303.5 30.5 309.9 28.5 311.5Z" fill="#FFE3DD"/>
                <path d="M324.438 309.993C326.838 313.993 328.5 313.5 330.5 315L331.938 315.493L332.5 318.5C331.167 318.5 327.638 316.593 324.438 312.993C321.238 309.393 319.771 303.16 319.438 300.493C320.104 301.993 322.038 305.993 324.438 309.993Z" fill="#FFE3DD"/>
                <path d="M131.5 316L103 297C101.8 296.2 102.167 297.333 102.5 298L130 317.5C141.333 321.167 164.4 328.6 166 329C167.6 329.4 167 328.5 166.5 328L131.5 316Z" fill="#FFE3DD"/>
                <path d="M210 317.5L175.5 329C173.9 329.8 176.167 330 177.5 330L210.5 319.5C214.167 316.833 223.3 310.4 230.5 306C239.5 300.5 241 294.5 239 297.5C237.4 299.9 219 311.833 210 317.5Z" fill="#FFE3DD"/>
                <path d="M216 133.5L174 131L217.5 137.5C224.5 131.833 238.4 120.4 238 120C237.6 119.6 223.167 128.833 216 133.5Z" fill="#FFE3DD"/>
                <path d="M252.5 82H249.5L245 125L252.5 82Z" fill="#FFE3DD"/>
                <path d="M119 133L97.5 121C101.667 126 111.8 136.3 119 137.5C126.2 138.7 149.333 133.667 160 131C160 131 128.667 133.333 119 133Z" fill="#FFE3DD"/>
                <path d="M86 85.5H83.5L91.5 129L86 85.5Z" fill="#FFE3DD"/>
                <path d="M247.5 35.5L196 45H219.5L247.5 35.5Z" fill="#FFE3DD"/>
                <path d="M148 45L96.5 35.5L124 45H148Z" fill="#FFE3DD"/>
            </g>
            </g>
            <defs>
                <linearGradient id="paint0_linear_1_141" x1="170.118" y1="148" x2="170.118" y2="212.572" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#075FD2"/>
                    <stop offset="1" stopColor="#01BFF6"/>
                </linearGradient>
                <linearGradient id="paint1_linear_1_141" x1="206.55" y1="182" x2="206.55" y2="233.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#075FD2"/>
                    <stop offset="1" stopColor="#01BFF6"/>
                </linearGradient>
                <linearGradient id="paint2_linear_1_141" x1="207.602" y1="241.394" x2="207.602" y2="297.75" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#075FD2"/>
                    <stop offset="1" stopColor="#01BFF6"/>
                </linearGradient>
                <linearGradient id="paint3_linear_1_141" x1="170.688" y1="262.446" x2="170.688" y2="315.064" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#075FD2"/>
                    <stop offset="1" stopColor="#01BFF6"/>
                </linearGradient>
                <linearGradient id="paint4_linear_1_141" x1="129.788" y1="241.475" x2="129.788" y2="297.89" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#075FD2"/>
                    <stop offset="1" stopColor="#01BFF6"/>
                </linearGradient>
                <linearGradient id="paint5_linear_1_141" x1="132.905" y1="180.944" x2="132.905" y2="233" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#075FD2"/>
                    <stop offset="1" stopColor="#01BFF6"/>
                </linearGradient>
                <linearGradient id="paint6_linear_1_141" x1="169" y1="217" x2="169" y2="257" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#075FD2"/>
                    <stop offset="1" stopColor="#01BFF6"/>
                </linearGradient>
            </defs>
        </svg>
        <AnimatePresence>
            {
                (showLabel && ruqActive) && (
                    <motion.div
                        key={"ruq"}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <RuqLabelComponent
                            classes='top-[230px] left-[5px] mbsm:top-[230px] mbsm:left-[5px] mblg:top-[230px]'
                            message='ช่องท้องด้านบนขวา' 
                        />
                    </motion.div>
                )
            }
            {
                (showLabel && epgasActive) && (
                    <motion.div
                        key={"epgas"}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <EpgasLabelComponent
                            classes='top-[135px] left-[10px] mbsm:top-[145px] mbsm:left-[20px]'
                            message='ลิ้นปี่' 
                        />
                    </motion.div>
                )
            }
            {
                (showLabel && rlqActive) && (
                    <motion.div
                        key={"rql"}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <RqlLabelComponent
                            classes='top-[305px] left-[10px] mbsm:top-[320px] mbsm:left-[10px]'
                            message='ช่องท้องด้านล่างขวา' 
                        />
                    </motion.div>
                )
            }
            {
                (showLabel && supraActive) && (
                    <motion.div
                        key={"supra"}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <SupraLabelComponent
                            classes='top-[335px] left-0 right-0 mbsm:top-[350px] mblg:top-[370px]'
                            message='ห้องน้อย' 
                        />
                    </motion.div>
                )
            }
            {
                (showLabel && llqActive) && (
                    <motion.div
                        key={"llq"}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <LlqLabelComponent
                            classes='top-[276px] right-[15px] mbsm:top-[290px] mbsm:right-[15px] mblg:top-[310px]'
                            message='ด้านล่างชำย' 
                        />
                    </motion.div>
            )
            }
            {
                (showLabel && luqActive) && (
                    <motion.div
                        key={"luq"}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <LuqLabelComponent
                            classes='top-[237px] right-[12px] mbsm:top-[230px]'
                            message='ช่องท้องด้านบนข้าย' 
                        />
                    </motion.div>
                )
            }
            {
                (showLabel && umbilActive) && (
                    <motion.div
                        key={"umbil"}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <UmbilLabelComponent
                            classes='top-[140px] right-[14px] mbsm:top-[160px] mbsm:right-[35px]'
                            message='รอบสะดือ' 
                        />
                    </motion.div>
                )
            }
        </AnimatePresence>
    </div>
  )
}

export default AbsComponent