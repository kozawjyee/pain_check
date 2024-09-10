import React, { useEffect, useState } from 'react'
import ContainerComponent from '../../../components/ContainerComponent';
import { ActiveHoverInterface } from '../../../models/componentModels/components.models';
import AbsComponent from '../../../components/AbsComponent';
import AbsButtonComponent from '../../../components/AbsButtonComponent';
import StyleText from '../../../components/StyleTextComponent';
import { AbdominalState } from '../../../models/AbdominalModels/abs.model';
import RuqLabelComponent from '../../../components/LineComponents/Abdominal/RuqLabelComponent';
import EpgasLabelComponent from '../../../components/LineComponents/Abdominal/EpgasLabelComponent';
import RqlLabelComponent from '../../../components/LineComponents/Abdominal/RqlLabelComponent';
import SupraLabelComponent from '../../../components/LineComponents/Abdominal/SupraLabelComponent';
import LlqLabelComponent from '../../../components/LineComponents/Abdominal/LlqLabelComponent';
import LuqLabelComponent from '../../../components/LineComponents/Abdominal/LuqLabelComponent';
import UmbilLabelComponent from '../../../components/LineComponents/Abdominal/UmbilLabelComponent';
import HighlightButtonComponent from '../../../components/HighlightButtonComponent';

const Abdominal = () => {
  const [abdominalParts, setAbdominalParts] = useState<AbdominalState>({
    epgasActive: false,
    llqActive: false,
    luqActive: false,
    rlqActive: false,
    ruqActive: false,
    supraActive: false,
    umbilActive: false
  })
  const [showLabel, setShowLabel] = useState<boolean>(true);

  const updateAboPartState = (key: string, value: boolean) => {
    setAbdominalParts((prev: AbdominalState) => (
      {
        ...prev,
        [key]: value
      }
    ))
  }

  useEffect(() => {
    if(Object.values(abdominalParts).filter((isActive) => isActive).length >= 7){
      setShowLabel(false);
    }else{
      setShowLabel(true);
    }
  }, [abdominalParts]);

  const handleSelectAll = () => {
    if(Object.values(abdominalParts).filter((isActive) => isActive).length >= 7){
      setAbdominalParts({
        epgasActive: false,
        llqActive: false,
        luqActive: false,
        rlqActive: false,
        ruqActive: false,
        supraActive: false,
        umbilActive: false
      });
      setShowLabel(true);
    }else{
      setAbdominalParts({
        epgasActive: true,
        llqActive: true,
        luqActive: true,
        rlqActive: true,
        ruqActive: true,
        supraActive: true,
        umbilActive: true
      });
      setShowLabel(false);
    }
  }
  

  return (
    <div className='flex flex-col items-center'>
        <ContainerComponent>
            <AbsComponent
              epgasActive={abdominalParts.epgasActive}
              llqActive={abdominalParts.llqActive}
              luqActive={abdominalParts.luqActive}
              rlqActive={abdominalParts.rlqActive}
              supraActive={abdominalParts.supraActive}
              ruqActive={abdominalParts.ruqActive}
              umbilActive={abdominalParts.umbilActive}
              showLabel={showLabel}
            />
            <div className='absolute'>
                  <AbsButtonComponent
                  epgasActive={abdominalParts.epgasActive}
                  llqActive={abdominalParts.llqActive}
                  luqActive={abdominalParts.luqActive}
                  rlqActive={abdominalParts.rlqActive}
                  supraActive={abdominalParts.supraActive}
                  ruqActive={abdominalParts.ruqActive}
                  umbilActive={abdominalParts.umbilActive}
                  onEpgasClick={() => updateAboPartState("epgasActive", !abdominalParts.epgasActive)}
                  onLlqClick={() => updateAboPartState("llqActive", !abdominalParts.llqActive)}
                  onLuqClick={() => updateAboPartState("luqActive", !abdominalParts.luqActive)}
                  onRlqClick={() => updateAboPartState("rlqActive", !abdominalParts.rlqActive)}
                  onRuqClick={() => updateAboPartState("ruqActive", !abdominalParts.ruqActive)}
                  onSupraClick={() => updateAboPartState("supraActive", !abdominalParts.supraActive)}
                  onUmbilClick={() => updateAboPartState("umbilActive", !abdominalParts.umbilActive)}
                />
            </div>
            <div className='absolute bottom-10'>
              <StyleText
                message='Select Abdominal Pain Location'
              />
            </div>
        </ContainerComponent>
        <div className='mt-[24px]'>
          <HighlightButtonComponent
            isHighlight={true}
            // message='ข้ออื่นๆ หรือไม่ได้ปวดบริเวณข้อ'
            message='ปวดทั่วท้อง'
            onClick={handleSelectAll}
            />
        </div>
    </div>
  )
}

export default Abdominal