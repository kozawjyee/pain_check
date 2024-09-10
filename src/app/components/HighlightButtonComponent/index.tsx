import React from 'react'
import { HighlightButtonInterface } from '../../models/componentModels/components.models';
import './styles.css'
import { motion } from 'framer-motion';

const HighlightButtonComponent = (props: HighlightButtonInterface) => {
    const {isHighlight, message, onClick} = props;
  return (
    <motion.button
    className='btn py-[16px] px-[24px] rounded-full text-[#FFFFFF]'
    whileHover={{
        scale: 1.05,
      }}
      whileTap={{ scale: 0.9 }}
    onClick={onClick}
    >
        {message}
    </motion.button>
  )
}

export default HighlightButtonComponent