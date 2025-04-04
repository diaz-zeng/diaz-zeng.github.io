/*
 * @Date: 2021-11-09 17:09:57
 * @LastEditors: 曾令宇
 * @LastEditTime: 2021-11-11 17:59:48
 * @FilePath: /diaz-zeng.github.io/docs/.vuepress/config/plugins.js
 */
// 插件配置
module.exports = [
  'vuepress-plugin-baidu-autopush', // 百度自动推送

  // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
  [
    'thirdparty-search',
    {
      thirdparty: [
        // 可选，默认 []
        {
          title: '在MDN中搜索',
          frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
          behindUrl: '', // 搜索链接的后面部分，可选，默认 ''
        },
        {
          title: '在Runoob中搜索',
          frontUrl: 'https://www.runoob.com/?s=',
        },
        {
          title: '在Vue API中搜索',
          frontUrl: 'https://cn.vuejs.org/v2/api/#',
        },
        {
          title: '在Bing中搜索',
          frontUrl: 'https://cn.bing.com/search?q=',
        },
        {
          title: '通过百度搜索',
          frontUrl: 'https://www.baidu.com/s?wd=',
        },
      ],
    },
  ],

  [
    'one-click-copy',
    {
      // 代码块复制按钮
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false, // whether to display on the mobile side, default: false.
    },
  ],
  [
    'demo-block',
    {
      // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
      settings: {
        // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
        // cssLib: ['http://xxx'], // 在线示例中的css依赖
        // vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
        jsfiddle: false, // 是否显示 jsfiddle 链接
        codepen: true, // 是否显示 codepen 链接
        horizontal: false, // 是否展示为横向样式
      },
    },
  ],
  [
    'vuepress-plugin-zooming', // 放大图片
    {
      selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
      options: {
        bgColor: 'rgba(0,0,0,0.6)',
      },
    },
  ],
  [
    'vuepress-plugin-baidu-tongji', // 百度统计
    {
      hm: '32289b28395b773147db657757b43bcc',
    },
  ],
  [
    '@vuepress/last-updated', // "上次更新"时间格式
    {
      transformer: (timestamp, lang) => {
        const dayjs = require('dayjs') // https://day.js.org/
        const utc = require('dayjs/plugin/utc')
        dayjs.extend(utc)
        return dayjs(timestamp).utcOffset(480).format('YYYY/MM/DD, HH:mm:ss');
      },
    },
  ],
  // [
  //   'vuepress-plugin-comment',
  //   {
  //     choosen: 'gitalk',
  //     options: {
  //       clientID: '7c3174848f4ed5871ec9',
  //       clientSecret: 'bcde9e55f381cf29765e7117a0229ab0f805db39',
  //       repo: 'diaz-zeng.github.io.commemts',
  //       owner: 'diaz-zeng',
  //       admin: ['diaz-zeng'],
  //       distractionFreeMode: false,
  //       proxy: 'https://cors-server-steel.vercel.app/github_access_token',
  //       id: '<%- window.location.pathname %>',
  //       title: '<%- document.title %>',
  //       body: '<%- window.location.pathname %>',
  //     }
  //   }
  // ]
]
