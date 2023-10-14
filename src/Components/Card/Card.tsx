import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import React from 'react';

type ListType = {
  path: string;
  label: string;
}

interface ICardProps {
  listOptions: ListType[];
  width?: string;
}

export const Card: React.FC<ICardProps> = ({
  listOptions
}) => {
  return (
    <div className='w-1/5 p-3 rounded-md border-2 border-[#DCDCDC]'>
      <h1 className='text-3xl border-b-2 border-t-gray-400 pb-3'>Nome do produto</h1>
      <p className='pt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium quasi quod quis maiores error quibusdam culpa illo vel!</p>
      <div className='flex justify-end gap-2 mt-4'>
        <Button startIcon={<CloseIcon />} variant='outlined'>
          Fechar
        </Button>
        <Button startIcon={<ArrowRightAltIcon />} variant='outlined'>
          Abrir
        </Button>
      </div>
    </div>
  )
}