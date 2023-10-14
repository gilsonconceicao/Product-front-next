import React, { FunctionComponent } from 'react'

interface IHeaderProps {
  title?: string
}

export const Header: React.FC<IHeaderProps> = ({
  title = "SISTEMA DE PRODUTOS"
}) => {
  return (
    <nav className='p-4 bg-[#E0E1E0]' >
      <h1 className='text-6xl font-semibold'>{title}</h1>
    </nav>
  )
};
