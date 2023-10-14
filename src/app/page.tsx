import { ListNavigations } from '@/Components/ListNavigations/ListNavigations'
import { getData } from '@/servers/Products/Products';
import Link from 'next/link'
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState<any>([]);
  
  useEffect(() => {
    getData().then((res) => {
      setData(res)
    } ); 
  }, [])


  return (
    <section>
      <ul>
        <ListNavigations
          
          listOptions={[
            { label: 'Lista de produtos', path: '/Products' }
          ]}
        />
      </ul>
    </section>
  )
}
