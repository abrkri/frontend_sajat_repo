export type UserReport = {
  id?: number;
  user_id: number;
  title: string;
  description: string;
  status: string;
  street: string;
  house_number: number;
  img_path: string;
  department_id?: number;
  created_at?: Date;
  updated_at?: Date;
};
