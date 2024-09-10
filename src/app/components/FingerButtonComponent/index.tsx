import React, { MouseEventHandler, useEffect, useRef, useState } from 'react'
import './styles.css'
import { ActiveHoverInterface, FingerComponentInterface } from '../../models/componentModels/components.models';

const FingerButtonComponent = (props: FingerComponentInterface) => {
  const {dipActive, mcpActive, pipActive, onDipClick, onMcpClick, onPipClick} =  props;
  
  return (
    <div>
        <svg className='relative drop-shadow-lg w-[200px] mbsm:w-[220px] mblg:w-[250px] transition-[width_0.5s_linear]' viewBox="0 0 285 416" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="finger">
            <g id="Group 2">
              <g id="pip">
                <rect onClick={onPipClick} className={pipActive ? 'fill-activeColor' : "fill-partBg hover:fill-hoverColor"} id="Rectangle2" x="18.647" y="152.08" width="23.3195" height="18" rx="9" transform="rotate(-21.1997 18.647 152.08)" stroke="url(#paint0_linear_1_141)"/>
                <rect onClick={onPipClick} className={pipActive ? 'fill-activeColor' : "fill-partBg hover:fill-hoverColor"} id="Rectangle3" x="57.1369" y="111.798" width="29.2488" height="18" rx="9" transform="rotate(-9.07161 57.1369 111.798)" stroke="url(#paint0_linear_1_141)"/>
                <rect onClick={onPipClick} className={pipActive ? 'fill-activeColor' : "fill-partBg hover:fill-hoverColor"} id="Rectangle6" x="101.522" y="91.6876" width="29.1798" height="18.1483" rx="9.07413" transform="rotate(-2.5441 101.522 91.6876)" stroke="url(#paint0_linear_1_141)"/>
                <rect onClick={onPipClick} className={pipActive ? 'fill-activeColor' : "fill-partBg hover:fill-hoverColor"} id="Rectangle7" x="148.522" y="98.8169" width="29.1798" height="18.1483" rx="9.07413" transform="rotate(-2.5441 148.522 98.8169)" stroke="url(#paint0_linear_1_141)"/>
                <rect onClick={onPipClick} className={pipActive ? 'fill-activeColor' : "fill-partBg hover:fill-hoverColor"} id="Rectangle13" x="244.172" y="190.686" width="23.5862" height="18.8113" rx="7.5" transform="rotate(30.9094 244.172 190.686)" stroke="url(#paint2_linear_1_141)"/>
              </g>
              <g id="mcp">
                <rect onClick={onMcpClick} className={mcpActive ? 'fill-activeColor' : "fill-partBg hover:fill-hoverColor"} id="Rectangle9" x="146.483" y="162.02" width="34.2866" height="22.7967" rx="9.5" transform="rotate(8.8672 146.483 162.02)" stroke="url(#paint1_linear_1_141)" />
                <rect onClick={onMcpClick} className={mcpActive ? 'fill-activeColor' : "fill-partBg hover:fill-hoverColor"} id="Rectangle10" x="104.449" y="166.604" width="34.2866" height="21.5107" rx="9.5" transform="rotate(-4.06487 104.449 166.604)" stroke="url(#paint1_linear_1_141)" />
                <rect onClick={onMcpClick} className={mcpActive ? 'fill-activeColor' : "fill-partBg hover:fill-hoverColor"} id="Rectangle11" x="65.6513" y="183.538" width="34.2866" height="21.5107" rx="9.5" transform="rotate(-22.0773 65.6513 183.538)" stroke="url(#paint1_linear_1_141)" />
                <rect onClick={onMcpClick} className={mcpActive ? 'fill-activeColor' : "fill-partBg hover:fill-hoverColor"} id="Rectangle12" x="32.6353" y="198.777" width="34.2866" height="21.5107" rx="9.5" transform="rotate(-18.9634 32.6353 198.777)" stroke="url(#paint1_linear_1_141)" />
                <rect onClick={onMcpClick} className={mcpActive ? 'fill-activeColor' : "fill-partBg hover:fill-hoverColor"} id="Rectangle14" x="212.237" y="244.117" width="29.9826" height="21.0343" rx="7.5" transform="rotate(38.4032 212.237 244.117)" stroke="url(#paint2_linear_1_141)" />
              </g>
              <g id="dip">
                <rect onClick={onDipClick} className={dipActive ? 'fill-activeColor' : "fill-partBg hover:fill-hoverColor"} id="Rectangle1" x="4.68691" y="115.653" width="23.3195" height="18" rx="9" transform="rotate(-21.1997 4.68691 115.653)" stroke="url(#paint2_linear_1_141)" />
                <rect onClick={onDipClick} className={dipActive ? 'fill-activeColor' : "fill-partBg hover:fill-hoverColor"} id="Rectangle4" x="57.5726" y="61.2615" width="23.3969" height="16.2029" rx="8.10146" transform="rotate(-9.07161 57.5726 61.2615)" stroke="url(#paint2_linear_1_141)" />
                <rect onClick={onDipClick} className={dipActive ? 'fill-activeColor' : "fill-partBg hover:fill-hoverColor"} id="Rectangle5" x="98.6142" y="40.1755" width="26.265" height="16.2029" rx="8.10146" transform="rotate(-8.68691 98.6142 40.1755)" stroke="url(#paint2_linear_1_141)" />
                <rect onClick={onDipClick} className={dipActive ? 'fill-activeColor' : "fill-partBg hover:fill-hoverColor"} id="Rectangle8" x="151.522" y="50.4773" width="25.2574" height="16.312" rx="8.15598" transform="rotate(-2.5441 151.522 50.4773)" stroke="url(#paint2_linear_1_141)" />
              </g>
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
            </defs>
        </svg>
    </div>
  )
}

export default FingerButtonComponent