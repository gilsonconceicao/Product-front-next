import { TextFormField } from '@/Components/Forms/TextFormField/TextFormField';
import { Button, Grid, IconButton, Stack, Typography } from '@mui/material';
import React from 'react'
import { ParamsType } from './page';
import { ArrowBack } from '@mui/icons-material';
import { useRouter } from 'next/navigation';

type ProductFormProps = {
  paramsId: string
}

export const ProductForm = ({ paramsId }: ProductFormProps) => {
  const router = useRouter();

  const isNew = paramsId === 'novo';
  const sessionSx = {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    gap: 2,
    flexWrap: 'wrap'
  }
  return (
    <Stack spacing={2}>
      <div className='flex items-center gap-2 justify-between'>
        <IconButton onClick={() => router.push('/')}>
          <ArrowBack />
        </IconButton>
        <Button sx={{ width: 200 }} type="submit" variant="outlined">
          {isNew ? 'Cadastrar produto' : 'Atualizar produto'}
        </Button>
      </div>
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
            type="number"
            fullWidth
          />
        </Grid>
      </Grid>
      <Typography variant='h5'>Endereço</Typography>
      <Grid sx={sessionSx}>
        <Grid>
          <TextFormField
            label="CEP"
            name="address.zipCode"
            type="text"
            fullWidth
          />
        </Grid>
        <Grid>
          <TextFormField
            label="Rua"
            name="address.street"
            type="text"
            fullWidth
          />
        </Grid>
        <Grid>
          <TextFormField
            label="Cidade"
            name="address.city"
            type="text"
            fullWidth
          />
        </Grid>
        <Grid>
          <TextFormField
            label="Estado"
            name="address.state"
            type="text"
            fullWidth
          />
        </Grid>
      </Grid>
    </Stack>
  )
};