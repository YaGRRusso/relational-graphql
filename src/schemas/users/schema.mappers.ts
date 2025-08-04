type Status = 'ACTIVE' | 'INACTIVE';

export interface UserMapper {
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
}
