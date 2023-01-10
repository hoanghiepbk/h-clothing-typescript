import { Key } from 'react';

import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer } from './directory.styles';

import hat from '../../assets/img/hats.png'
import jackets from '../../assets/img/jackets.png'
import men from '../../assets/img/men.png'
import sneakers from '../../assets/img/sneakers.png'
import womens from '../../assets/img/womens.png'

export type DirectoryCategory = {
  id: Key;
  title: string;
  imageUrl: string;
  route: string;
};

const categories: DirectoryCategory[] = [
  {
    id: 1,
    title: 'hats',
    imageUrl: hat,
    route: 'shop/hats',
  },
  {
    id: 2,
    title: 'jackets',
    imageUrl: jackets,
    route: 'shop/jackets',
  },
  {
    id: 3,
    title: 'sneakers',
    imageUrl: sneakers,
    route: 'shop/sneakers',
  },
  {
    id: 4,
    title: 'womens',
    imageUrl: womens,
    route: 'shop/womens',
  },
  {
    id: 5,
    title: 'mens',
    imageUrl: men,
    route: 'shop/mens',
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
