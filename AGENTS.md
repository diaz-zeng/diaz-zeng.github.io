# Repository Guidelines

## 项目定位

这是一个基于 `VuePress 1` 和 `vuepress-theme-vdoing` 的个人博客/知识站仓库，内容以 Markdown 为核心，当前主题主要覆盖两类内容：

- Web 前端
- 射箭相关分享

仓库的核心目标不是构建复杂应用，而是稳定产出和发布静态内容。因此后续修改应优先保证：

- 内容可维护
- 站点构建稳定
- 发布链路不中断
- 文章链接与 Frontmatter 不被破坏

## 语言与协作规则

- 所有说明、注释、文档和答复默认使用中文。
- 优先做基于仓库现状的增量修改，不要把当前 VuePress 站点强行改造成别的技术架构。
- 修改前先理解目录结构、配置入口和发布流程，避免只改局部导致全站行为变化。
- 如果变更会影响文章永久链接、导航结构、分类归档或发布流程，需要在提交说明中明确指出风险。

## 技术栈

- Node.js：仓库通过 [`.nvmrc`](/Users/bytedance/personal_workspace/diaz-zeng.github.io/.nvmrc) 固定为 `lts/iron`
- 包管理器：优先使用 `pnpm`
- 站点框架：`vuepress@1.8.0`
- 主题：`vuepress-theme-vdoing@1.8.5`
- 主要配置风格：CommonJS

## 目录结构

- [docs/](/Users/bytedance/personal_workspace/diaz-zeng.github.io/docs/)：站点内容根目录
- [docs/README.md](/Users/bytedance/personal_workspace/diaz-zeng.github.io/docs/README.md)：首页 / 关于页
- [docs/.vuepress/](/Users/bytedance/personal_workspace/diaz-zeng.github.io/docs/.vuepress/)：VuePress 配置、样式、静态资源
- [docs/.vuepress/config.js](/Users/bytedance/personal_workspace/diaz-zeng.github.io/docs/.vuepress/config.js)：总配置入口
- [docs/.vuepress/config/](/Users/bytedance/personal_workspace/diaz-zeng.github.io/docs/.vuepress/config/)：导航、插件、主题等拆分配置
- [docs/.vuepress/styles/](/Users/bytedance/personal_workspace/diaz-zeng.github.io/docs/.vuepress/styles/)：主题样式覆盖
- [docs/@pages/](/Users/bytedance/personal_workspace/diaz-zeng.github.io/docs/@pages/)：分类、标签、归档等页面
- [utils/](/Users/bytedance/personal_workspace/diaz-zeng.github.io/utils/)：Frontmatter 批处理与百度推送辅助脚本
- [baiduPush.sh](/Users/bytedance/personal_workspace/diaz-zeng.github.io/baiduPush.sh)：百度链接推送脚本入口
- [.github/workflows/deploy-site.yml](/Users/bytedance/personal_workspace/diaz-zeng.github.io/.github/workflows/deploy-site.yml)：GitHub Pages / Gitee / 百度推送流水线

## 常用命令

- 安装依赖：`pnpm install`
- 本地开发：`pnpm docs:dev`
- 生产构建：`pnpm docs:build`
- 百度推送：`pnpm baiduPush <站点域名> <token>`

如果只是修改文档、导航、主题配置或样式，至少执行一次 `pnpm docs:build` 进行验证。

## 内容编写约定

### 1. Markdown 是一等公民

- 所有文章内容放在 `docs/` 下的分类目录内。
- 首页内容维护在 [docs/README.md](/Users/bytedance/personal_workspace/diaz-zeng.github.io/docs/README.md)。
- 分类、标签、归档页使用 `docs/@pages` 下的页面，不要随意移动或删除。

### 2. 文件命名遵循当前仓库习惯

`utils/modules/readFileList.js` 对 Markdown 文件名有约定，推荐沿用：

- 目录命名：`01.射箭`、`00.Web前端`
- 文章命名：`01.bow-share.md`、`00.vuepress-startup.md`

不要随意引入包含过多 `.` 的 Markdown 文件名，否则批处理脚本可能忽略该文件。

### 3. Frontmatter 尽量保持完整

参考现有文章，建议至少包含：

```yaml
---
title: 文章标题
date: 2025-03-31 18:23:11
permalink: /pages/86e9e2/
categories:
  - 分类名
tags:
  - 标签名
---
```

注意事项：

- `permalink` 会被 [utils/baiduPush.js](/Users/bytedance/personal_workspace/diaz-zeng.github.io/utils/baiduPush.js) 用来生成推送链接，已有文章不要随意改动。
- `categories` 和 `tags` 会影响 Vdoing 主题的分类、标签、归档页。
- `date` 建议沿用现有格式：`YYYY-MM-DD HH:mm:ss`。

### 4. 图片与附件

- 文章资源优先放在同名资源目录中，例如 `01.bow-share.md.assets/`。
- Markdown 中优先使用相对路径引用资源，保持仓库可迁移性。

## 配置修改约定

### 1. 优先修改拆分配置，而不是把所有内容塞回主配置

- 总入口：[`docs/.vuepress/config.js`](/Users/bytedance/personal_workspace/diaz-zeng.github.io/docs/.vuepress/config.js)
- 导航：[`docs/.vuepress/config/nav.js`](/Users/bytedance/personal_workspace/diaz-zeng.github.io/docs/.vuepress/config/nav.js)
- 主题：[`docs/.vuepress/config/themeConfig.js`](/Users/bytedance/personal_workspace/diaz-zeng.github.io/docs/.vuepress/config/themeConfig.js)
- 插件：[`docs/.vuepress/config/plugins.js`](/Users/bytedance/personal_workspace/diaz-zeng.github.io/docs/.vuepress/config/plugins.js)
- `head`：[`docs/.vuepress/config/head.js`](/Users/bytedance/personal_workspace/diaz-zeng.github.io/docs/.vuepress/config/head.js)

### 2. 保持 VuePress 1 / CommonJS 写法一致

- 当前配置全部使用 `require` 和 `module.exports`
- 不要在小改动中混入 ESM 改造
- 若未来需要升级 VuePress 2，应作为独立重构任务处理

### 3. 谨慎调整主题行为

当前主题配置中 `sidebar: 'structuring'` 依赖结构化侧边栏和目录页生成逻辑。修改以下内容时要整体评估：

- `sidebar`
- `nav`
- 分类、标签、归档页面
- 主题插件开关

## 脚本与发布链路

### 1. 发布流程

当前 CI 位于 [`.github/workflows/deploy-site.yml`](/Users/bytedance/personal_workspace/diaz-zeng.github.io/.github/workflows/deploy-site.yml)，流程为：

1. `master` 分支触发构建
2. 构建 `docs/.vuepress/dist`
3. 部署到 `gh-pages`
4. 同步推送到 Gitee
5. 向百度推送站点链接

### 2. 百度推送依赖 permalink

- [baiduPush.sh](/Users/bytedance/personal_workspace/diaz-zeng.github.io/baiduPush.sh) 会调用 [utils/baiduPush.js](/Users/bytedance/personal_workspace/diaz-zeng.github.io/utils/baiduPush.js)
- 脚本会扫描 Markdown Frontmatter 中的 `permalink`
- 新文章若缺失 `permalink`，不会进入推送结果

### 3. Frontmatter 批量脚本有修改风险

[utils/editFrontmatter.js](/Users/bytedance/personal_workspace/diaz-zeng.github.io/utils/editFrontmatter.js) 会批量改写文章头信息。使用前建议：

- 先提交或备份当前变更
- 先检查 [utils/config.yml](/Users/bytedance/personal_workspace/diaz-zeng.github.io/utils/config.yml)
- 批量执行后逐项抽查生成结果

## 已知风险与维护建议

- 仓库当前没有自动化测试，`pnpm docs:build` 是最基本的回归验证方式。
- 当前执行 `pnpm docs:build` 可以成功，但会出现一组 Vdoing 侧边栏扫描警告，主要来自 `*.md.assets/` 资源目录、图片文件名序号规则以及 `docs/img/` 目录。这是仓库现状，暂不阻塞构建；若后续要治理告警，需要统一资源目录与命名策略。
- CI 主体使用 `pnpm`，但百度推送步骤里仍使用 `yarn install`。如果后续调整流水线，注意统一包管理器行为。
- `utils/` 下的脚本使用了 `chalk`、`gray-matter`、`inquirer`、`json2yaml`、`yamljs` 等依赖，但这些依赖未完整出现在当前 `package.json` 中。若要正式使用或维护这些脚本，应先核对依赖声明是否完整。
- [docs/.vuepress/config/head.js](/Users/bytedance/personal_workspace/diaz-zeng.github.io/docs/.vuepress/config/head.js) 中仍残留历史仓库路径注释，这类注释不影响运行，但后续清理时应避免误判真实路径。

## 建议的工作方式

- 新增文章时，优先复制一篇现有文章作为模板，再修改 Frontmatter 和正文。
- 修改站点结构时，先看 `docs/.vuepress/config/`，再看 `docs/@pages/` 是否需要联动。
- 修改发布相关逻辑时，同时检查 GitHub Pages、Gitee 和百度推送三段链路。
- 做仓库级调整时，先说明目标、影响面和回滚方式，再动手修改。
