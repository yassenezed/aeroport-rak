import { defineConfig } from 'astro/config';

// AirportRAK — French at the root (French slugs, no prefix).
// Trailing slashes everywhere (build format defaults to 'directory').
export default defineConfig({
  site: 'https://airportrak.com',
  trailingSlash: 'always',
  compressHTML: true,
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
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
