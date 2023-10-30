import { defaultTheme } from '@vuepress/theme-default'

export default {
  base:'/sd-fe-eng/',
  title: '前端规范工程化',
  theme: defaultTheme({
    logo: '/img/logo.png',
    navbar: [
      // NavbarItem
      {
        text: 'Foo',
        link: '/foo/',
      },
      // NavbarGroup
      {
        text: 'Group',
        children: ['/group/foo.md', '/group/bar.md'],
      },
      // 字符串 - 页面文件路径
      '/bar/README.md',
    ],
  }),
}
