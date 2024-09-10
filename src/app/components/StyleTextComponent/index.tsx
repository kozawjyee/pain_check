import React from 'react'
import { StyleTextInterface } from '../../models/componentModels/components.models';
import './styles.css'

const StyleText = (props: StyleTextInterface) => {
    const {message} = props;
    return(
        <p className='title-text mt-10 drop-shadow-sm'>
            {message}
        </p>
    )
}

export default StyleText