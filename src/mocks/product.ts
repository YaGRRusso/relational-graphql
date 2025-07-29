export type Product = {
  id: string;
  name: string;
  discount?: number;
  price: number;
};

export const products: Product[] = [
  {
    id: '1',
    name: 'Laptop',
    discount: 10,
    price: 1000,
  },
  {
    id: '2',
    name: 'Smartphone',
    price: 500,
  },
  {
    id: '3',
    name: 'Tablet',
    discount: 5,
    price: 300,
  },
  {
    id: '4',
    name: 'Smartwatch',
    price: 200,
  },
  {
    id: '5',
    name: 'Headphones',
    discount: 15,
    price: 100,
  },
];
