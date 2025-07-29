type Status = 'ACTIVE' | 'INACTIVE';

export type User = {
  id: string;
  name: string;
  email: string;
  age: number;
  wage: number;
  admin: boolean;
  created_at: Date;
  updated_at: Date;
  products_ids?: string[];
  status: Status;
};

export const users: User[] = [
  {
    id: '1',
    name: 'Alice',
    email: 'alice@example.com',
    age: 30,
    wage: 2000,
    admin: true,
    created_at: new Date(),
    updated_at: new Date(),
    products_ids: ['1', '2', '3'],
    status: 'ACTIVE',
  },
  {
    id: '2',
    name: 'Bob',
    email: 'bob@example.com',
    age: 25,
    wage: 3000,
    admin: false,
    created_at: new Date(),
    updated_at: new Date(),
    products_ids: ['2', '4'],
    status: 'INACTIVE',
  },
  {
    id: '3',
    name: 'Charlie',
    email: 'charlie@example.com',
    age: 35,
    wage: 2500,
    admin: true,
    created_at: new Date(),
    updated_at: new Date(),
    products_ids: ['1', '3', '5'],
    status: 'ACTIVE',
  },
];
