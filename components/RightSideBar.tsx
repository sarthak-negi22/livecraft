import React, { useRef } from 'react'
import Dimensions from './settings/Dimensions'
import Text from './settings/Text'
import Color from './settings/Color'
import Export from './settings/Export'
import { RightSidebarProps } from '@/types/type'
import { modifyShape } from '@/lib/shapes'

const RightSideBar = ({ 
  elementAttributes,
  setElementAttributes,
  fabricRef,
  activeObjectRef,
  isEditingRef,
  syncShapeInStorage,
 } : RightSidebarProps) => {
  const colorInputRef = useRef(null);
  const strokeInputRef = useRef(null);

  const handleInputChange = (property : string, value : string) => {
    if(!isEditingRef.current) {
      isEditingRef.current = true;
    }

    setElementAttributes((prev) => ({
      ...prev,
      [property] : value,
    }));

    modifyShape({
      canvas : fabricRef.current as fabric.Canvas,
      property,
      value,
      activeObjectRef,
      syncShapeInStorage,
    });
  }

  return (
    <section className = "flex flex-col border-t border-primary-grey-200 text-primary-grey-300 bg-primary-black min-2-[227px] sticky right-0 h-full max-sm:hidden select-none" >
        <h3 className = "px-5 py-4 text-xs uppercase" >Design</h3>
        <span className = "text-xs text-primary-grey-300 mt-3 px-5 border-b border-primary-grey-200 pb-4" >Make changes to canvas as you like!</span>
        <Dimensions 
          width = { elementAttributes.width }
          height = { elementAttributes.height }
          handleInputChange = { handleInputChange }
          isEditingRef = { isEditingRef }
        />
        <Text 
          fontFamily = { elementAttributes.fontFamily }
          fontSize = { elementAttributes.fontSize }
          fontWeight = { elementAttributes.fontWeight }
          handleInputChange = { handleInputChange }
        />
        <Color 
          inputRef = { colorInputRef }
          attribute = { elementAttributes.fill }
          placeholder = "Color"
          handleInputChange = { handleInputChange }
          attributeType = "fill"
        />
        <Color 
          inputRef = { strokeInputRef }
          attribute = { elementAttributes.stroke }
          placeholder = "Stroke"
          handleInputChange = { handleInputChange }
          attributeType = "stroke"
        />
        <Export />
    </section>
  )
}

export default RightSideBar