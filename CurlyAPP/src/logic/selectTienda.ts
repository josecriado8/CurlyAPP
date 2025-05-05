export function getTiendaOptions(products: { store: string }[]) {
  return Array.from(new Set(products.map(p => p.store)));
}

export const tiendaPlaceholder = "Selecciona tienda";