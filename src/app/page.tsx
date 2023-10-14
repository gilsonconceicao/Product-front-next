import { Card } from '@/Components/Card/Card';

export default function Home() {
  return (
    <section>
      <ul>
        <Card
          listOptions={[
            { label: 'Lista de produtos', path: '/Products' }
          ]}
        />
      </ul>
    </section>
  )
}
