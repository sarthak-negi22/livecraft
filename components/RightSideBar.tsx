import React from 'react'
import Dimensions from './settings/Dimensions'
import Text from './settings/Text'
import Color from './settings/Color'
import Export from './settings/Export'

const RightSideBar = () => {
  return (
    <section className = "flex flex-col border-t border-primary-grey-200 text-primary-grey-300 bg-primary-black min-2-[227px] sticky right-0 h-full max-sm:hidden select-none" >
        <h3 className = "px-5 py-4 text-xs uppercase" >Design</h3>
        <span className = "text-xs text-primary-grey-300 mt-3 px-5 border-b border-primary-grey-200 pb-4" >Make changes to canvas as you like!</span>


        <Dimensions />
        <Text />
        <Color />
        <Color />
        <Export />
    </section>
  )
}

export default RightSideBar