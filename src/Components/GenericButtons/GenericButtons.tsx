import { Button, Stack } from '@mui/material';
import React from 'react'

type GenericButtonsProps = {
  labelSubmit?: string; 
  labelClose?: string;  
  onClose: () => void;
  handleSubmit: () => void;
}

export const GenericButtons = ({
  handleSubmit,  
  labelSubmit = "Confirmar"
}: GenericButtonsProps) => {
  return (
    <Stack spacing={2} mt={3}>
      <Button onClick={handleSubmit} variant='outlined'>{labelSubmit}</Button>
    </Stack>
  )
}
