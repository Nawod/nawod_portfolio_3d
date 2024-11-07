"use client"
/**
 * @class NeonButton
 * @description purpose of this component is to render dynamic button with neon hover effect
 * @author Nawod Madhuvantha
*/

import React from 'react'

type Props  = {
    title : string;
    onClickAction ?: () => void;
}

const NeonButton = ({title, onClickAction}: Props) => {

  return (
    <div className='relative inline-block cursor-pointer py-4 px-8 text-theme uppercase text-xl anton overflow-hidden transition-all duration-[0.2s] neon-hover group' onClick={onClickAction}>
        <span className='absolute block top-0 -left-full w-full h-[2px] bg-gradient-to-l from-theme group-hover:left-full group-hover:transition-all group-hover:duration-[1s]'></span>
        <span className='absolute block -top-full right-0 w-[2px] h-full bg-gradient-to-b from-theme group-hover:top-full group-hover:transition-all group-hover:duration-[1s] group-hover:delay-[0.25s]'></span>
        <span className='absolute block bottom-0 -right-full w-full h-[2px] bg-gradient-to-r from-theme group-hover:right-full group-hover:transition-all group-hover:duration-[1s] group-hover:delay-[0.5s]'></span>
        <span className='absolute block -bottom-full left-0 w-[2px] h-full bg-gradient-to-t from-theme group-hover:bottom-full group-hover:transition-all group-hover:duration-[1s] group-hover:delay-[0.75s]'></span>
        {title}
    </div>
  )

}

export default NeonButton