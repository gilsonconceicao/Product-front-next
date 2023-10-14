import Link from 'next/link';
import React from 'react';

type ListType = {
  path: string;
  label: string;
}

interface IListNavigationsProps {
  listOptions: ListType[];
  width?: string;
}

export const ListNavigations: React.FC<IListNavigationsProps> = ({
  listOptions
}) => {
  return <div className=' w-1/3 p-3 rounded-md border-2 border-[#DCDCDC]'>
    {listOptions.map(({ label, path }, index) => {
      return (
        <Link
          href={path} key={index}
          className={`block p-3 border border-[#DCDCDC]`}
        >
          <h2 className='text-2xl font-semibold'>{label}</h2>
        </Link>
      );
    })}
  </div>
}