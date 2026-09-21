import { defineConfig } from 'astro/config';

// AirportRAK — le français vit à la racine avec des slugs français ; en, es,
// de, nl et ar sont servis sous /<lang>/ avec des slugs anglais.
// Barres obliques finales partout (le format de build est 'directory').
export default defineConfig({
  site: 'https://airportrak.com',
  trailingSlash: 'always',
  compressHTML: true,
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en', 'es', 'de', 'nl', 'ar'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    resolve: {
      alias: {
        '@': '/src',
        '@components': '/src/components',
        '@layouts': '/src/layouts',
        '@locales': '/src/locales',
        '@styles': '/src/styles',
        '@data': '/src/data',
        '@i18n': '/src/i18n',
      },
    },
  },
});
