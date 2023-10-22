import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CloseIcon from '@mui/icons-material/Close';
import { Button, SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import React from 'react';

interface ICardProps {
  title: string;
  Actions: React.ReactNode;
  createdAt?: string;
  description?: string;
}

const isValidDescription = (description: string): boolean => {
  if (!description) return false;
  return description !== null && description.length > 0;
}

export const CardProduct: React.FC<ICardProps> = ({
  description,
  title,
  Actions,
  createdAt
}) => {
  const dateFormated = new Date(createdAt!).toLocaleDateString()
  return (
    <div className='p-3 rounded-md border-2 relative border-[#DCDCDC]'>
      <h2 className='absolute top-1 right-2'>{dateFormated}</h2>
      <h1 className='text-3xl border-b-2 border-t-gray-400 pb-3'>{title}</h1>
      <p className='pt-2'>{isValidDescription(description!) ? description : "Descrição do produto não informado"}</p>
      <div className='flex justify-end gap-2 mt-4'>{Actions}</div>
    </div>
  )
}