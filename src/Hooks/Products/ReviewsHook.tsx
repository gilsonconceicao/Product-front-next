'use client'
import { ReviewsCreate, createReviewToProduct } from "@/servers/Products/Products"
import { useMutation } from "@tanstack/react-query"

export const useCreateReviewToProduct = (onSuccess?: any, onError?: any) => {
  return useMutation({
    mutationFn: async (data: {productId:string, payload: ReviewsCreate }) => {
      return await createReviewToProduct(data?.productId, data.payload)
    }, 
    onError,
    onSuccess
  })
}