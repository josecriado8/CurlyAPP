import { Product } from "../types/Product";

export function filterProducts(products: Product[], search: string, category: string, store: string) {
  return products.filter(p =>
    (!category || p.category === category) &&
    (!store || p.store === store) &&
    (!search || p.name.toLowerCase().includes(search.toLowerCase()))
  );
}