/* eslint-disable react/no-children-prop */
'use client'
import { Action, Actions } from '@/Components/Actions/Actions';
import { Card } from '@/Components/Card/Card';
import { useRouter } from 'next/navigation';
import RefreshProgress from '@/Components/CircularProgress/CircularProgress';
import { useDeleteProduct, useGetProductList } from '@/Hooks/Products/ProductsHook';
import { Button, Grid, Stack } from '@mui/material';
import { Edit, Delete, Comment, Autorenew, AddBox } from '@mui/icons-material';
import React, { useState } from 'react'
import { ActionType } from '@/Global/Global.type';
import ModalCustom from '@/Components/Modal/Modal';
import { GenericButtons } from '@/Components/GenericButtons/GenericButtons';

const ProductsList = () => {
  const [action, setAction] = useState<ActionType | undefined>(undefined);
  const { data, isFetching, refetch } = useGetProductList();
  const router = useRouter();
  const queryData = data;
  
  const onSuccessDelete = () => {
    setAction(undefined); 
    refetch();
  };

  const { mutate } = useDeleteProduct(onSuccessDelete);
  const onDeleteProduct = (id: string) => mutate(id)

  const listActions = [
    { label: "Visualizar", Icon: Edit, action: (id) => router.push(`/Product/${id}`) },
    { label: "Comentar", Icon: Comment, action: () => { } },
    { label: "Excluir", Icon: Delete, action: (id) => setAction({ action: "delete", params: id }) }
  ] as Action[];

  const showData =  !!queryData && queryData?.length > 0 

  return (
    <>
      <Stack gap={1} direction='row'>
        <Button variant="outlined" endIcon={<AddBox />} onClick={() => router.push('/Product/novo')}>Adicionar</Button>
        <Button variant="outlined" endIcon={<Autorenew />} onClick={() => { refetch() }}>Atualizar lista</Button>
      </Stack>
      <Grid mb={2} mt={2}>{isFetching ? <RefreshProgress /> : ""}</Grid>
      <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }} wrap='wrap'>
        {showData && queryData?.map((product, index) => {
          return (
            <Grid item xs={2} sm={4} md={4} key={index ?? product.id}>
              <Card
                title={product.name}
                description={product.description}
                Actions={
                  <Actions
                    lengthShow={0}
                    idRow={product.id}
                    listActions={listActions} />
                }
              />
            </Grid>
          )
        })}
      </Grid>

      <ModalCustom
        open={action?.action === 'delete'}
        title='Excluir'
        description='Tem certeza que deseja excluir?'
        onClose={() => setAction(undefined)}
        children={
          <GenericButtons
            handleSubmit={() => onDeleteProduct(action?.params as string)}
            onClose={() => setAction(undefined)}
          />
        }
      />
    </>
  )
}

export default ProductsList
