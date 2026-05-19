# 🌮 Takos al Pastor · Landing Page

Landing page disruptiva para [Takos al Pastor](https://takos-al-pastor.site/), la taquería mexicana más famosa de Madrid Centro.

**Stack:** Astro 4 · Tailwind CSS · TypeScript · Leaflet + OpenStreetMap · Motion One.

---

## 🚀 Comandos

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev        # → http://localhost:4321

# Build de producción
npm run build

# Preview del build
npm run preview
```

## 🗂️ Estructura

```
src/
├── components/
│   ├── NavCantina.astro          # Nav fija con mix-blend-mode
│   ├── HeroDisruptivo.astro      # Hero con tipografía recortada + humo
│   ├── Marquee.astro             # Tira infinita
│   ├── ManifiestoUnEuro.astro    # "1€" monumental líquido
│   ├── BentoCarta.astro          # Bento asimétrico de la carta
│   ├── ExperienciaCola.astro     # Scroll horizontal de la fila
│   ├── ResenasFlotantes.astro    # Reseñas reales con física suave
│   ├── NoReservas.astro          # Anti-CTA naranja brutal
│   ├── MapaOSM.astro             # OpenStreetMap + Leaflet, pin custom
│   └── FooterCantina.astro
├── data/business.ts              # Single source of truth (carta, locales, reseñas)
├── layouts/Layout.astro          # SEO + Open Graph + JSON-LD Restaurant
├── pages/index.astro
└── styles/global.css             # Tokens, animaciones, scroll-driven
```

## 🎨 Sistema de diseño

| Token | HEX |
|---|---|
| Carbón | `#0B0A08` |
| Humo | `#1C1815` |
| Adobo profundo | `#7A1F12` |
| Ember (fuego) | `#FF5A1F` |
| Achiote (oro) | `#E8A53A` |
| Masa (crema) | `#F2E6CF` |
| Cilantro | `#9CC23B` |

**Fuentes:** Bricolage Grotesque (display) · Caveat (manuscrita) · Inter (cuerpo) · Space Mono (etiquetas).

## ✨ Efectos "wow"

- **Theming dinámico por scroll** — variable CSS `--bg-now` interpolada por IntersectionObserver entre secciones.
- **Tipografía líquida SVG** (`feTurbulence` + `feDisplacementMap`) sobre los titulares monumentales.
- **Scroll-driven animations nativas** (`animation-timeline: view()`) con fallback para navegadores sin soporte.
- **Cursor magnético** en CTAs y cards (`[data-magnetic]`).
- **Bento spotlight** — gradient radial que sigue al cursor por cada tarjeta de la carta.
- **Mapa OSM en modo oscuro** con filtros CSS sobre los tiles + marcador custom con halo del logo.
- **JSON-LD Restaurant Schema** con horarios reales, rating agregado y aggregateRating de 13.518 reseñas reales.

## 📍 Datos del negocio

Los datos del negocio (carta, precios, horarios, locales) se editan en `src/data/business.ts`.

Locales actualmente mapeados:
- C. de la Salud, 13 (principal)
- C. de la Abada, 2
- C. Botoneras, 7 (Plaza Mayor)

## 🖼️ Imágenes

Las imágenes referenciadas son URLs públicas de Unsplash (CC0, libres de uso comercial) como placeholders fotorrealistas. Para reemplazar por las imágenes reales del local:

1. Colocar archivos en `/public/images/`
2. Actualizar las URLs en `src/data/business.ts` (campo `imagen` en `carta` y `galeriaCola`)
3. Cambiar las URLs hardcoded en `HeroDisruptivo.astro` (`heroFire`, `heroVideoPoster`)

## 🚢 Deploy

Compatible 1:1 con:
- **Vercel** → `vercel --prod`
- **Netlify** → arrastrar `dist/` o conectar repo
- **Firebase Hosting** → `firebase deploy --only hosting`

Build genera `dist/` totalmente estático (SSG). No requiere servidor.
