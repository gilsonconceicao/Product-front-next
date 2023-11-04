'use client'
/* eslint-disable react/no-children-prop */
import { Action, Actions } from '@/Components/Actions/Actions';
import { CardProduct } from '@/Components/CardProduct/CardProduct';
import { useRouter } from 'next/navigation';
import RefreshProgress from '@/Components/CircularProgress/CircularProgress';
import { useDeleteProduct, useGetProductList } from '@/Hooks/Products/ProductsHook';
import { Grid, IconButton, Stack, TextField, Typography } from '@mui/material';
import { Edit, Delete, Comment, Autorenew, AddBox, Search, Add } from '@mui/icons-material';
import React, { useState } from 'react'
import { ActionType } from '@/Global/Global.type';
import ModalCustom from '@/Components/Modal/Modal';
import { GenericButtons } from '@/Components/GenericButtons/GenericButtons';
import { CommentsForm } from './Comments/CommentsForm';
import { FormContextProvider } from '@/Contexts/FormContext/FormContext';
import { defaultValuesCommentsForm, validationSchemaCommentsForm } from './Comments/Schema/CommentsFormSchema';
import { ProductType, ReviewsCreate } from '@/servers/Products/Products';
import { useCreateReviewToProduct } from '@/Hooks/Products/ReviewsHook';
import { FieldValues } from 'react-hook-form';

const ProductsList = () => {
  const [search, setSearch] = useState<string | undefined>(undefined);
  const [action, setAction] = useState<ActionType | undefined>(undefined);
  const { data, isFetching, refetch } = useGetProductList();
  const router = useRouter();
  const queryData = data;

  const listActions = [
    { label: "Visualizar", Icon: Edit, action: (id) => router.push(`/Product/${id}`) },
    { label: "Comentar", Icon: Comment, action: (id) => setAction({ action: 'comments', params: id }) },
    { label: "Excluir", Icon: Delete, action: (id) => setAction({ action: "delete", params: id }) }
  ] as Action[];

  const listFiltered = queryData && queryData?.filter((item) => {
    const itemLowerCase = item.name.toLowerCase();
    const searchList = search?.toLowerCase();
    return itemLowerCase.includes(searchList ?? "")
  });

  const onSuccessGeneric = () => {
    setAction(undefined);
    refetch();
  };

  const { mutate: createReviewMutate } = useCreateReviewToProduct(onSuccessGeneric);
  const { mutate } = useDeleteProduct(onSuccessGeneric);
  const onDeleteProduct = (id: string) => mutate(id)


  const onCreateReview = async (values: FieldValues) => {
    await createReviewMutate({
      payload: values as ReviewsCreate,
      productId: action?.params as string
    })
  }

  return (
    <>
      <Stack direction='row' borderBottom='2px solid #DCDCDC' paddingBottom='15px' spacing={2} justifyContent='space-between' alignItems='center'>
        <h2 className='text-3xl mb-3'>Lista de produtos</h2>
        <Grid direction='row' alignItems='center'>
          <TextField
            label='Procurar'
            variant='standard'
            autoComplete='off'
            onChange={(event) => {
              const value = event.target.value;
              setSearch(value);
            }}
          />
          <IconButton sx={{ mt: 1 }} onClick={() => { refetch() }}>
            <Autorenew />
          </IconButton>
          <IconButton sx={{ mt: 1 }} onClick={() => router.push('/Product/novo')}>
            <Add />
          </IconButton>
        </Grid>
      </Stack>
      <div className='w-9/12 m-auto mt-10' >
        <div className='mb-4'>{isFetching && <RefreshProgress />}</div>
        <Grid container spacing={{ xs: 2, md: 1 }} mt={2} wrap='wrap'>
          {listFiltered?.map((product, index) => {
            return (
              <Grid item md={12} key={index ?? product.id}>
                <CardProduct
                  productData={product as ProductType}
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
      </div>

      {listFiltered?.length === 0 && <Typography mt={20} textAlign='center' fontSize={30}>Lista vazia</Typography>}

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

      <ModalCustom
        open={action?.action === 'comments'}
        title='Novo comentário'
        onClose={() => setAction(undefined)}
        children={
          <FormContextProvider
            defaultValues={defaultValuesCommentsForm}
            validationSchema={validationSchemaCommentsForm}
            onSubmit={onCreateReview}
          >
            <CommentsForm />
          </FormContextProvider>
        }
      />
    </>
  )
}

export default ProductsList
