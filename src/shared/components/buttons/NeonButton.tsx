"use client"
/**
 * @class NeonButton
 * @description purpose of this component is to render dynamic button with neon hover effect
 * @author Nawod Madhuvantha
*/

import React from 'react'

type Props  = {
    title : string;
    border ?: boolean;
    onClickAction ?: () => void;
}

const NeonButton = ({title, onClickAction, border = false}: Props) => {

  return (
    <div className={`relative inline-block cursor-pointer py-4 px-8 text-theme uppercase text-xl anton overflow-hidden transition-all duration-[0.2s] neon-hover group ${border && 'border border-themeDark'}`} onClick={onClickAction}>
        <span className='absolute block top-0 -left-full w-full h-[2px] bg-gradient-to-l from-theme group-hover:left-full group-hover:transition-all group-hover:duration-[0.6s]'></span>
        <span className='absolute block -top-full right-0 w-[2px] h-full bg-gradient-to-b from-theme group-hover:top-full group-hover:transition-all group-hover:duration-[0.6s] group-hover:delay-[0.15s]'></span>
        <span className='absolute block bottom-0 -right-full w-full h-[2px] bg-gradient-to-r from-theme group-hover:right-full group-hover:transition-all group-hover:duration-[0.6s] group-hover:delay-[0.3s]'></span>
        <span className='absolute block -bottom-full left-0 w-[2px] h-full bg-gradient-to-t from-theme group-hover:bottom-full group-hover:transition-all group-hover:duration-[0.6s] group-hover:delay-[0.45s]'></span>
        {title}
    </div>
  )

}

export default NeonButton