import * as React from 'react';
import Box from '@mui/material/Box';
import Modal, { ModalTypeMap } from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { Grid, IconButton, Stack } from '@mui/material';
import { Cancel } from '@mui/icons-material';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid grey',
  padding: 2, 
  borderRadius: 1
};

type ModalCustomType = {
  open: boolean;
  title: string; 
  description?: string;
  onClose: () => void;
  children: any;
}

export default function ModalCustom({ onClose, open, children, title, description}: ModalCustomType) {
  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <>
          <Box sx={style}>
            <Grid position='relative'>
              <h1 className='text-lg' style={{fontSize: 23}}>{title}</h1>
              <h2>{description}</h2>
              <Stack>{children}</Stack>
              <IconButton onClick={onClose} sx={{position: 'absolute', top: 0, right: 0}}>
                <Cancel />
              </IconButton>
            </Grid>
          </Box>
        </>
      </Modal>
    </div>
  );
}