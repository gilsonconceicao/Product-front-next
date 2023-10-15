'use client'
import { Action, Actions } from '@/Components/Actions/Actions';
import { Card } from '@/Components/Card/Card';
import RefreshProgress from '@/Components/CircularProgress/CircularProgress';
import { useDeleteProduct, useGetProductList } from '@/Hooks/Products/ProductsHook';
import { Grid, Stack } from '@mui/material';
import { Edit, Delete, Comment } from '@mui/icons-material';
import React from 'react'

const ProductsList = () => {
  const { data, isFetching, refetch } = useGetProductList();
  const { mutate } = useDeleteProduct(refetch);
  const queryData = data;

  const onDeleteProduct = (id: string) => mutate(id)

  const listActions = [
    { label: "Visualizar", Icon: Edit, action: () => {} },
    { label: "Comentar", Icon: Comment, action: () => {}  },
    { label: "Excluir", Icon: Delete, action: (id) => {} }
  ] as Action[];

  return (
    <>
      <Grid mb={2}>{isFetching ? <RefreshProgress /> : ""}</Grid>
      <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }} wrap='wrap'>
        {!!queryData && queryData?.map((product, index) => {
          return (
            <Grid item xs={2} sm={4} md={4} key={index ?? product.id}>
              <Card
                title={product.name}
                Actions={
                  <Actions
                    lengthShow={4}
                    idRow={product.id}
                    listActions={listActions} />
                }
              />
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}

export default ProductsList
