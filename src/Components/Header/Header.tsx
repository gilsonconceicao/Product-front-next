'use client'
import { Menu } from '@mui/icons-material';
import { Button, Drawer, IconButton } from '@mui/material';
import { useRouter } from 'next/navigation';
import React, { FunctionComponent, useState } from 'react'

interface IHeaderProps {
  title?: string
}

export const Header: React.FC<IHeaderProps> = ({
  title = "SISTEMA DE PRODUTOS"
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();

  const onClose = () => setOpen(false);

  const navigate = () => {
    router.push('/Product/novo');
    onClose();
  }
  return (
    <nav className='p-4 bg-[#E0E1E0] flex justify-between' >
      <h1 className='text-6xl font-semibold'>{title}</h1>
      <IconButton onClick={() => setOpen(true)}>
        <Menu />
      </IconButton>
      <Drawer
        anchor='right'
        open={open}
        onClose={() => setOpen(false)}
      >
        <Button onClick={navigate}>Adicionar</Button>
      </Drawer>
    </nav>
  )
};
