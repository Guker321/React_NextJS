import React from 'react';
import { Button, Htag, P, Tag } from '../components';

export default function Home(): JSX.Element {
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
        Suscipit beatae ullam laboriosam architecto pariatur atque repudiandae
        sit asperiores.
      </P>
      <P size='m'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, minima!
        Quasi nobis, sint sed nulla numquam laudantium optio earum doloremque?
        Suscipit beatae ullam laboriosam architecto pariatur atque repudiandae
        sit asperiores.
      </P>
      <P size='l'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, minima!
        Quasi nobis, sint sed nulla numquam laudantium optio earum doloremque?
        Suscipit beatae ullam laboriosam architecto pariatur atque repudiandae
        sit asperiores.
      </P>
      <Tag color='red' size='s'>HH Ru</Tag>
      <Tag color='grey' size='m'>grey</Tag>
      <Tag color='green'>green</Tag>
      <Tag color='primary'>primary</Tag>
      <Tag color='ghost'>ghost</Tag>
      <Tag>ghost standart</Tag>
    </>
  );
}
