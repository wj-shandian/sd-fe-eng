
import { defaultTheme } from 'vuepress'


export default {
  lang: 'zh-CN',
  title: '前端规范工程化',
  description: '这是我的第一个 VuePress 站点',
  base:'/sd-fe-eng/',
  theme: defaultTheme({
    logo: '/img/logo.png',
  })
}

// export default {
//   base:'/sd-fe-eng/',
//   title: '前端规范工程化',
//   theme: defaultTheme({
//     logo: '/img/logo.png',
//     navbar: [
//       // NavbarItem
//       {
//         text: 'Foo',
//         link: '/foo/',
//       },
//       // NavbarGroup
//       {
//         text: 'Group',
//         children: ['/group/foo.md', '/group/bar.md'],
//       },
//       // 字符串 - 页面文件路径
//       '/bar/README.md',
//     ],
//   }),
// }
