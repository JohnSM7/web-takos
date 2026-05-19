/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // ───── Paleta REAL del logo del local ─────
        chile: '#DC2626',        // Rojo tomate/chile — el texto "TAKOS"
        chileDeep: '#A11414',    // Rojo profundo del adobo
        jade: '#2D9B6B',         // Verde mexicano del medallón
        jadeDeep: '#1F6E4A',     // Verde profundo de hoja
        achiote: '#E87A2C',      // Naranja achiote del fondo del logo
        achioteDeep: '#B65512',  // Naranja quemado / mole
        crema: '#FAF6EC',        // Crema masa (más cálida que blanco)
        amarillo: '#F2D785',     // Amarillo loteria del rosetón
        talavera: '#4FC3F7',     // Azul talavera de Puebla
        mole: '#3D1F11',         // Marrón mole poblano
        noche: '#0B0908',        // Negro outline tipo cómic
        cilantro: '#9CC23B',     // Acentos verde lima
      },
      fontFamily: {
        // ───── Mercado Pop: chunky + editorial ─────
        display: ['"Archivo Black"', 'system-ui', 'sans-serif'],   // Display chunky, limpio
        serif: ['"Fraunces"', 'Georgia', 'serif'],                  // Serif variable italic — el alma editorial
        body: ['"Fraunces"', 'Georgia', 'serif'],                  // Cuerpo serif contemporáneo
        hand: ['"Caveat"', 'cursive'],                              // Manuscrito puntual
        mono: ['"Space Mono"', 'ui-monospace', 'monospace'],       // Etiquetas técnicas
      },
      animation: {
        'smoke-rise': 'smoke-rise 9s ease-in-out infinite',
        'flame': 'flame 2.4s ease-in-out infinite',
        'marquee': 'marquee 28s linear infinite',
        'marquee-reverse': 'marquee-reverse 32s linear infinite',
        'spin-slow': 'spin 24s linear infinite',
        'float-y': 'float-y 6s ease-in-out infinite',
        'wobble': 'wobble 3.4s ease-in-out infinite',
        'stamp': 'stamp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      keyframes: {
        'smoke-rise': {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)', opacity: '0.55' },
          '50%': { transform: 'translate3d(-2%,-3%,0) scale(1.06)', opacity: '0.85' },
        },
        flame: {
          '0%, 100%': { transform: 'scaleY(1) scaleX(1)', filter: 'hue-rotate(0deg)' },
          '50%': { transform: 'scaleY(1.04) scaleX(0.97)', filter: 'hue-rotate(-10deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'float-y': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        wobble: {
          '0%, 100%': { transform: 'rotate(-1.5deg)' },
          '50%': { transform: 'rotate(1.5deg)' },
        },
        stamp: {
          '0%': { transform: 'scale(0) rotate(-20deg)', opacity: '0' },
          '60%': { transform: 'scale(1.1) rotate(2deg)', opacity: '1' },
          '100%': { transform: 'scale(1) rotate(-4deg)', opacity: '1' },
        },
      },
      backgroundImage: {
        // Espiral mexicana — réplica del fondo del logo
        'mex-spiral':
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40' width='40' height='40'%3E%3Cg fill='none' stroke='%23B65512' stroke-width='1.3' opacity='0.55'%3E%3Ccircle cx='20' cy='20' r='14'/%3E%3Ccircle cx='20' cy='20' r='9'/%3E%3Ccircle cx='20' cy='20' r='4'/%3E%3C/g%3E%3C/svg%3E\")",
        // Puntitos tipo papel de china
        'mex-dots':
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' width='20' height='20'%3E%3Ccircle cx='10' cy='10' r='1.4' fill='%230B0908' opacity='0.18'/%3E%3C/svg%3E\")",
        // Grano vintage
        'grain':
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.55 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      },
      letterSpacing: {
        'tightest': '-0.06em',
        'tighter': '-0.04em',
      },
      boxShadow: {
        // Sombra dura tipo loteria/cómic
        'comic': '6px 6px 0 #0B0908',
        'comic-sm': '3px 3px 0 #0B0908',
        'comic-lg': '8px 8px 0 #0B0908',
        'comic-chile': '6px 6px 0 #A11414',
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
  plugins: [],
};
