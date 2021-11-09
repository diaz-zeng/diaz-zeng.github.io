/*
 * @Date: 2021-11-09 17:09:57
 * @LastEditors: 曾令宇
 * @LastEditTime: 2021-11-09 17:36:09
 * @FilePath: /diaz-zeng.github.io/docs/.vuepress/config/nav.js
 */
// nav
module.exports = [
  { text: '首页', link: '/' }, {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
  { text: "GitHub", link: 'https://github.com/diaz-zeng', target: '_blank' },
  { text: "Issues", link: 'https://github.com/diaz-zeng/diaz-zeng.github.io/issues', target: '_blank' },

]
