import React, { Suspense } from "react";
import { useGetProductList } from "@/Hooks/Products/ProductsHook"

const ProductsListComponent = React.lazy(() => import('../Pages/ProductsList/index'));

export default function Home() {
  return (
    <section>
      <h2 className='text-3xl mb-3'>Lista de produtos</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductsListComponent />
      </Suspense>
    </section>
  )
}
