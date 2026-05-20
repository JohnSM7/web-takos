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

export interface ItemCarta {
  nombre: string;
  precio: string;
  ingredientes: string;
  destacado?: boolean;
}

export interface CategoriaCarta {
  id: string;
  nombre: string;
  precioBase?: string;
  nota?: string;
  items: ItemCarta[];
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

// ───── BENTO destacados (carta resumida con foto) ─────
export const carta: PlatoCarta[] = [
  {
    id: 'pastor',
    nombre: 'Taco al Pastor',
    descripcion:
      'Lomo de cerdo marinado al pastor 12 h en achiote. Servido con cebolla, cilantro y piña.',
    precio: '1 €',
    tag: 'El que nos hizo famosos',
    destacado: true,
    imagen: `${LOCAL}/tacos-pastor-pina.jpg`,
  },
  {
    id: 'arrachera',
    nombre: 'Taco de Arrachera',
    descripcion:
      'El mejor corte de carne de ternera marinada, servido con cebolla. Jugoso, ahumado.',
    precio: '1,5 €',
    tag: 'Favorito habitual',
    imagen: `${LOCAL}/tacos-variados.jpg`,
  },
  {
    id: 'gringa',
    nombre: 'Gringa de Pastor',
    descripcion:
      'Quesadilla rebosante con carne al pastor y queso fundido. Cruje, hila, conquista.',
    precio: '4 €',
    tag: 'Para no compartir',
    imagen: `${LOCAL}/tacos-plato-talavera.jpg`,
  },
  {
    id: 'alambre',
    nombre: 'Alambre Mexicano',
    descripcion:
      'Bistec, nopal, cebolla, queso y aguacate sobre plancha. Tortillas aparte para armar.',
    precio: '8 €',
    tag: 'Para grupo',
    imagen: `${LOCAL}/alambre-queso.jpg`,
  },
  {
    id: 'cochinita',
    nombre: 'Cochinita Pibil',
    descripcion:
      'Cerdo adobado en achiote. Cebolla morada encurtida. Yucatán en cada bocado.',
    precio: '1,2 €',
    tag: 'Receta del Mayab',
    imagen: `${LOCAL}/tacos-variados.jpg`,
  },
  {
    id: 'michelada',
    nombre: 'Michelada de la casa',
    descripcion:
      'Cerveza fría, lima, chamoy y escarcha de tajín en jarra grande. Frescor mexicano.',
    precio: '5 €',
    tag: 'Imprescindible',
    imagen: `${LOCAL}/catrina-puertas-azul.jpg`,
  },
];

// ───── CARTA COMPLETA — Datos reales del menú del local ─────
export const cartaCompleta: CategoriaCarta[] = [
  {
    id: 'takos',
    nombre: 'Takos',
    nota: 'Tortilla de maíz, cebolla, cilantro y salsa de la casa.',
    items: [
      { nombre: 'Pastor', precio: '1 €', ingredientes: 'Lomo de cerdo marinado al pastor con cebolla, cilantro y piña', destacado: true },
      { nombre: 'Suadero', precio: '1,5 €', ingredientes: 'Tierna carne de ternera con cebolla y cilantro' },
      { nombre: 'Cochinita Pibil', precio: '1,2 €', ingredientes: 'Cerdo adobado en achiote con cebolla morada' },
      { nombre: 'Tinga de Pollo', precio: '1,2 €', ingredientes: 'Pollo deshebrado con chile chipotle' },
      { nombre: 'Nopal con Queso', precio: '1,2 €', ingredientes: 'Vegetal típico mexicano (cactus) con queso' },
      { nombre: 'Arrachera', precio: '1,5 €', ingredientes: 'El mejor corte de ternera marinada con cebolla' },
    ],
  },
  {
    id: 'alambres',
    nombre: 'Alambres',
    precioBase: '8 €',
    nota: 'Plancha caliente con tortillas aparte. + 1 € por ingrediente extra.',
    items: [
      { nombre: 'Sabores', precio: '8 €', ingredientes: 'Pastor, bistec, bacon, chorizo y queso' },
      { nombre: 'Morelos', precio: '8 €', ingredientes: 'Pastor, bistec, piña, queso y bacon' },
      { nombre: 'Ballena', precio: '8 €', ingredientes: 'Pastor, pimiento, champiñón, cebolla y queso' },
      { nombre: 'Sarape', precio: '8 €', ingredientes: 'Bistec, chorizo, pimiento, tomate y queso' },
      { nombre: 'Mexicano', precio: '8 €', ingredientes: 'Bistec, nopal, cebolla, queso y aguacate', destacado: true },
      { nombre: 'Combinado', precio: '8 €', ingredientes: 'Pastor, bistec, cebolla, pimiento y queso' },
      { nombre: 'Vegetariano', precio: '8 €', ingredientes: 'Pimiento, champiñón, cebolla, nopal, aguacate y queso' },
      { nombre: 'Arrachero', precio: '8 €', ingredientes: 'Arrachera, pimiento, cebolla y queso' },
    ],
  },
  {
    id: 'quesadillas',
    nombre: 'Quesadillas',
    nota: 'Tortilla doblada y dorada en plancha. + 0,5 € por ingrediente extra.',
    items: [
      { nombre: 'Gringa', precio: '4 €', ingredientes: 'Pastor y queso', destacado: true },
      { nombre: 'Bistec', precio: '3,5 €', ingredientes: 'Bistec y queso' },
      { nombre: 'Arrachera', precio: '4 €', ingredientes: 'Arrachera y queso' },
      { nombre: 'Vegetariana', precio: '3,5 €', ingredientes: 'Pimiento, champiñón, cebolla, nopal y queso' },
      { nombre: 'Sincronizada Especial', precio: '3,5 €', ingredientes: 'Bistec, champiñón, piña y queso' },
      { nombre: 'Sincronizada', precio: '3,5 €', ingredientes: 'Jamón y queso' },
      { nombre: 'Quesadilla', precio: '3 €', ingredientes: 'Solo queso fundido' },
    ],
  },
  {
    id: 'tortas',
    nombre: 'Tortas',
    nota: 'Pan torta con lechuga, tomate, aguacate y mayonesa. + 1 € por ingrediente extra.',
    items: [
      { nombre: 'Pastor', precio: '6,5 €', ingredientes: 'Carne al pastor con queso', destacado: true },
      { nombre: 'Bistec', precio: '6,5 €', ingredientes: 'Bistec de ternera con queso' },
      { nombre: 'Chorizo', precio: '6 €', ingredientes: 'Chorizo con queso' },
      { nombre: 'Arrachera', precio: '7 €', ingredientes: 'Arrachera con queso' },
      { nombre: 'Campechana', precio: '7 €', ingredientes: 'Pastor, bistec, chorizo y queso' },
    ],
  },
];

export const cartaExtras: { nombre: string; precio: string }[] = [
  { nombre: 'Queso', precio: '0,5 €' },
  { nombre: 'Vegetal (piña, cebolla)', precio: '0,5 €' },
  { nombre: 'Guisado', precio: '1 €' },
  { nombre: 'Aguacate', precio: '1 €' },
  { nombre: 'Arrachera', precio: '1,5 €' },
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
