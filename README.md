# CurlyAPP

CurlyAPP es una aplicación web desarrollada con **React** y **TypeScript** que te permite consultar los principales productos recomendados para el método Curly, disponibles en las tiendas **Druni** y **Primor**.

## Características

- Listado de productos aptos y no aptos para el método Curly.
- Información detallada de cada producto: nombre, imagen, descripción, precio, tienda y enlace de compra.
- Filtros por tienda y categoría.
- Interfaz rápida y moderna gracias a Vite.

## Backend

La aplicación se conecta a una API sencilla creada con **Bun** (`Bun.serve`).  
Los productos y sus ingredientes están hardcodeados en archivos TypeScript y se exponen mediante endpoints REST.

### Endpoints principales

- `/products` – Devuelve el listado de productos.
- `/productIngredients` – Devuelve los ingredientes de cada producto.

## Instalación y uso

1. **Clona el repositorio**
2. **Instala dependencias**  
   ```bash
   bun install
   ```
3. **Inicia la API**  
   ```bash
   bun run index.ts
   ```
4. **Inicia la app React**  
   ```bash
   bun run dev
   ```
   O si prefieres usar npm:
   ```bash
   npm install
   npm run dev
   ```

## Tecnologías utilizadas

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Bun](https://bun.sh/)

---

# apicurly

Para instalar las dependencias:

```bash
bun install
```

Para ejecutar:

```bash
bun run index.ts
```

Este proyecto fue creado usando `bun init` en bun v1.2.11. [Bun](https://bun.sh) es un entorno de ejecución JavaScript rápido y todo en uno.

---

¡Explora y encuentra los mejores productos para tu rutina Curly!
