'use client'
import React, { useState } from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

type ListType = {
  value: string;
  label: string;
  checked: boolean;
}

const list: ListType[] = [
  { checked: false, label: 'Item x element', value: '0' },
  { checked: false, label: 'Teste 2', value: '1' },
  { checked: false, label: '3 Teste element', value: '3' }
]
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Page() {
  const [selectedList, setSelectedList] = useState<string[]>([]);

  console.log('listCustom: ', selectedList)

  return (
    <>
      <button onClick={() => {
        const itemsSelected: string[] = list.map(item => item.value)
        setSelectedList(itemsSelected)
      }}>Selecionar todos</button>
      <h1>TESTE</h1>
      {list.map((item) => {
        return (
          <>
            <FormGroup>
              <FormControlLabel control={
                <Checkbox
                  checked={selectedList.includes(item.value)}
                  onChange={(e) => {
                    const value = e.target.checked;
                    if (value === false) {
                      const newList = selectedList.filter(prop => prop !== item.value);
                      return setSelectedList(newList);
                    }
                    setSelectedList([...selectedList, item.value]);
                    console.log(value)
                  }} />}
                label={item.label} />
            </FormGroup>
          </>
        )
      })}
      <h1>quantidades selecionados: { }</h1>
    </>
  )
}
