import { products } from "./Products/products";
import { ingredients } from "./productIngredients"; 

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type"
};

const server = Bun.serve({
  port: 3000,
  fetch(req) {
    const url = new URL(req.url);
    const pathname = url.pathname;

    if (req.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    if (pathname === "/") {
      return new Response("API Curly", { status: 200, headers: corsHeaders });
    }

    if (pathname === "/products") {
      return Response.json(products, { headers: corsHeaders });
    }

    if (pathname === "/productIngredients") {
      return Response.json(ingredients, { headers: corsHeaders });
    }

    return new Response("Not Found", { status: 404, headers: corsHeaders });
  }
});
