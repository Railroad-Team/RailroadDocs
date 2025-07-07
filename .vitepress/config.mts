import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Railroad Docs",
  description: "The documentation for the Railroad IDE",
  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    fr: {
        label: 'Français', //TODO create a system to "patch" the docs to other languages
        lang: 'fr',
        link: '/fr/'
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    //TODO add edit links?
    i18nRouting: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/tutorials/' },
      { text: 'The Port', link: '/port' }, //TBD
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          {text: 'Overview', link: '/tutorials/'},
          {text: 'Installation', link: '/tutorials/installation'},
          {text: 'Creating a Project', link: '/tutorials/project-creation'},
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Railroad-Team/Railroad' }
    ],
  },
  srcDir: 'src',
  ignoreDeadLinks: true, // TEMPORARY: Remove at a later date
  markdown: {
    theme: {
      light: "catppuccin-latte",
      dark: "catppuccin-mocha"
    }
  }
})
