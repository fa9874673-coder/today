# SIGNAL SCANNER 今日状态检测终端

一个纯静态的趣味网页小项目，适合部署到 GitHub Pages 后分享给朋友打开。

## 项目特点

- 只使用 HTML、CSS、JavaScript
- 不依赖后端、数据库、Node 或构建工具
- 不调用外部 API
- 不收集用户信息
- 不请求摄像头、麦克风、定位、通知等权限
- 适配电脑和手机竖屏浏览

## 文件说明

- `index.html`：页面结构和展示内容
- `style.css`：页面样式、终端面板、柔和科技感背景和手机适配
- `script.js`：检测按钮、终端日志、进度条和随机报告逻辑

## 本地打开

直接双击 `index.html` 即可在浏览器中打开。

## GitHub Pages 部署

1. 将 `index.html`、`style.css`、`script.js` 和 `README.md` 上传到仓库根目录。
2. 进入仓库 `Settings`。
3. 打开 `Pages`。
4. Source 选择 `Deploy from a branch`。
5. Branch 选择 `main`，目录选择 `/root`。
6. 保存后等待 GitHub Pages 生成访问链接。
