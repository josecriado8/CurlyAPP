export interface Product {
    id: number;
    name: string;
    category: string;
    store: string;
    price: string;
    methodCurlyApproved: boolean;
    ingredientsId: number;
    image: string;
    url?: string;
    description?: string;
  }
  
export const primorProducts: Product[] = [
    
{
    id: 39,
    name: "Redken",
    category: "Productos para pelo rizado",
    store: "Primor",
    price: "21,33 €",
    methodCurlyApproved: false,
    ingredientsId: 39,
    image: "https://cdn2.primor.eu/media/catalog/product/cache/8d3aba296f7a18b5251ee30fa5db42b2/3/4/3474637135638_preview_rev_1_2f85.png",
    url: "https://www.primor.eu/es_es/redken-all-soft-mega-curls-tratamiento-para-rizos-77784.html",
    description: "Redken All Soft Mega Curls Tratamiento Sin Aclarado para RizosGel hidratante para rizos sin aclarado. Rizos más brillantes y definidos. Extra de suavidad e hidr... Ver más"
  },
  {
    id: 40,
    name: "Giorgi",
    category: "Productos para pelo rizado",
    store: "Primor",
    price: "11,94 €",
    methodCurlyApproved: false,
    ingredientsId: 40,
    image: "https://cdn2.primor.eu/media/catalog/product/cache/8d3aba296f7a18b5251ee30fa5db42b2/2/C/2CC04572_1_a382.jpg",
    url: "https://www.primor.eu/es_es/giorgi-kit-iniciacion-al-metodo-curly-11043.html",
    description: "El método Curly es una innovadora rutina para el cabello rizado que consiste en aportar la máximia nutrición para evitar el encrespamiento.Para conseguir ... Ver más"
  },
  {
    id: 41,
    name: "Nelly",
    category: "Productos para pelo rizado",
    store: "Primor",
    price: "3,25 €",
    methodCurlyApproved: false,
    ingredientsId: 41,
    image: "https://cdn2.primor.eu/media/catalog/product/cache/8d3aba296f7a18b5251ee30fa5db42b2/4/_/4_SPRAY_Curly_5e72.png",
    url: "https://www.primor.eu/es_es/nelly-spray-fijador-de-rizos-curly-method-94066.html",
    description: "NELLY Spray Fijador de Rizos Curly Method NELLY Spray Fijador de Rizos Curly Method es el producto perfecto para definir y mantener tus rizos con un aspect... Ver más"
  },
  {
    id: 42,
    name: "Giorgi",
    category: "Champús",
    store: "Primor",
    price: "12,99 €",
    methodCurlyApproved: false,
    ingredientsId: 42,
    image: "https://cdn2.primor.eu/media/catalog/product/cache/8d3aba296f7a18b5251ee30fa5db42b2/2/C/2CL00345_1_49ba.jpg",
    url: "https://www.primor.eu/es_es/giorgi-neceser-metodo-curly-3-pasos-91599.html",
    description: "GIORGI Neceser Método Curly 3 Pasos- Champú suave: Hidratación y cuidado natural.- Mascarilla nutritiva: Nutre y repara.- Gel Definidor: Define y reactiva. Ver más"
  },
  {
    id: 43,
    name: "Cantu",
    category: "Productos de peinado",
    store: "Primor",
    price: "6,98 €",
    methodCurlyApproved: false,
    ingredientsId: 43,
    image: "https://cdn2.primor.eu/media/catalog/product/cache/8d3aba296f7a18b5251ee30fa5db42b2/1/_/1_e61b.JPG",
    url: "http://primor.eu/es_es/cantu-shea-butter-natural-hair-moisturizing-activador-de-rizos-10776.html",
    description: "Cantu Shea Butter Natural Hair Moisturizing Activador de RizosCrema activadora de rizos. Restaura e hidrata tu cabello evitando el encrespamiento.For... Ver más"
  },
  {
    id: 44,
    name: "Giorgi",
    category: "Productos para pelo rizado",
    store: "Primor",
    price: "4,75 €",
    methodCurlyApproved: false,
    ingredientsId: 44,
    image: "https://cdn2.primor.eu/media/catalog/product/cache/8d3aba296f7a18b5251ee30fa5db42b2/2/C/2CA04900_1_ac6a.jpg",
    url: "https://www.primor.eu/es_es/giorgi-mascarilla-nutritiva-curly-11041.html",
    description: "El método Curly es una innovadora rutina para el cabello rizado que consiste en aportar la máximia nutrición para evitar el encrespamiento.Para conseguir ... Ver más"
  },
  {
    id: 45,
    name: "Giorgi",
    category: "Productos para pelo rizado",
    store: "Primor",
    price: "4,75 €",
    methodCurlyApproved: false,
    ingredientsId: 45,
    image: "https://cdn2.primor.eu/media/catalog/product/cache/8d3aba296f7a18b5251ee30fa5db42b2/2/C/2CF00906_1_87dc.jpg",
    url: "https://www.primor.eu/es_es/giorgi-gel-definidor-metodo-curly-11044.html",
    description: "El método Curly es una innovadora rutina para el cabello rizado que consiste en aportar la máximia nutrición para evitar el encrespamiento.Para conseguir ... Ver más"
  },
  {
    id: 46,
    name: "Nelly",
    category: "Productos para pelo rizado",
    store: "Primor",
    price: "3,75 €",
    methodCurlyApproved: false,
    ingredientsId: 46,
    image: "https://cdn2.primor.eu/media/catalog/product/cache/8d3aba296f7a18b5251ee30fa5db42b2/3/_/3_Gel_Curly_327b.png",
    url: "https://www.primor.eu/es_es/nelly-gel-activador-de-rizos-curly-method-94067.html",
    description: "NELLY Gel Activador de Rizos Curly MethodNELLY Gel Activador de Rizos Curly Method es el producto ideal para definir y cuidar tus rizos. Con una fórmula en... Ver más"
  },
  {
    id: 47,
    name: "Pis Pás",
    category: "Champús en seco",
    store: "Primor",
    price: "1,99 €",
    methodCurlyApproved: false,
    ingredientsId: 47,
    image: "https://cdn2.primor.eu/media/catalog/product/cache/8d3aba296f7a18b5251ee30fa5db42b2/A/T/ATPP003_8436566319010_5f2d.png",
    url: "https://www.primor.eu/es_es/pis-pas-champu-en-seco-curly-119370.html",
    description: "PIS PÁS Champú en Seco CurlyPIS PÁS Champú en Seco Curly es la solución ideal para mantener el cabello rizado limpio y definido entre lavados. Diseñado especial... Ver más"
  },
  {
    id: 48,
    name: "Giorgi",
    category: "Champús",
    store: "Primor",
    price: "4,24 €",
    methodCurlyApproved: false,
    ingredientsId: 48,
    image: "https://cdn2.primor.eu/media/catalog/product/cache/8d3aba296f7a18b5251ee30fa5db42b2/2/C/2CC04571_1_7d05.jpg",
    url: "https://www.primor.eu/es_es/giorgi-champu-curly-10968.html",
    description: "El método Curly es una innovadora rutina para el cabello rizado que consiste en aportar la máximia nutrición para evitar el encrespamiento.Para conseguir ... Ver más"
  },
  {
    id: 49,
    name: "Wella Professionals",
    category: "Acondicionadores método curly",
    store: "Primor",
    price: "14,44 €",
    methodCurlyApproved: false,
    ingredientsId: 49,
    image: "https://cdn2.primor.eu/media/catalog/product/cache/8d3aba296f7a18b5251ee30fa5db42b2/2/C/2CA03618_1_5d99.jpg",
    url: "https://www.primor.eu/es_es/wella-nutricurls-acondicionador-milky-waves-9719.html",
    description: "Define tus rizos y ondas con el Spray Nutricurls Milky Waves de Wella Professionals, un spray sin aclarado que proporciona una nutrición ligera. Enriquecido con... Ver más"
  },
  {
    id: 50,
    name: "Be Natural",
    category: "Acondicionadores método curly",
    store: "Primor",
    price: "4,68 €",
    methodCurlyApproved: false,
    ingredientsId: 50,
    image: "https://cdn2.primor.eu/media/catalog/product/cache/8d3aba296f7a18b5251ee30fa5db42b2/2/C/2CA03765_1_6ff0.jpg",
    url: "https://www.primor.eu/es_es/be-natural-acondicionador-curly-monoi-8380.html",
    description: "BE NATURAL Acondicionador Curly Monoi Acondicionador especialmente pensado en tus rizos y ondas. Ideal para lucir una melena perfecta y con ondas definidas gr... Ver más"
  },
  {
    id: 51,
    name: "Curly Love",
    category: "Acondicionadores",
    store: "Primor",
    price: "Tan bajo como:                \n                \n                    7,98 €",
    methodCurlyApproved: false,
    ingredientsId: 51,
    image: "https://cdn2.primor.eu/media/catalog/product/cache/8d3aba296f7a18b5251ee30fa5db42b2/C/a/Captura_____ccc8.PNG",
    url: "https://www.primor.eu/es_es/curly-love-acondicionador-hidratante-105510.html",
    description: "CURLY LOVE Acondicionador Hidratante Acondicionador hidratante con miel, papaya y aceite de babassu de Curly Love.Acondicionador ideal para cabello rizado ... Ver más"
  },
  {
    id: 52,
    name: "Cantu",
    category: "Productos de peinado",
    store: "Primor",
    price: "5,99 €",
    methodCurlyApproved: false,
    ingredientsId: 52,
    image: "https://cdn2.primor.eu/media/catalog/product/cache/8d3aba296f7a18b5251ee30fa5db42b2/2/C/2CA04755_1_2458.jpg",
    url: "https://www.primor.eu/es_es/cantu-shea-butter-natural-hair-coconut-oil-spray-hidratante-10777.html",
    description: "Cantu Shea Butter Natural Hair Coconut Oil Spray HidratanteSpray con aceite de coco y manteca de karité.Te ayudará a refrescar tus rizos y controlar el frizz ap... Ver más"
  },
  {
    id: 53,
    name: "Cantu",
    category: "Acondicionadores sin siliconas",
    store: "Primor",
    price: "4,98 €",
    methodCurlyApproved: false,
    ingredientsId: 53,
    image: "https://cdn2.primor.eu/media/catalog/product/cache/8d3aba296f7a18b5251ee30fa5db42b2/2/C/2CA04756_1_558f.jpg",
    url: "https://www.primor.eu/es_es/cantu-shea-butter-natural-hair-acondicionador-con-aclarado-10778.html",
    description: "Cantu Shea Butter Natural Hair Hydrating Cream ConditionerAcondicionador con aclarado para el cabello.Ayuda al cuidado de tu cabello manteniéndolo hidratado y b... Ver más"
  },
  {
    id: 54,
    name: "Cantu",
    category: "Acondicionadores sin siliconas",
    store: "Primor",
    price: "7,95 €",
    methodCurlyApproved: false,
    ingredientsId: 54,
    image: "https://cdn2.primor.eu/media/catalog/product/cache/8d3aba296f7a18b5251ee30fa5db42b2/2/C/2CA04355_1_a41c.jpg",
    url: "https://www.primor.eu/es_es/cantu-flaxseed-smoothing-acondicionador-con-o-sin-aclarado-10781.html",
    description: "Cantu Flaxseed Smoothing Acondicionador Leave In Or Rinse OutAcondicionador indicado para pelo seco y maltratado.Puedes usarlo como un acondicionador tradiciona... Ver más"
  },
  {
    id: 55,
    name: "Cantu",
    category: "Acondicionadores sin siliconas",
    store: "Primor",
    price: "4,59 €",
    methodCurlyApproved: false,
    ingredientsId: 55,
    image: "https://cdn2.primor.eu/media/catalog/product/cache/8d3aba296f7a18b5251ee30fa5db42b2/2/C/2CA04780_1_2e66.jpg",
    url: "https://www.primor.eu/es_es/cantu-for-kids-acondicionador-nutritivo-10889.html",
    description: "Cantu For Kids Acondicionador NutritivoAcondicinonador nutritivo suave.Contiene manteca de karité 100% pura, aceite de coco y miel. Nutre y cuida los rizos deli... Ver más"
  },
  {
    id: 56,
    name: "Nelly",
    category: "Mascarillas para el pelo",
    store: "Primor",
    price: "3,75 €",
    methodCurlyApproved: false,
    ingredientsId: 56,
    image: "https://cdn2.primor.eu/media/catalog/product/cache/8d3aba296f7a18b5251ee30fa5db42b2/2/_/2_Mask_Curly_e86a.png",
    url: "https://www.primor.eu/es_es/nelly-mascarilla-rizos-curly-method-94063.html",
    description: "NELLY Mascarilla Rizos Curly Method NELLY Mascarilla Rizos Curly Method es el aliado perfecto para mantener tus rizos suaves, definidos y libres de encresp... Ver más"
  },
  {
    id: 57,
    name: "Nelly",
    category: "Champús",
    store: "Primor",
    price: "3,25 €",
    methodCurlyApproved: false,
    ingredientsId: 57,
    image: "https://cdn2.primor.eu/media/catalog/product/cache/8d3aba296f7a18b5251ee30fa5db42b2/1/_/1_CH_Curly_b7eb.png",
    url: "https://www.primor.eu/es_es/nelly-champu-rizos-curly-method-94065.html",
    description: "NELLY Champú Rizos Curly MethodNELLY Champú Rizos Curly Method es el producto ideal para el cuidado de tu cabello rizado. Este champú rizos de NELLY es sua... Ver más"
  },
  {
    id: 58,
    name: "Kerastase",
    category: "Acondicionadores método curly",
    store: "Primor",
    price: "29,94 €",
    methodCurlyApproved: false,
    ingredientsId: 58,
    image: "https://cdn2.primor.eu/media/catalog/product/cache/8d3aba296f7a18b5251ee30fa5db42b2/2/C/2CC04009_1_89a1.jpg",
    url: "https://www.primor.eu/es_es/kerastase-curl-manifesto-acondicionador-fondant-hydratation-essentielle-10146.html",
    description: "KÉRASTASE Curl Manifesto Acondicionador Fondant Hydratation Essentielle Tratamiento hidratante diario para reducir el encrespamiento. Sin aclarado. Infundido co... Ver más"
  },
  {
    id: 59,
    name: "Cantu",
    category: "Champús",
    store: "Primor",
    price: "5,95 €",
    methodCurlyApproved: false,
    ingredientsId: 59,
    image: "https://cdn2.primor.eu/media/catalog/product/cache/8d3aba296f7a18b5251ee30fa5db42b2/2/C/2CC04481_1_8e3a.jpg",
    url: "https://www.primor.eu/es_es/cantu-for-kids-champu-nutritivo-10887.html",
    description: "Cantu For Kids Champú NutritivoChampú nutritivo de limpieza delicada.Contiene manteca de karité 100% pura, aceite de coco y miel. Nutre y cuida los rizos delica... Ver más"
  },
  {
    id: 60,
    name: "Lola Cosmetics",
    category: "Cremas de peinado",
    store: "Primor",
    price: "12,95 €",
    methodCurlyApproved: false,
    ingredientsId: 60,
    image: "https://cdn2.primor.eu/media/catalog/product/cache/8d3aba296f7a18b5251ee30fa5db42b2/2/C/2CN00910_1_e8b7.jpg",
    url: "https://www.primor.eu/es_es/lola-cosmetics-ondulados-lola-inc-crema-definidora-10951.html",
    description: "Lola Cosmetics Ondulados Lola Inc Crema DefinidoraCrema de peinado para cabello ondulado.Ofrece ondas hidratadas y definidas gracias a su fórmula con extraco de... Ver más"
  },
  {
    id: 61,
    name: "Curly Love",
    category: "Productos de peinado",
    store: "Primor",
    price: "Tan bajo como:                \n                \n                    9,98 €",
    methodCurlyApproved: false,
    ingredientsId: 61,
    image: "https://cdn2.primor.eu/media/catalog/product/cache/8d3aba296f7a18b5251ee30fa5db42b2/C/a/Capturacream_a2f3.PNG",
    url: "https://www.primor.eu/es_es/curly-love-crema-definidora-de-rizos-105811.html",
    description: "CURLY LOVE Crema Definidora de RizosCrema de peinado para definir rizos, de textura suave y cremosa que dejará los rizos y ondas definidos y brillantes. Define ... Ver más"
  },
  {
    id: 62,
    name: "Curly Love",
    category: "Lacas y fijadores",
    store: "Primor",
    price: "Tan bajo como:                \n                \n                    9,98 €",
    methodCurlyApproved: false,
    ingredientsId: 62,
    image: "https://cdn2.primor.eu/media/catalog/product/cache/8d3aba296f7a18b5251ee30fa5db42b2/C/a/Captura666_33a2.PNG",
    url: "https://www.primor.eu/es_es/curly-love-gel-estabilizador-de-rizos-105812.html",
    description: "CURLY LOVE Gel Estabilizador de RizosCurly Love Curl Styling Gel con Agave e Hibiscus, hidrata y protege mientras reduce el encrespamiento. Libre de sulfatos, s... Ver más"
  }
];