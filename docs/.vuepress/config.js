/*
 * @Date: 2021-11-09 16:49:17
 * @LastEditors: 曾令宇
 * @LastEditTime: 2021-11-11 17:43:16
 * @FilePath: /diaz-zeng.github.io/docs/.vuepress/config.js
 */
const path = require('path');
const webpack = require('webpack');
const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
    theme: 'vdoing', // 使用 vdoing 主题
    title: "Diaz's Blog", locales: {
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
    configureWebpack: {
        plugins: [
            // 覆盖主题内的最近更新组件，修正首页日期展示格式
            new webpack.NormalModuleReplacementPlugin(
                /UpdateArticle(\.vue)?$/,
                path.resolve(__dirname, './overrides/UpdateArticle.vue')
            )
        ]
    },
    themeConfig,
    head,
    plugins,
}
