import React, { useEffect, useState } from 'react'
import ContainerComponent from '../../../components/ContainerComponent'
import FingerComponent from '../../../components/FingerComponent'
import { ActiveHoverInterface } from '../../../models/componentModels/components.models';
import LabelComponent from '../../../components/LineComponents/Finger/TopRightLabelComponent';
import StraightRightLabelComponent from '../../../components/LineComponents/Finger/StraightLineRightLabelComponent';
import BottmRightLabelComponent from '../../../components/LineComponents/Finger/BottomRightLabelComponent';
import StyleText from '../../../components/StyleTextComponent';
import HighlightButtonComponent from '../../../components/HighlightButtonComponent';
import { AnimatePresence, motion } from 'framer-motion';
import FingerButtonComponent from '../../../components/FingerButtonComponent';

const Finger = () => {
  const [dipHighlight, setDipHighlight] = useState<ActiveHoverInterface>({
    active: false,
    hover: false
  });
  const [mcpHighlight, setMcpHighlight] = useState<ActiveHoverInterface>({
    active: false,
    hover: false
  });
  const [piphighlight, setPipHighlight] = useState<ActiveHoverInterface>({
    active: false,
    hover: false
  });
  const [showLabel, setShowLabel] = useState<boolean>(true);

  useEffect(() => {
    if(dipHighlight.active && mcpHighlight.active && piphighlight.active){
      setShowLabel(false);
    }else{
      setShowLabel(true);
    }
  }, [dipHighlight.active, mcpHighlight.active, piphighlight.active]);

  const onDipClick = () => {
    setDipHighlight((prev: ActiveHoverInterface) => (
      {
        ...prev,
        active: !prev.active
      }
    ));
  }

  const onMcpClick = () => {
    setMcpHighlight((prev: ActiveHoverInterface) => (
      {
        ...prev,
        active: !prev.active
      }
    ));
  }

  const handleSelectAll = () => {
    if(dipHighlight.active && mcpHighlight.active && piphighlight.active){
      setMcpHighlight((prev: ActiveHoverInterface) => (
        {
          ...prev,
          active: false
        }
      ));
      setDipHighlight((prev: ActiveHoverInterface) => (
        {
          ...prev,
          active: false
        }
      ));
      setPipHighlight((prev: ActiveHoverInterface) => (
        {
          ...prev,
          active: false
        }
      ));
      setShowLabel(true);
    }else{
      setMcpHighlight((prev: ActiveHoverInterface) => (
        {
          ...prev,
          active: true
        }
      ));
      setDipHighlight((prev: ActiveHoverInterface) => (
        {
          ...prev,
          active: true
        }
      ));
      setPipHighlight((prev: ActiveHoverInterface) => (
        {
          ...prev,
          active: true
        }
      ));
      setShowLabel(false);
    }
  }

  const onPipClick = () => {
    setPipHighlight((prev: ActiveHoverInterface) => (
      {
        ...prev,
        active: !prev.active
      }
    ));
  }

  return (
    <div className='flex flex-col items-center'>
        <ContainerComponent>
            <FingerComponent
              dipActive={dipHighlight.active}
              mcpActive={mcpHighlight.active}
              pipActive={piphighlight.active}
              showLabel={showLabel}
            />
            <div className='absolute'>
              <FingerButtonComponent 
                dipActive={dipHighlight.active}
                mcpActive={mcpHighlight.active}
                pipActive={piphighlight.active}
                onDipClick={onDipClick}
                onMcpClick={onMcpClick}
                onPipClick={onPipClick}
                showLabel={showLabel}
              />
            </div>
            <div className='absolute bottom-10'>
              <StyleText
                message='Select Finger Pain Location'
              />
            </div>
        </ContainerComponent>
        <div className='mt-[24px]'>
          <HighlightButtonComponent
            isHighlight={true}
            message='ข้ออื่นๆ หรือไม่ได้ปวดบริเวณข้อ'
            // message='ปวดทั่วท้อง'
            onClick={handleSelectAll}
            />
        </div>
    </div>
  )
}

export default Finger