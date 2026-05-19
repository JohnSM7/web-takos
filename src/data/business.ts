// Single source of truth — Takos al Pastor (Madrid)
// Datos verificados desde fuentes públicas (Google, Tripadvisor, Yelp, web oficial).

export interface Local {
  id: string;
  nombre: string;
  direccion: string;
  ciudad: string;
  cp: string;
  pais: string;
  lat: number;
  lng: number;
  metro: string[];
  destacado?: boolean;
}

export interface PlatoCarta {
  id: string;
  nombre: string;
  descripcion: string;
  precio: string;
  tag: string;
  destacado?: boolean;
  imagen: string;
}

export interface Resena {
  autor: string;
  fecha: string;
  rating: number;
  texto: string;
  origen: 'Google' | 'Tripadvisor' | 'Yelp';
}

export const negocio = {
  nombre: 'Takos al Pastor',
  claim: '¡Auténtico como en México!',
  descripcion:
    'La taquería que enamoró a Madrid. Tacos al pastor a 1 €, marinados con achiote y cortados del trompo. Sin reservas, sin postureo, sólo fuego, masa y sabor mexicano de verdad.',
  telefono: '+34 911 23 30 41',
  email: 'hola@takosalpastor.es',
  rating: 4.5,
  resenasTotales: 13518,
  logo: '/images/logo-takos.png',
  redes: {
    instagram: 'https://www.instagram.com/takosalpastor1_oficial/',
    facebook: 'https://www.facebook.com/takosalpastormadrid/',
    tripadvisor:
      'https://www.tripadvisor.com/Restaurant_Review-g187514-d7294529-Reviews-Takos_Al_Pastor-Madrid.html',
  },
  horario: {
    legible: 'Mar – Sáb · 13:00 — 00:00',
    cerrado: 'Lunes y Domingo cerrado',
    schema: ['Tu,We,Th,Fr,Sa 13:00-24:00'],
  },
} as const;

// Un único local oficial. (Las otras direcciones que circulan en webs de terceros
// NO son sucursales de Takos al Pastor — confirmado por el cliente.)
export const locales: Local[] = [
  {
    id: 'salud',
    nombre: 'Takos al Pastor',
    direccion: 'Calle de la Salud, 13',
    ciudad: 'Madrid',
    cp: '28013',
    pais: 'España',
    lat: 40.4193,
    lng: -3.7034,
    metro: ['Gran Vía', 'Callao', 'Sol'],
    destacado: true,
  },
];

// ───── Biblioteca de imágenes reales del local ─────
// Fotos extraídas del perfil oficial de Google Maps de Takos al Pastor (C. Salud 13)
// con permiso del cliente. Resolución 1600x1200, JPG.
const LOCAL = '/images/local';

export const biblioteca = {
  fachada: {
    dia: `${LOCAL}/fachada-dia.jpg`,
    nocheCola: `${LOCAL}/fachada-noche-cola.jpg`,
    colaEsquina: `${LOCAL}/fachada-cola-esquina.jpg`,
    colaFamilias: `${LOCAL}/fachada-cola-familias.jpg`,
  },
  // Local NUEVO (el grande, con balcón, papel picado masivo, Catrinas)
  interior: {
    catrinaPapelPicado: `${LOCAL}/interior-catrina.jpg`,
    catrinaCempasuchil: `${LOCAL}/interior-catrina-cempasuchil.jpg`,
    catrinaPuertasAzul: `${LOCAL}/catrina-puertas-azul.jpg`,
    papelPicado: `${LOCAL}/interior-papel-picado.jpg`,
  },
  // Local antiguo (sólo referencia histórica — NO usar en la web)
  _antiguo: {
    banderaMex: `${LOCAL}/interior-bandera-mex.jpg`,
    puertasTalavera: `${LOCAL}/interior-puertas-talavera.jpg`,
    barra: `${LOCAL}/interior-barra.jpg`,
  },
  platos: {
    pastorPina: `${LOCAL}/tacos-pastor-pina.jpg`,
    variados: `${LOCAL}/tacos-variados.jpg`,
    talavera: `${LOCAL}/tacos-plato-talavera.jpg`,
    alambre: `${LOCAL}/alambre-queso.jpg`,
  },
  ambiente: {
    clienteNoche: `${LOCAL}/cliente-noche.jpg`,
    catrinaPuertas: `${LOCAL}/catrina-puertas-azul.jpg`,
  },
} as const;

export const carta: PlatoCarta[] = [
  {
    id: 'pastor',
    nombre: 'Taco al Pastor',
    descripcion:
      'El icónico. Cerdo marinado en achiote y especias durante 12 horas, cortado del trompo. Piña, cebolla, cilantro, salsa de la casa.',
    precio: '1 €',
    tag: 'El que nos hizo famosos',
    destacado: true,
    imagen: `${LOCAL}/tacos-pastor-pina.jpg`,
  },
  {
    id: 'arrachera',
    nombre: 'Taco de Arrachera',
    descripcion:
      'Falda de ternera marinada y a la plancha. Jugosa, ahumada, con tortilla de maíz recién hecha.',
    precio: '2,20 €',
    tag: 'Favorito habitual',
    imagen: `${LOCAL}/tacos-variados.jpg`,
  },
  {
    id: 'quesadilla',
    nombre: 'Quesadilla XL',
    descripcion:
      'Tortilla grande doblada y rellena hasta no poder más. Queso fundido, pastor o pollo. Cruje, hila, conquista.',
    precio: '3,50 €',
    tag: 'Para compartir (o no)',
    imagen: `${LOCAL}/tacos-plato-talavera.jpg`,
  },
  {
    id: 'alambre',
    nombre: 'Alambre Especial',
    descripcion:
      'Carne, pimiento, cebolla y queso gratinado sobre plancha caliente. Tortillas aparte para armar a tu manera.',
    precio: '8 €',
    tag: 'El más pedido en grupo',
    imagen: `${LOCAL}/alambre-queso.jpg`,
  },
  {
    id: 'cochinita',
    nombre: 'Cochinita Pibil',
    descripcion:
      'Cerdo cocinado a fuego lento en hoja de plátano. Cebolla morada encurtida. Yucatán en cada bocado.',
    precio: '1,80 €',
    tag: 'Receta del Mayab',
    imagen: `${LOCAL}/tacos-variados.jpg`,
  },
  {
    id: 'michelada',
    nombre: 'Michelada de la casa',
    descripcion:
      'Cerveza fría, lima, salsas, chamoy y escarcha de tajín. Servida en jarra grande. Frescor mexicano puro.',
    precio: '5 €',
    tag: 'Imprescindible',
    imagen: `${LOCAL}/catrina-puertas-azul.jpg`,
  },
];

export const resenas: Resena[] = [
  {
    autor: 'ikasle',
    fecha: 'Dic 2024',
    rating: 5,
    texto:
      'Los mejores tacos que he probado en Madrid y en España, impresionantes. Los precios están casi regalados.',
    origen: 'Tripadvisor',
  },
  {
    autor: 'Merike T.',
    fecha: 'Sep 2024',
    rating: 5,
    texto:
      '¡Los mejores tacos de Madrid! Sabores intensos, todo muy fresco y sabroso. Repetiremos seguro.',
    origen: 'Tripadvisor',
  },
  {
    autor: 'DonP',
    fecha: 'Ago 2025',
    rating: 5,
    texto:
      'No defraudó nada. Tacos, quesadillas, aguas de tamarindo y micheladas: todo perfecto.',
    origen: 'Tripadvisor',
  },
  {
    autor: 'F4Q',
    fecha: 'Ene 2026',
    rating: 4,
    texto:
      'La arrachera estaba espectacular. Probablemente los mejores tacos de ternera que probamos en todo nuestro viaje por España.',
    origen: 'Tripadvisor',
  },
  {
    autor: 'Mohammed H.',
    fecha: 'Dic 2024',
    rating: 5,
    texto:
      'La comida para morirse. Cada bocado mejor que el anterior. El personal súper amable, te hacen sentir como en casa.',
    origen: 'Google',
  },
  {
    autor: 'Fenerlady',
    fecha: 'Jun 2025',
    rating: 4,
    texto:
      'Los alambres son enormes y las margaritas heladas estaban deliciosas. La cola merece la pena.',
    origen: 'Tripadvisor',
  },
];

// Galería de "La fila" — sólo fachadas + interior del local NUEVO
export const galeriaCola: { src: string; alt: string }[] = [
  { src: `${LOCAL}/fachada-noche-cola.jpg`, alt: 'Cola en la puerta del local por la noche' },
  { src: `${LOCAL}/interior-catrina.jpg`, alt: 'Comedor del local con papel picado y Catrina' },
  { src: `${LOCAL}/fachada-cola-familias.jpg`, alt: 'Familias esperando en la fila de la puerta' },
  { src: `${LOCAL}/interior-papel-picado.jpg`, alt: 'Comedor con papel picado de colores' },
  { src: `${LOCAL}/fachada-cola-esquina.jpg`, alt: 'Cola en la esquina del local' },
  { src: `${LOCAL}/catrina-puertas-azul.jpg`, alt: 'Catrina y puertas talavera del comedor nuevo' },
  { src: `${LOCAL}/cliente-noche.jpg`, alt: 'Cliente sonriente saliendo del local por la noche' },
  { src: `${LOCAL}/interior-catrina-cempasuchil.jpg`, alt: 'Catrina con cempasúchil en el balcón' },
];
