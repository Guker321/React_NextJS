import React from 'react';
import { Button, Htag, P, Rating, Tag } from '../components';
import { withLayout } from '../layout/Layout';
import { GetStaticProps } from 'next';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';

function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = React.useState<number>(4);
  return (
    <>
      <Htag tag='h1'>Text</Htag>
      <Button appearance='primary' arrow='right'>
        Button
      </Button>
      <Button appearance='ghost' arrow='down'>
        Button
      </Button>
      <P size='s'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, minima!
        Quasi nobis, sint sed nulla numquam laudantium optio earum doloremque?
      </P>
      <P size='m'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, minima!
        Quasi nobis, sint sed nulla numquam laudantium optio earum doloremque?
      </P>
      <P size='l'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, minima!
        Quasi nobis, sint sed nulla numquam laudantium optio earum doloremque?
      </P>
      <Tag color='green'>green</Tag>
      <Tag color='primary'>primary</Tag>
      <Tag color='ghost'>ghost</Tag>
      <Tag>ghost standart</Tag>
      <Rating rating={rating} isEditable={true} setRating={setRating} />
      <ul>
        {menu.map((m) => (
          <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
        ))}
      </ul>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  // Делает запрос на сервер Возвращать будет пропсы
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
    { firstCategory }
  ); // Получаем результат запроса
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
