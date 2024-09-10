import React, { EventHandler, useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import SelectBoxComponent from '../components/SelectboxComponent';

const Layout = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState<string>("abdominal");

  const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
  }

  useEffect(() => {
    navigate(`/${value}`);
  },[value])
  return (
    <div className='p-[18px]'>
        <div className='w-full max-w-[450px] m-auto flex justify-center mb-[24px]'>
            <SelectBoxComponent 
                value={value}
                onChange={handleOnChange}
            />
        </div>
        <Outlet />
    </div>
  )
}

export default Layout