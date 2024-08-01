import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "JuanValeraDev",
  description: "Hi! My name is Juan Valera",
  base: '/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/projects' },
      { text: 'About me', link: '/about-me' }
    ],

    sidebar: [
      {
        text: 'Sections',
        items: [
          { text: 'Technical Skills', link: '/technical-skills' },
          { text: 'Projects', link: '/projects' },
          { text: 'About me', link: '/about-me' },
          { text: 'Resume', link: '/resume' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/JuanValeraDev' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/juan-valera-reales/' },
    ],
    footer: {
      message: 'Made by JuanValeraDev',
    }
  }
})
