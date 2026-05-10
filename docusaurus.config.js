// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Laboratoire LITNA',
  tagline: 'Recherche & Innovation - Université de Bangui',
  favicon: 'img/favicon.ico',

  url: 'https://docs.univ-bangui.cf',
  baseUrl: '/',

  // Config GitHub - Crucial pour la redirection
  organizationName: 'NathanZoh', 
  projectName: 'docusaurus_name', 

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          remarkPlugins: [require('remark-math')],
          rehypePlugins: [require('rehype-katex')],
          // Lien de modification pointant vers VOTRE GitHub
          editUrl: 'https://github.com/NathanZoh/docusaurus_name/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/NathanZoh/docusaurus_name/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Nathan Zoh-Ponguele',
        logo: {
          alt: 'LITNA Logo',
          src: 'img/logo.svg', // Assurez-vous d'avoir un logo ou gardez celui par défaut
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Recherches',
          },
          {to: '/blog', label: 'Blog Académique', position: 'left'},
          {
            href: 'https://github.com/NathanZoh/docusaurus_name',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              { label: 'Ressources & PDFs', to: '/docs/ressources' },
              { label: 'Souveraineté Numérique', to: '/docs/souverainete-numerique' },
            ],
          },
          {
            title: 'Liens Officiels',
            items: [
              { label: 'Université de Bangui', href: 'https://univ-bangui.cf' },
              { label: 'GitHub Project', href: 'https://github.com/NathanZoh/docusaurus_name' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Nathan Zoh-Ponguele - EDST / LITNA.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
