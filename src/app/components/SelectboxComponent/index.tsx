import React from 'react'
import './styles.css'
import { SelectBoxInterface } from '../../models/componentModels/components.models';

const SelectBoxComponent = (props: SelectBoxInterface) => {
    const {value, onChange} = props;
  return (
    <select className='select-box text-primary' value={value} onChange={onChange}>
        <option value={"finger"}>
            Finger
        </option>
        <option value={"abdominal"}>
            Abdominal
        </option>
    </select>
  )
}

export default SelectBoxComponent