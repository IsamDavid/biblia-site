// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Lecturas Bíblicas',
  tagline: 'Notas personales organizadas por libro y capítulo',
  favicon: 'img/favicon.ico',

  url: 'https://IsamDavid.github.io',
  baseUrl: '/biblia-site/',
  organizationName: 'IsamDavid',
  projectName: 'biblia-site',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: undefined, // Oculta los enlaces para editar en GitHub
        },
        blog: false, // 🔥 Blog desactivado completamente
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Lecturas Bíblicas',
        logo: {
          alt: 'Logo Biblia',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docs',
            position: 'left',
            label: 'Lecturas',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Lecturas',
            items: [
              {
                label: 'Inicio',
                to: '/docs/intro',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Lecturas Bíblicas.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
