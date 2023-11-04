import { ProductType } from '@/servers/Products/Products';
import { EmojiObjects, EmojiObjectsOutlined, ReceiptLongOutlined } from '@mui/icons-material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CloseIcon from '@mui/icons-material/Close';
import { Button, SvgIconTypeMap, Typography } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import React from 'react';

interface ICardProps {
  Actions: React.ReactNode;
  productData?: ProductType
}

const isValidDescription = (description: string): boolean => {
  if (!description) return false;
  return description !== null && description.length > 0;
}

export const CardProduct: React.FC<ICardProps> = ({
  Actions,
  productData
}) => {
  const { createdAt, name: title, description, reviews, ...rest } = productData!;
  const dateFormated = new Date(createdAt!).toLocaleDateString()

  return (
    <div className='p-3 rounded-md  relative border-2 border-[#DCDCDC]'>
      <Typography className='absolute top-1 right-2'>{dateFormated}</Typography>
      <Typography className='text-3xl border-b-2 border-t-gray-400 pb-3'>{title}</Typography>
      <Typography className='pt-2 pb-2 border-b-2 border-t-gray-400'>{isValidDescription(description!) ? description : "Descrição do produto não informado"}</Typography>

      <Typography variant='subtitle1' sx={{ fontSize: 20 }}>Comentários</Typography>

      <div className='block ml-3'>
        {reviews?.length > 0 ? (
          reviews.map(item => (
            // eslint-disable-next-line react/jsx-key
            <Typography sx={{ lineHeight: 2 }}><ReceiptLongOutlined /> - {item.comment}</Typography>
          ))
        ) : (
          <>Nenhum comentário</>
        )
        }
      </div>
      <div className='flex justify-end gap-2 mt-4 absolute top-2 right-0'>{Actions}</div>
    </div >
  )
}