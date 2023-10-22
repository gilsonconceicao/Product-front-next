import React, { Suspense } from "react";
import { useGetProductList } from "@/Hooks/Products/ProductsHook";
import { Autorenew, AddBox } from '@mui/icons-material';
import { Button, Grid } from "@mui/material";

const ProductsListComponent = React.lazy(() => import('../Pages/ProductsList/index'));

export default function Home() {
  return (
    <section>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductsListComponent />
      </Suspense>
    </section>
  )
}
