/*
 * @Date: 2021-11-09 16:49:17
 * @LastEditors: 曾令宇
 * @LastEditTime: 2021-11-11 17:43:16
 * @FilePath: /diaz-zeng.github.io/docs/.vuepress/config.js
 */
const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
    theme: 'vdoing', // 使用npm包主题
    title: '没有好名字', locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
            lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
        }
    },
    markdown: {
        toc: {
            includeLevel: [2, 3, 4]
        },
        lineNumber: true // 代码块行号
    },
    themeConfig,
    head,
    plugins,
}
