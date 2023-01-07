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
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt: null;
}

export interface ProductID {
  id: number;
  title: string;
  description: string;
  price: string;
  status: string;
  user: User;
  category: string;
  productImgs: string[];
}

export interface Cart {
  id: number;
  userId: number;
  title: string;
  description: string;
  brand: string;
  price: string;
  quantity: number;
  categoryId: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: null;
  productsInCart: ProductsInCart;
}

export interface ProductsInCart {
  id: number;
  cartId: number;
  productId: number;
  quantity: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Category {
  id: number;
  name: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: null;
}
interface InputPrice {
  from: number;
  to: number;
}

export interface Purchase {
  id: number;
  userId: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: null;
  cart: CartByUser;
}

export interface CartByUser {
  id: number;
  userId: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: null;
  products: ProductByUser[];
}
export interface ProductByUser {
  id: number;
  userId: number;
  title: string;
  description: string;
  brand: string;
  price: string;
  quantity: number;
  categoryId: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: null;
  productsInCart: ProductsInCart;
}

export interface ShowFilters{
  showFilterOptions: boolean,
  showFilterSearch: boolean,
}
