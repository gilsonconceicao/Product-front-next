'use client'
import { Actions } from '@/Components/Actions/Actions';
import { Card } from '@/Components/Card/Card';
import RefreshProgress from '@/Components/CircularProgress/CircularProgress';
import { useGetProductList } from '@/Hooks/Products/ProductsHook';
import { Grid, Stack } from '@mui/material';
import { Edit, Delete, Comment } from '@mui/icons-material';
import React from 'react'

const ProductsList = () => {
  const { data, isFetching } = useGetProductList();
  const queryData = data;
  return (
    <>
      {isFetching ? <RefreshProgress /> : ""}
      <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }} wrap='wrap'>
        {!!queryData && queryData?.map((product, index) => {
          return (
            <Grid item xs={2} sm={4} md={4} key={index ?? product.id}>
              <Card
                title={product.name}
                Actions={
                  <Actions
                    lengthShow={0}
                    listActions={[
                      { label: "Visualizar", Icon: Edit },
                      { label: "Comentar", Icon: Comment },
                      { label: "Excluir", Icon: Delete },
                      { label: "Ação 5", Icon: Comment }
                    ]} />
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
