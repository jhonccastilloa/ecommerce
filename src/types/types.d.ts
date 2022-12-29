export interface Product {
  id: number;
  title: string;
  description: string;
  category: Category;
  price: string;
  status: string;
  user: User;
  productImgs: string[];
}

interface Category {
  id: number;
  name: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: null;
}

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
  status: string;
  by: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: null;
}


export interface ProductID {
  id:          number;
  title:       string;
  description: string;
  price:       string;
  status:      string;
  user:        User;
  category:    string;
  productImgs: string[];
}

