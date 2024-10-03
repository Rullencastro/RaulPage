export function getImageUrl(path) : string {
    const base : string = import.meta.env.BASE_URL; // Esto toma el valor de `base` configurado en astro.config.mjs
    return `${base}${path}`;
  }