import { TextFormField } from '@/Components/Forms/TextFormField/TextFormField'
import { Button, Stack } from '@mui/material'
import React from 'react'

export const CommentsForm = () => {
  return (
    <Stack spacing={4} mt={3}>
      <TextFormField
        label='Comentário'
        name='comment'
        autoComplete='off'
      />
      <Button type='submit' variant='outlined'> Adicionar</Button>
    </Stack>
  )
}