'use client'
import React, { FunctionComponent, useState } from 'react'
interface IHeaderProps {
  title?: string
}
export const Header: React.FC<IHeaderProps> = ({
  title = "Sistema de produtos"
}) => {
  return (
    <nav className='p-4 bg-[#E0E1E0] flex justify-between' >
      <h1 className='text-2xl italic font-semibold'>{title}</h1>
    </nav>
  )
};
