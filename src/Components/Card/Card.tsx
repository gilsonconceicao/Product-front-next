import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CloseIcon from '@mui/icons-material/Close';
import { Button, SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import React from 'react';

interface ICardProps {
  title: string; 
  description?: string;
  labelOpen?: string;
  labelClose?: string;
  Actions: React.ReactNode;
}

export const Card: React.FC<ICardProps> = ({
  labelClose = "Fechar",
  labelOpen = "Abrir", 
  description = "Descrição do produto não informado", 
  title, 
  Actions
}) => {
  return (
    <div className='p-3 rounded-md border-2 border-[#DCDCDC]'>
      <h1 className='text-3xl border-b-2 border-t-gray-400 pb-3'>{title}</h1>
      <p className='pt-2'>{description}</p>
      <div className='flex justify-end gap-2 mt-4'>{Actions}</div>
    </div>
  )
}