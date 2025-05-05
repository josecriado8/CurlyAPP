export function getCategoriaOptions(products: { category: string }[]) {
  return Array.from(new Set(products.map(p => p.category)));
}

export const categoriaPlaceholder = "Selecciona tipo de producto";