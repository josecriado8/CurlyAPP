export type Product = {
  id: number;
  name: string;
  category: string;
  store: string;
  image?: string;
  [key: string]: any;
};