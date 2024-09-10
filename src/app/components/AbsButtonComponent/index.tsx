import React from 'react'
import { AbsComponentInterface } from '../../models/componentModels/components.models'
import './styles.css'
import RuqLabelComponent from '../LineComponents/Abdominal/RuqLabelComponent';

const AbsButtonComponent = (props: AbsComponentInterface) => {
    const {
        onEpgasClick,
        epgasActive,
        onLuqClick,
        luqActive,
        onLlqClick,
        llqActive,
        onSupraClick,
        supraActive,
        onRlqClick,
        rlqActive,
        onRuqClick,
        ruqActive,
        onUmbilClick,
        umbilActive
    } = props;
  return (
    <div>
        <svg className='relative drop-shadow-md w-[200px] mbsm:w-[250px] mblg:w-[300px] transition-[width_0.5s_linear]' viewBox="0 0 354 374" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="abs-main">
            <g id="abs">
                <path onClick={onEpgasClick} className={epgasActive ? 'fill-activeColor' : "fill-partBg hover:fill-hoverColor"} id="epgastrium" d="M191 165C185 154.6 175.167 149.333 171 148C158.5 148 142 173 142 177C142 181 165.5 211 169.5 212.5C173.5 214 188 191.5 194.5 183.5C201 175.5 198.5 178 191 165Z" stroke="url(#paint0_linear_1_141)"/>
                <path onClick={onLuqClick} className={luqActive ? 'fill-activeColor' : "fill-partBg hover:fill-hoverColor"} id="luq" d="M202.5 182L179 212.5C189 217.3 193.833 228.5 195 233.5H217C227 233.5 231 232.5 233.5 231.5C236 230.5 230 199 228 192C226.4 186.4 210.333 183 202.5 182Z" stroke="url(#paint1_linear_1_141)"/>
                <path onClick={onLlqClick} className={llqActive ? 'fill-activeColor' : "fill-partBg hover:fill-hoverColor"} id="llq" d="M218.5 241.5C204.9 241.9 197.5 242.333 195.5 242.5C194 252.5 185 257.5 182.5 259.5C180 261.5 182 263.5 187.5 268C193 272.5 199 285 201.5 291C204 297 202 299 208 297C214 295 217 288 224.5 280C232 272 233 259 233.5 250.5C234 242 235.5 241 218.5 241.5Z" stroke="url(#paint2_linear_1_141)"/>
                <path onClick={onSupraClick} className={supraActive ? 'fill-activeColor' : "fill-partBg hover:fill-hoverColor"} id="suprapubic" d="M197 297C198.6 299.8 197.333 301.5 196.5 302C188.5 310 178.5 314 169 315C159.5 316 148.5 305 145 302C141.5 299 145 292 151 281C157 270 167 263 170 262.5C173 262 176 265 182 269.5C188 274 195 293.5 197 297Z" stroke="url(#paint3_linear_1_141)"/>
                <path onClick={onRlqClick} className={rlqActive ? 'fill-activeColor' : "fill-partBg hover:fill-hoverColor"} id="rlq" d="M146 277C147.6 274.2 154 264.833 157 260.5C157.5 260 157 259.5 152.5 257C148 254.5 144.5 248 144 244.5C143.5 241 142.5 241.5 139.5 241.5H106.5C103 241.5 101.5 258 103 266.5C104.5 275 122 291.5 129.5 296C137 300.5 138.5 296 140.5 292.5C142.5 289 144 280.5 146 277Z" stroke="url(#paint4_linear_1_141)"/>
                <path onClick={onRuqClick} className={ruqActive ? 'fill-activeColor' : "fill-partBg hover:fill-hoverColor"} id="ruq" d="M160 210.5C162 212.9 160.167 214.167 159 214.5C157.833 215 154.4 217.1 150 221.5C144.5 227 145 233 143 233H111C103.5 233 105.5 232 105 226.5C104.5 221 106.5 209.5 107 203.5C107.5 197.5 108 197.5 111 193C114 188.5 124 184.5 127.5 183C131 181.5 132 179.5 136.5 182.5C141 185.5 157.5 207.5 160 210.5Z" stroke="url(#paint5_linear_1_141)"/>
                <circle onClick={onUmbilClick} className={umbilActive ? 'fill-activeColor' : "fill-partBg hover:fill-hoverColor"} id="umbilicus" cx="169" cy="237" r="19.5" stroke="url(#paint6_linear_1_141)"/>
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
    </div>
  )
}

export default AbsButtonComponent