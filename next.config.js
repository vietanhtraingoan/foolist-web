const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n: {
    locales: ['vn', 'en'],
    defaultLocale: 'vn',
    localeDetection: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  reactStrictMode: true,
};
