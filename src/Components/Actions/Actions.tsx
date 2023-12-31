import { Close, Menu } from '@mui/icons-material';
import { Button, Drawer, Grid, IconButton, Stack, SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import React, { useEffect, useRef, useState } from 'react'

export type Action = {
  label: string,
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string; };
  action: (id: string) => void;
}

type ActionsProps = {
  listActions: Action[],
  idRow: string;
  lengthShow: number
}

export const Actions: React.FC<ActionsProps> = ({ lengthShow, listActions, idRow }) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(!open);

  const handleClose = () => setOpen(false)

  const listToShow = listActions.slice(0, lengthShow);
  const listToHide = listActions.slice(lengthShow);

  const removeActionToOpen = listToHide.length === 0; 
  
  return (
    <Stack direction='row' position='relative' alignItems='center'>
      {listToShow.map(({ Icon, label, action }, index) => {
        return (
          <IconButton key={index} onClick={() => action(idRow)}>
            <Icon sx={{ height: 20, width: 20}}/>
          </IconButton>
        )
      })}
      {!removeActionToOpen && <IconButton onClick={handleOpen}>
        {open ? <Close /> : <Menu />}
      </IconButton>}
      <Drawer
        anchor='bottom'
        open={open}
        onClose={handleClose}
      >
        {listToHide.map(({ Icon, label, action }, index) => {
          return (
            <Button
              className='p-5 content-start justify-start'
              onClick={() => {
                action && action(idRow);
                handleClose();
              }}
              key={index}>
              <Icon sx={{ height: 20, width: 20, mr: 1 }} />
              {label}
            </Button>
          )
        })}
      </Drawer>
    </Stack>
  )
}
