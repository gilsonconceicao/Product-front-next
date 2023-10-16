import { TextFormField } from '@/Components/Forms/TextFormField/TextFormField';
import { Button, Grid, Stack, Typography } from '@mui/material';
import React from 'react'

export const ProductForm = () => {
  const sessionSx = {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    gap: 2,
    flexWrap: 'wrap'
  }
  return (
    <Stack spacing={2}>
      <Button sx={{ width: 200 }} type="submit" variant="outlined">
        Criar usuário
      </Button>
      <Typography variant='h5'>Informações do produto</Typography>
      <Grid sx={sessionSx}>
        <Grid>
          <TextFormField
            label="Nome"
            name="name"
            type="text"
            fullWidth
          />
        </Grid>
        <Grid>
          <TextFormField
            label="Descrição"
            name="description"
            type="text"
            fullWidth
          />
        </Grid>
        <Grid>
          <TextFormField
            label="Preço"
            name="price"
            type="text"
            fullWidth
          />
        </Grid>
        <Grid>
          <TextFormField
            label="Disconto"
            name="discount"
            type="text"
            fullWidth
          />
        </Grid>
      </Grid>
      <Typography variant='h5'>Endereço</Typography>
      <Grid sx={sessionSx}>
        <Grid>
          <TextFormField
            label="CEP"
            name="zipCode"
            type="text"
            fullWidth
          />
        </Grid>
        <Grid>
          <TextFormField
            label="Rua"
            name="street"
            type="text"
            fullWidth
          />
        </Grid>
        <Grid>
          <TextFormField
            label="Cidade"
            name="city"
            type="text"
            fullWidth
          />
        </Grid>
        <Grid>
          <TextFormField
            label="Estado"
            name="state"
            type="text"
            fullWidth
          />
        </Grid>
      </Grid>
    </Stack>
  )
};